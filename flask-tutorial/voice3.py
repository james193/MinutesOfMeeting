import speech_recognition as sr
import json

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

# The context manager opens the file and reads its contents, storing the data in an AudioFile instance called source.
# Then the record() method records the data from the entire file into an AudioData instance.