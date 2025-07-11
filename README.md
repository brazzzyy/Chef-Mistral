# Chef Mistral

**Chef Mistral** is a React web app that lets users input ingredients they have on hand and receive a customized recipe powered by the [Mistral model](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1) via the Hugging Face Inference API.

## Features

- Add multiple ingredients to a list
- Generate a recipe using AI (does not require exact ingredient matches)
- Renders recipes in beautiful markdown format
- Clean, component-based React architecture

## How It Works

Enter in your choice of ingredients and send the ingredients via button, in an array list, over to Mistral AI to receive a recipe generated from it. This project uses Hugging Face's JS library to query Mixtral-8x7B-Instruct model with the ingredients data. The LLM then responds with a recipe formatted in markdown synthax which is then parsed into HTML content.

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
