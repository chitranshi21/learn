from flask import Flask
app = Flask(__name__)

@app.route("/servicelist")
def getServiceList():
    return "this is test"

@app.route("/")
def hello():
    return "this is test"

if __name__ == "__main__":
    app.run()
