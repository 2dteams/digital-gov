from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)


@app.route('/')
def get_ogd(name='DataSelector'):
    return render_template('selector.html')


@app.route('/', methods=['POST'])
def main_chart(name='index'):
    file = request.files.get('file')
    file
    return render_template('index.html')
