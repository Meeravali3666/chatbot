
---

# Career Guidance Chatbot

**Deployed at**: [https://chatbot-renn.onrender.com](https://chatbot-renn.onrender.com)

This project is a **Career Guidance Chatbot** built with Flask and integrated with Google's Gemini API for generating career-related responses. The frontend uses HTML, CSS, and JavaScript, and the backend is powered by Flask running on Render with serverless functions for handling API requests. The project also includes a vibrant and responsive UI for seamless user interaction.

---

## Table of Contents

1. [Features](#features)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [How to Run the Project Locally](#how-to-run-the-project-locally)
5. [Deployment](#deployment)
6. [Advanced Features](#advanced-features)
7. [Technologies Used](#technologies-used)
8. [Future Improvements](#future-improvements)

---

## Features

- **Career Guidance Chatbot**: Provides personalized career advice based on user queries, using Google's Gemini API.
- **Responsive Design**: The chatbot UI is designed with CSS for responsiveness and mobile-friendly access.
- **Vibrant UI**: Engaging and modern UI for user-friendly interactions.
- **Google Gemini API**: Uses Google's generative AI API to generate accurate and meaningful career advice.
- **Serverless Deployment**: Deployed on Render, leveraging serverless architecture for efficient scaling.
- **Interactive Chat Interface**: Real-time interaction with the chatbot using JavaScript for dynamic content loading.
- **Error Handling**: Graceful error handling with appropriate feedback to users.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Python 3.9+
- Pip (Python package manager)
- Git
- A text editor (VS Code, Sublime Text, etc.)
- A Google Cloud account with access to the Gemini API
- A Render account (for deployment)

### Clone the Repository

```bash
git clone https://github.com/your-username/career-guidance-chatbot.git
cd career-guidance-chatbot
```

### Install Dependencies

You can install the required dependencies from the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

### Set Up the Environment Variables

Create a `.env` file in the project root to store environment variables securely. Add the following:

```plaintext
GEMINI_API_KEY=your_google_gemini_api_key
FLASK_ENV=development  # Use 'production' in production environments
```

Make sure to replace `your_google_gemini_api_key` with your actual API key from Google Cloud.

---

## Environment Variables

To run this project, you will need to set the following environment variables in your `.env` file:

- `GEMINI_API_KEY`: Your API key for Google's Gemini API.
- `FLASK_ENV`: The Flask environment (`development` or `production`).

---

## How to Run the Project Locally

1. **Activate Virtual Environment** (Optional but recommended):
   - On macOS/Linux:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```

2. **Start the Flask Application**:

   ```bash
   flask run
   ```

   By default, the app will be accessible at `http://127.0.0.1:5000/`.

3. **Access the Application**:

   - Open your browser and go to `http://127.0.0.1:5000` to interact with the chatbot locally.

---

## Deployment

The project is deployed on [Render](https://render.com), and the deployed version can be accessed at:

**Deployed at**: [https://chatbot-renn.onrender.com](https://chatbot-renn.onrender.com)

### Steps to Deploy to Render:

1. **Create a Render Account**:
   - Go to [Render](https://render.com/) and sign up for an account.

2. **Connect GitHub Repository**:
   - In the Render dashboard, click **New Web Service** and connect your GitHub repository.

3. **Set Environment Variables**:
   - In the Render dashboard, go to the **Environment** tab and set the `GEMINI_API_KEY` with your Google Gemini API key.

4. **Deploy the Application**:
   - Render will automatically detect the `Procfile` and deploy the Flask app using `gunicorn`.

---

## Advanced Features

- **Google Gemini API Integration**: The chatbot leverages the power of Google's generative AI to provide insightful career advice based on user queries.
- **Serverless Architecture**: The project uses Render's serverless functions to manage API requests and automatically scale based on demand.
- **Error Handling**: Both client-side (JavaScript) and server-side (Flask) error handling is integrated to provide a smooth user experience, with fallback messages in case of API failure.
- **CSS Animations**: The UI includes advanced animations to enhance the user experience during interaction.
- **API Rate Limiting**: Implemented a basic rate-limiting mechanism to prevent API overuse and avoid reaching the Gemini API limits.

---

## Technologies Used

- **Flask**: Python microframework for building the backend API.
- **Google Generative AI (Gemini API)**: Used for generating responses in the chatbot.
- **HTML5/CSS3/JavaScript**: Frontend technologies for building the responsive UI.
- **Gunicorn**: WSGI HTTP server to serve the Flask app in production.
- **Render**: Hosting platform for deploying the Flask app as a serverless function.

---

## Future Improvements

- **User Authentication**: Add user accounts and profiles to store chatbot interactions and provide personalized advice based on user history.
- **Natural Language Processing (NLP)**: Improve the chatbot's understanding of more complex and ambiguous queries using advanced NLP techniques.
- **Contextual Responses**: Enhance the chatbot's responses by making them more context-aware and specific to user backgrounds (e.g., field of study, experience).
- **Feedback Loop**: Implement a feedback mechanism where users can rate the accuracy and helpfulness of the chatbot’s responses.
- **Multi-Language Support**: Integrate language translation APIs to support users from different linguistic backgrounds.

---

Feel free to clone this project, contribute, or provide feedback. For any issues or feature requests, please create an issue in the GitHub repository.

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
