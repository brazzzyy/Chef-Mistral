readme_content = """# 👨‍🍳 Chef Mistral

**Chef Mistral** is a React web app that lets users input ingredients they have on hand and receive a customized recipe powered by the [Mistral model](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1) via the Hugging Face Inference API.

## 🚀 Features

- Add multiple ingredients to a list
- Generate a recipe using AI (does not require exact ingredient matches)
- Renders recipes in beautiful markdown format
- Clean, component-based React architecture

## 🧠 How It Works

The app uses Hugging Face's `@huggingface/inference` JS library to query the **Mixtral-8x7B-Instruct** model with a list of ingredients. The model responds with a recipe in markdown format which is displayed in the UI.

## 📁 Project Structure

.
├── public/
│ └── assets/
│ └── chef.png
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Main.jsx
│ │ ├── List.jsx
│ │ └── Recipe.jsx
│ ├── App.js
│ ├── index.js
│ ├── ai.js
│ ├── App.css
│ └── index.css

bash
Always show details

Copy

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chef-mistral.git
   cd chef-mistral
Install dependencies

bash
Always show details

Copy
npm install
Set up environment variables

Create a .env file in the root directory with your Hugging Face Inference API key:

bash
Always show details

Copy
REACT_APP_API_KEY=your_huggingface_api_key_here
You can get your key from https://huggingface.co/settings/tokens

Run the app

bash
Always show details

Copy
npm start
App will be available at http://localhost:3000

✨ Example Usage
Enter ingredients like chicken, onion, corn

Click "Add Ingredient"

Once 4+ ingredients are added, a button will appear

Click Get Recipe and wait for AI-generated markdown output

Enjoy your custom recipe!

📦 Dependencies
React

@huggingface/inference

react-markdown

💡 Future Enhancements
Ingredient auto-suggestions

Saving favorite recipes

Editable markdown viewer

Image rendering from recipe steps (via another AI model)

🧑‍💻 Author
Brady Lor
Built with ❤️ and Mistral AI

📄 License
This project is licensed under the MIT License. See the LICENSE file for more info.
"""

readme_path = Path("/mnt/data/README.md")
readme_path.write_text(readme_content)

readme_path.name
