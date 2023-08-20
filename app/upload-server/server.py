import os

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/upload-file', methods=['POST'])
def upload_file():
    file = request.files['file']
    # directory = request.form.get('directory') TODO
    directory = './data'
    if file:
        filename = file.filename
        file.save(os.path.join(directory, filename))
        return jsonify({'message': 'File uploaded successfully'})
    else:
        return jsonify({'error': 'No file was uploaded'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)