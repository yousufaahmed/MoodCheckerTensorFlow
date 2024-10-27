import pandas as pd
import numpy as np
import json
import pickle
import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
from model import DistilBERTClass
# import tensorflow as tf
#import sklearn

__model = None
__locations = None
__data_columns = None
__pipeline = None

def load_saved_artifacts():
    print('load saved artifacts....start')
    global __tokenizer
    global __model

    __model = DistilBERTClass()  # Initialize the model architecture
    #__model.load_state_dict(torch.load('./artifacts/pytorch_distilbert_news.bin', weights_only=True))


    __model = torch.load('./artifacts2/pytorch_distilbert_news.bin', map_location=torch.device('cpu'))
    #device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    #__model.to(device)  # Move model to the appropriate device
    __model.eval()

    __tokenizer = DistilBertTokenizer(vocab_file='./artifacts2/vocab_distilbert_news.bin', truncation=True, do_lower_case=True)
     
    print('load saved artifacts....end')

def get_estimated_emotion(prompt):

    emotion_labels = ['sadness','joy','love','anger','fear','surprise']
    #device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


    def predict(text, threshold=0.5):
        inputs = __tokenizer(text, return_tensors="pt", truncation=True, padding=True)

        # Move inputs to the same device as the model
        for key in inputs.keys():
            inputs[key] = inputs[key] #.to(device)

        # Run inference (get logits)
        with torch.no_grad():  # No need for gradients during inference
            outputs = __model(**inputs,token_type_ids=None)

        return outputs
    
    output = predict(prompt, threshold=0.5)
    output = output.tolist()
    return output[0]




if __name__ == '__main__':
    load_saved_artifacts()
    print(get_estimated_emotion(''))