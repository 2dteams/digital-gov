from flask import Flask
from flask import render_template
from flask import request
from lxml import etree

app = Flask(__name__)


@app.route('/')
def get_ogd(name='DataSelector'):
    return render_template('selector.html')


@app.route('/', methods=['POST'])
def main_chart(name='index'):
    file = request.files.get('file')
    doc = etree.parse(file)
    # print(etree.SubElement(doc.getroot(), "element").text)
    return render_template('index.html')
