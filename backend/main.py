from fastapi import FastAPI
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import engine
import models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


models.Base.metadata.create_all(bind=engine)


@app.get("/hello")
def hello():
    return {"message": "Hola Mundo"}

@app.get("/mensajes")
def obtener_mensajes():
    with Session(engine) as session:
        mensajes = session.query(models.Mensaje).all()
        return mensajes

@app.get("/mensajes/{mensaje_id}")
def obtener_mensaje(mensaje_id: int):
    with Session(engine) as session:
        mensaje = session.get(models.Mensaje, mensaje_id)
        return mensaje