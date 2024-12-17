from flask import Flask
from app.routes import api_bp
from app.extensions import mongo, cors
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    mongo.init_app(app)
    cors.init_app(app)
    print({"name":"here"})

    # Register API routes
    app.register_blueprint(api_bp)

    return app
