from flask import Blueprint, request, jsonify
from .models import User
from flask_jwt_extended import create_access_token
from . import mongo, bcrypt

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
