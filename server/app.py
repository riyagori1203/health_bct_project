from flask import Flask, request
from flask_cors import CORS
import ipfshttpclient
import requests


app = Flask(__name__)
CORS(app)

client = ipfshttpclient.connect('/ip4/127.0.0.1/tcp/5001/http')

def query_raw(text, url='https://bern.korea.ac.kr/plain'):
    return requests.post(url, data={'sample_text': text}, verify=False).json()

@app.route('/')
@app.route('/home', methods=['GET', 'POST'])
def home():
    return 'Test Works!'


@app.route('/upload', methods=['POST'])
def upload():
    if (request.method == 'POST'):
        file = request.files['file']
        res = client.add(file)
        print(res)
        return res['Hash']

if __name__ == '__main__':
    app.run(debug=True)
    app.run(host='0.0.0.0')
