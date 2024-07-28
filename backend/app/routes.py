from flask import Blueprint, request, jsonify
from .features import generate_learning_path, generate_response, listen_to_audio, speak_text
from .models import User
from flask_jwt_extended import create_access_token
from . import mongo, bcrypt
from textblob import TextBlob
from transformers import pipeline



model_name = "gpt2"  # You can use other models like "bert-base-uncased"
nlp = pipeline("text-generation", model=model_name)



auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password') 

    user_model = User(mongo, bcrypt)
    existing_user = user_model.find_user(username) or user_model.find_user(email)

    if existing_user:
        return jsonify({'message': 'User already exists'}), 400

    user_id = user_model.create_user(username, email, password)
    return jsonify({'message': 'User created', 'user_id': user_id}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    identifier = data.get('identifier')
    password = data.get('password')

    user_model = User(mongo, bcrypt)
    user = user_model.find_user(identifier)

    if user and user_model.verify_password(user, password):
        access_token = create_access_token(identity=str(user['_id']))
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@auth.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    feedback = data.get('feedback')
    if not feedback:
        return jsonify({'error': 'No feedback provided'}), 400

    analysis = TextBlob(feedback)
    sentiment = analysis.sentiment.polarity

    return jsonify({'sentiment': sentiment})

@auth.route('/generate_learning_path', methods=['POST'])
def generate_path():
    data = request.get_json()
    student_id = data.get('student_id')
    performance_data = data.get('performance_data')
    feedback = data.get('feedback')

    if not student_id or not performance_data or not feedback:
        return jsonify({'error': 'Missing data'}), 400

    analysis = TextBlob(feedback)
    sentiment = analysis.sentiment.polarity

    learning_path = generate_learning_path(student_id, performance_data, sentiment)

    return jsonify({'learning_path': learning_path})

@auth.route('/query', methods=['POST'])
def handle_query():
    data = request.get_json()
    query = data.get('query')
    if not query:
        return jsonify({'error': 'No query provided'}), 400

    try:
        # Generate response using Hugging Face Transformers
        response = nlp(query, max_length=150, num_return_sequences=1)
        answer = response[0]['generated_text'].strip()
        return jsonify({'response': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@auth.route('/voice-interaction', methods=['POST'])
def voice_interaction():
    # Capture audio and convert to text
    query = listen_to_audio()
    if not query:
        return jsonify({'error': 'Could not understand the audio input'}), 400
    
    # Generate response
    response = generate_response(query)
    
    # Convert response to speech
    speak_text(response)
    
    return jsonify({'response': response})