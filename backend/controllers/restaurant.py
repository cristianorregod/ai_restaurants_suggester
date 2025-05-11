import os
import openai
from fastapi import HTTPException
from tools.dataset_tools import DatasetTools
from typing import List
from dotenv import load_dotenv
from tools.ai import generate_restaurants_recomendation

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

DATASET_PATH = "dataset/restaurants.csv"
tools = DatasetTools(DATASET_PATH)

def get_all_restaurants():
    restaurants = tools.get_all_restaurants()
    return {
        "message": "Restaurantes obtenidos con éxito",
        "restaurants": restaurants
    }

def get_recommended_restaurants(query: str) -> List[dict]:
    df = tools.get_categories_for_recomendations()
    gpt_restaurants_id_recomendations = generate_restaurants_recomendation(query, df)
    if not gpt_restaurants_id_recomendations['status']:
        restaurants = tools.get_all_restaurants()
        return {
            "message": gpt_restaurants_id_recomendations['justification'],
            "restaurants": restaurants
        }

    ids = gpt_restaurants_id_recomendations['ids']
    message = gpt_restaurants_id_recomendations['justification']
    restaurants = tools.filter_by_ids(ids)
    
    return {
        "message": message,
        "restaurants": restaurants
    }
    