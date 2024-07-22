from flask import Flask, render_template, request
import jsonify


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():

    if request.method == 'GET':
        return render_template('index.html')
    
    data = request.get_json()
    name = data["name"]
    print(name)
    return {"status_code": 200, "data": name}
    


    



if __name__ == '__main__':
    app.run(debug=True)