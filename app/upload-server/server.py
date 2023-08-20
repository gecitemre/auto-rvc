import os

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/upload-weights', methods=['POST'])
def upload_weights():
    file = request.files['file']
    if file:
        filename = file.filename
        file.save(os.path.join('./data/weights', filename))
        return jsonify({'message': 'Weights uploaded successfully'})
    else:
        return jsonify({'error': 'No file was uploaded'})

@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    file = request.files['file']
    if file:
        filename = file.filename
        file.save(os.path.join('./data/audio', filename))
        return jsonify({'message': 'Audio uploaded successfully'})
    else:
        return jsonify({'error': 'No file was uploaded'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)