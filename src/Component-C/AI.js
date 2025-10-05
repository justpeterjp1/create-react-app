// import { HfInference } from '@huggingface/inference';


// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests
// a recipe the user could make with some or all of those ingredients. You don't need to use every
// ingredient they mention in the recipe. The recipe can include additional ingredients they
// didn't mention, but try not to include too many extra ingredients. Format your response in 
// markdown to make it easier to render to a web page.
// `;

// const hf = new HfInference(process.env.REACT_APP_HF_ACCESS_TOKEN); // Use REACT_APP_ prefix if in frontend

// export async function getRecipeFromMistral(ingredientsArr) {
//   const ingredientsString = ingredientsArr.join(', ');
//   try {
//     const response = await hf.chatCompletion({
//       model: 'mistralai/Mistral-7B-Instruct-v0.3',
//       messages: [
//         { role: 'system', content: SYSTEM_PROMPT },
//         { role: 'user', content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make.` },
//       ],
//       max_tokens: 1024, // ✅ corrected
//     });

//     return response.choices?.[0]?.message?.content || 'No recipe found.';
//   } catch (err) {
//     console.error('Error fetching recipe:', err.message);
//     return 'Something went wrong while fetching the recipe.';
//   }
// }


