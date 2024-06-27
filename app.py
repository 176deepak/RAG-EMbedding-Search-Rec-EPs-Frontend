from flask import Flask, render_template
from flask_cors import CORS
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_bytes(16)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0")