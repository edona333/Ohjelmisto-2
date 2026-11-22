
from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

# TEHTÄVÄ 1: Alkuluvun tarkistaminen
@app.route('/prime_number/<int:number>')
def prime_number(number):
    is_prime = number > 1

    for i in range(2, number):
        if number % i == 0:
            is_prime = False
            break

    return jsonify({
        "Number": number,
        "isPrime": is_prime
    })


# TEHTÄVÄ 2: Englanti-suomi-sanakirja
@app.route('/translate/<word>')
def translate(word):
    file_path = os.path.join(
        os.path.dirname(__file__),
        'dictionary.json'
    )

    with open(file_path, 'r', encoding='utf-8') as file:
        dictionary = json.load(file)

    word = word.lower()

    if word in dictionary:
        return jsonify({
            "English": word,
            "Finnish": dictionary[word]
        })

    return jsonify({
        "error": "Word not found"
    }), 404


# Käynnistetään Flask
if __name__ == '__main__':
    app.run(port=3000, debug=True)
