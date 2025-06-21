# pylint: disable-all

import os
import requests
from datetime import date
from dotenv import load_dotenv
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from google.cloud import firestore

load_dotenv()

WEATHER_API_KEY = os.getenv('WEATHER_API_KEY')
USERNAME = os.getenv('ADMIN_USERNAME')
PASSWORD = os.getenv('ADMIN_PASSWORD')
PROJECT_ID = os.getenv('GOOGLE_CLOUD_PROJECT')
DATABASE_ID = os.getenv('FIRESTORE_DATABASE')

app = Flask(__name__)
CORS(app)

COLLECTION_NAME = 'jobs'
db = firestore.Client(project=PROJECT_ID, database=DATABASE_ID)

@app.route('/ryan/test', methods=['GET'])
def hello_world():
    """Return a hello world JSON response."""
    return jsonify({"message": "Hello, World!"})

@app.route('/ryan/login', methods=['POST'])
def login():
    data = request.get_json()
    if data.get('username') == USERNAME and data.get('password') == PASSWORD:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

@app.route('/ryan/submit', methods=['POST'])
def create_item():
    try:
        data = request.get_json()
        required_fields = ['organization', 'position', 'location', 'url']

        item = {}
        for field in required_fields:
            item[field] = data[field]

        item['date_added'] = date.today().isoformat()
        item['status'] = "Open"
        item['notes'] = data.get('notes', '')

        doc_ref = db.collection(COLLECTION_NAME).document()
        doc_ref.set(item)

        return jsonify({'id': doc_ref.id}), 200
    except Exception as e:
        print(f"Error in create_item: {e}")
        return jsonify({'error': str(e)}), 400

@app.route('/ryan/items', methods=['GET'])
def list_items():
    try:
        docs = db.collection(COLLECTION_NAME).order_by('date_added', direction=firestore.Query.DESCENDING).stream()
        items = []
        for doc in docs:
            doc_data = doc.to_dict()
            doc_data['id'] = doc.id
            items.append(doc_data)

        return jsonify(items), 200
    except Exception as e:
        print(f"Error in list_items: {e}")
        return jsonify({'error': str(e)}), 400

@app.route('/ryan/remove', methods=['DELETE'])
def remove_item():
    try:
        data = request.get_json()
        item_id = data['id']

        doc_ref = db.collection(COLLECTION_NAME).document(item_id)
        doc_ref.delete()

        return jsonify({'id': item_id}), 200
    except Exception as e:
        print(f"Error in remove_item: {e}")
        return jsonify({'error': str(e)}), 400
    
@app.route('/ryan/edit', methods=['PUT'])
def edit_item():
    try:
        data = request.get_json()
        item_id = data.get('id')

        allowed = {'organization', 'position', 'location', 'url', 'status', 'notes'}
        updates = {k: v for k, v in data.items() if k in allowed}

        doc_ref = db.collection(COLLECTION_NAME).document(item_id)
        doc_ref.update(updates)

        return jsonify({'id': item_id}), 200
    except Exception as e:
        print(f"Error updating item: {e}")
        return jsonify({'error': str(e)}), 400
    
@app.route('/ryan/deep-research', methods=['POST'])
def deep_research():
    from src.deep_research import build_and_run

    data = request.get_json()
    job_title = data.get('job_title')
    job_description_url = data.get('job_description_url')
    company_name = data.get('company_name')

    try:
        build_and_run(job_title, job_description_url, company_name)
        output_file = "results/candidate_prep_guide.txt"
        return send_file(output_file, as_attachment=True)
    except Exception as e:
        print(f"Error in deep_research: {e}")
        return jsonify({'error': str(e)}), 400

@app.route('/ryan/pokemon-colors', methods=['POST'])
def pokemon_colors():
    from src.pokemon_colors import get_pokemon_colors

    data = request.get_json()
    pokemon_id = data.get('pokemon_id')
    shiny = data.get('shiny')

    try:
        name, colors, img_url = get_pokemon_colors(pokemon_id, shiny)
        return jsonify({'name': name, 'colors': colors, 'img_url': img_url}), 200
    except Exception as e:
        print(f"Error in pokemon_colors: {e}")
        return jsonify({'error': str(e)}), 400  
    
@app.route('/ryan/weather', methods=['GET'])
def get_weather():
    try:
        response = requests.get(
            f'https://api.weatherapi.com/v1/current.json?key={WEATHER_API_KEY}&q=Nashville&aqi=no'
        )
        response.raise_for_status()
        return jsonify(response.json()), 200
    except Exception as e:
        print(f"Error in get_weather: {e}")
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)