from flask import Flask, request, jsonify
from flask_cors import CORS

# //app instance 
app = Flask(__name__)
CORS(app)

# Routes

@app.route("/", methods=['GET'])
def return_home():
    return jsonify({
        'success': True,
        'message': "Hello, Server is Running!"
    })

@app.route('/analyse', methods=['POST'])
def return_analysis():
    data = request.get_json()
    if not data: 
        return jsonify({
            "success": False,
            "message": "Text is required"
        }), 400
    
    response = {
        "data": data,
        "emotion": "Anxious",
        "confidence": 0.85
    }

    return jsonify({
        'success': True,
        'message': 'Analysed successfully',
        'response': response
    }),200


if __name__ == "__main__":
    app.run(debug=True)
