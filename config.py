import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL",
        "postgresql://postgres:938186@localhost:5432/portfolio"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False


