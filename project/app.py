import os
from flask import Flask, render_template, send_file, send_from_directory
from flask_cors import CORS

STATIC_FOLDER = os.path.join("react_app", "build")

app = Flask(__name__, static_folder=STATIC_FOLDER)

# CORS IS USED FOR CROSS ORIGIN RESOURCE SHARING
CORS(app)

@app.route('/example')
def yolo():
    return "example"

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(STATIC_FOLDER + path):
        return send_from_directory(STATIC_FOLDER, path)
    else:
        return send_from_directory(STATIC_FOLDER, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True, debug=True)
