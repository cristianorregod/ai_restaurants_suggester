from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.restaurant import router as restaurant_router

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(restaurant_router)

@app.get("/")
def root():
    return {"message": "Restaurant Recommender API"}