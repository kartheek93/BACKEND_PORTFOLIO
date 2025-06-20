import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://backend_portfolio_eyt8_user:rRLsWfP17GnYFdXQPJzwhXfm3QOrO1VW@dpg-d13sc224d50c73e9rktg-a/backend_portfolio_eyt8"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')  # ✅ not your actual email
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')  # ✅ not your actual app password
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_USERNAME')  # ✅ recommended


