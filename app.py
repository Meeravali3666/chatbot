from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Replace with your actual Google Cloud API key
genai.configure(api_key="AIzaSyD4ACh-2w0swT0YdX6S57OZCzBIN9HiQ8s")

# Initialize the Generative Model
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({'error': 'No message received'}), 400
    
    try:
        response = model.generate_content(user_message)
        bot_response = response.text
        return jsonify({'response': bot_response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
