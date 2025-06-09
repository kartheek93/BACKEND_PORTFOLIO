import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:938186@localhost/portfolio"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

