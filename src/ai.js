import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a 
recipe they could make with some or all of those ingredients. You don't need to use every 
ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
console.log("API Key:", REACT_APP_API_KEY); // Debugging line
if (!REACT_APP_API_KEY) {
    throw new Error("API_KEY is not defined. Please set it in your environment variables.");
}

const hf = new HfInference(REACT_APP_API_KEY);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    console.log("Ingredients passed to API:", ingredientsString); // Debugging line
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        console.log("API Response:", response); // Debugging line
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error fetching recipe:", err.message);
        return "Sorry, I couldn't generate a recipe. Please try again later.";
    }
}
