import os
import openai
from openai import OpenAI
import json
from fastapi import HTTPException
from typing import List
from dotenv import load_dotenv

load_dotenv()

open_ai_api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=open_ai_api_key)



def generate_restaurants_recomendation(query: str, df) -> dict:

    dataset_json = json.dumps(df.to_dict(orient="records"), ensure_ascii=False, indent=2)

    prompt = f"""
Tienes un dataset de restaurantes de Cali, Colombia con las siguientes columnas:
- name: Nombre del restaurante
- category: Categoría
- stars: Calificación
- description: Descripción
- price: Rango de precios (más $ = más caro)
- reviews: Reseñas de clientes
- schedule: Horario de atención
- menu: Platos y precios
- address: Dirección

Solicitud del cliente: "{query}"

Con base en esta solicitud y la información del dataset, recomiéndame 5 restaurantes ideales.

Devuelve SOLO un objeto JSON con esta estructura:

{{
  "justification": "Explica brevemente por qué se eligieron esos restaurantes",
  "restaurants": [1, 2, 3, 4, 5]  // IDs numéricos de los restaurantes
}}

Aquí tienes el dataset:

{dataset_json}
    """

    try:
        print("Iniciando petición a OpenAI")
        response = client.chat.completions.create(
            model="gpt-4.1",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=800
        )
        print("Ya tenemos la respuesta del API de OpenAI")
        content = response.choices[0].message.content

        # Intenta decodificar el JSON directamente
        print("Validando respuesta de OpenAI")
        result = json.loads(content)
        if not isinstance(result, dict) or "restaurants" not in result:
            {
                "justification": "ChatGPT esta disvariando y no entregó una respuesta que haga match con el dataset.",
                "status": False
            }
            raise ValueError("La respuesta no contiene el formato esperado.")

        ids = result["restaurants"]
        print("La respuesta de OpenAI es valida")
        return {
            "justification": result["justification"],
            "ids": ids,
            "status": True
        }
    except openai.APIStatusError as e:
        print("Error en petición a OpenAI")
        if e.status_code in [400, 401, 403, 404]: 
            print(e.status_code)
            print(e.response)
            return {
                "justification": "Ha ocurrido un error en la comunicación con el API de OpenAI",
                "status": False
            }

    except Exception as e:
        print("Error generando recomendacion de restaurantes", e)
        raise HTTPException(status_code=500, detail=f"Error al obtener recomendaciones: {e}")