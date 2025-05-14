from fastapi import APIRouter, Body
from controllers import restaurant as restaurant_controller

router = APIRouter()

@router.get("/restaurants")
def get_restaurants():
    return restaurant_controller.get_all_restaurants()

@router.get("/restaurants/{restaurant_id}")
def get_restaurant_by_id(restaurant_id: int):
    return restaurant_controller.get_restaurant_by_id(restaurant_id)

@router.post("/restaurants/recommend")
def recommend_restaurants(body: dict = Body(...)):
    query = body.get("query")
    if not query:
        return {"error": "Falta el campo 'query' en el cuerpo de la solicitud."}
    return restaurant_controller.get_recommended_restaurants(query)