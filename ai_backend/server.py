from flask import Flask, jsonify, request
import util
import requests
import json
app = Flask(__name__)
from model import DistilBERTClass

# @app.route('/get_location_names')
# def get_location_names():
#     response = jsonify({
#         'locations':util.get_location_names()
#     })
#     response.headers.add('Access-Control-Allow-Origin', '*') # Allows cross orgin resource sharing

#     return response

@app.route('/')
def get_home_prices():
    apiResponse = requests.get("https://api.thenewsapi.com/v1/news/top?api_token=p1Kuy373nBPFJWSpkljGnwov4a4QwstLohH75K0s&locale=us&limit=1")
    data = apiResponse.json()
    newsTitle = data["data"][0]["title"]
    response = jsonify({'estimated_mood':util.get_estimated_emotion(newsTitle),
                        'newsTitle': newsTitle
                        })
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == "__main__":
    print("Starting Python Flask server")
    util.load_saved_artifacts()
    app.run()