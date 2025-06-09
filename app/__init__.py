from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .models import db
from .routes import main

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")
    db.init_app(app)
    CORS(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(main)

    return app
