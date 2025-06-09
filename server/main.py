# pylint: disable-all

import os
from datetime import date
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import firestore

load_dotenv()

app = Flask(__name__)
CORS(app)

COLLECTION_NAME = 'jobs'
t_project = os.getenv('GOOGLE_CLOUD_PROJECT', 'rtruong-cs')
database_id = os.getenv('FIRESTORE_DATABASE', 'app-management')
db = firestore.Client(project=t_project, database=database_id)

@app.route('/ryan/test', methods=['GET'])
def hello_world():
    """Return a hello world JSON response."""
    return jsonify({"message": "Hello, World!"})


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
        docs = db.collection(COLLECTION_NAME).order_by('date_added', direction=firestore.Query.ASCENDING).stream()
        items = []
        for doc in docs:
            doc_data = doc.to_dict()
            doc_data['id'] = doc.id
            items.append(doc_data)
        return jsonify(items), 200

    except Exception as e:
        print(f"Error in list_items: {e}")
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)