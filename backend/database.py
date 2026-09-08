from sqlalchemy import create_engine

DATABASE_URL = "postgresql+psycopg://angela:password@localhost:5432/holamundo"

engine = create_engine(DATABASE_URL)