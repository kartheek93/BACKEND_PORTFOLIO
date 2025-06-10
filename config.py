import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://backend_portfolio_eyt8_user:rRLsWfP17GnYFdXQPJzwhXfm3QOrO1VW@dpg-d13sc224d50c73e9rktg-a/backend_portfolio_eyt8"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False


