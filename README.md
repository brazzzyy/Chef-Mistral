# Chef Mistral

**Chef Mistral** is a React web app that lets users input ingredients they have on hand and receive a customized recipe powered by the [Mistral model](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1) via the Hugging Face Inference API.

## Features

- Add multiple ingredients to a list
- Generate a recipe using AI (does not require exact ingredient matches)
- Renders recipes in beautiful markdown format
- Clean, component-based React architecture

## How It Works

The app uses Hugging Face's `@huggingface/inference` JS library to query the **Mixtral-8x7B-Instruct** model with a list of ingredients. The model responds with a recipe in markdown format which is displayed in the UI.

## Project Structure

```
.
├── public/
│   └── assets/
│       └── chef.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── List.jsx
│   │   └── Recipe.jsx
│   ├── App.js
│   ├── index.js
│   ├── ai.js
│   ├── App.css
│   └── index.css
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chef-mistral.git
   cd chef-mistral
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your Hugging Face Inference API key:

   ```bash
   REACT_APP_API_KEY=your_huggingface_api_key_here
   ```

   You can get your key from https://huggingface.co/settings/tokens

4. **Run the app**
   ```bash
   npm start
   ```

   App will be available at `http://localhost:3000`

## Dependencies

- React
- @huggingface/inference
- react-markdown
