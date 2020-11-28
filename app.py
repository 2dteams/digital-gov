from flask import Flask
from flask import render_template
from urllib.request import urlopen
from owlready2 import *
import csv

app = Flask(__name__)


@app.route('/')
def index(name='index'):
    return render_template('index.html')


@app.route('/get_ogd')
def get_ogd(name='DATAgov'):
    response = urlopen('https://data.gov.ru/opendata/export/csv')
    file = csv.DictReader(response)
    return render_template('index.html')
