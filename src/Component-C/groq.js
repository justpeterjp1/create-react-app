

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests
// a recipe the user could make with some or all of those ingredients. You don't need to use every
// ingredient they mention in the recipe. The recipe can include additional ingredients they
// didn't mention, but try not to include too many extra ingredients. Format your response in 
// markdown to make it easier to render to a web page.
// `;

// const groq = new Groq({
//   apiKey: process.env.REACT_APP_GROQ_API_KEY, // use REACT_APP_ prefix for frontend env
// });

export async function getRecipeFromGroq(ingredientsArr) {
  try {
    const response = await fetch("http://localhost:5000/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data.content || "No recipe found.";
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Something went wrong while fetching the recipe.";
  }
}
