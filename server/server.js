// server.js
const express = require("express");
const Groq = require("groq-sdk");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// ✅ Apply CORS before routes
app.use(
  cors({
    origin: "http://localhost:3000", // your React app origin
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ✅ Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ Recipe route
app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Ingredients must be an array" });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `You are an assistant that receives a list of ingredients that a user has and suggests
                    a recipe the user could make with some or all of those ingredients. You don't need to use every
                    ingredient they mention in the recipe. The recipe can include additional ingredients they
                    didn't mention, but try not to include too many extra ingredients. Format your response in 
                    markdown to make it easier to render to a web page.`,
        },
        {
          role: "user",
          content: `I have ${ingredients.join(", ")}. Please suggest a recipe.`,
        },
      ],
    });

    res.json(chatCompletion.choices[0].message);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
