from flask import Flask , render_template , request
import speech_recognition as sr
import json

app  = Flask(__name__)

def talk():
    r = sr.Recognizer()

    mic = sr.Microphone(sample_rate = 8000)
    # print(sr.Microphone.list_microphone_names())

    with mic as source:
        print('say something')
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
        print('listening is completed')

    try: 
            text = r.recognize_google(audio)
            print ("you said: " + text)    
    except: 
            print("Google Speech Recognition could not understand audio") 
    a = {'content':text}
    p2j = json.dumps(a)
    return p2j

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/record")
def about():
    return talk()

@app.route("/mail")
def json_mail():
        req_data = request.get_json()

        from_data = req_data['FROM']
        return 'from address is:{}'.format(from_data)

if __name__ == '__main__':
    app.run(debug=True)