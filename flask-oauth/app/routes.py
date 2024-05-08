from flask import jsonify, request
from app import app, db
from app.models import User
import bcrypt

@app.route('/hello-world', methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello World'})

@app.route('/register', methods=['POST'])
def register():
    # Registration logic goes here
    pass

@app.route('/login', methods=['POST'])
def login():
    # Login logic goes here
    pass
