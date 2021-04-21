from flask import Flask
from flask_cors import CORS
from os import environ, path
from dotenv import load_dotenv
from .foods import Foods

# from flask_sqlalchemy import SQLAlchemy
# from flask_login import LoginManager
# from flask_migrate import Migrate


app = Flask(__name__, instance_relative_config=False)
app.config.from_object("config.Config")

# init SQLAlchemy so we can use it later in our models
# db = SQLAlchemy()
# login = LoginManager()
# migrate = Migrate()
cors = CORS()
foods = Foods()
# db = SQLAlchemy()

# Application Configuration
# db.init_app(app)
# login.init_app(app)
# migrate.init_app(app, db)
cors.init_app(app)

with app.app_context():
    from . import api

    # Register Blueprints
    #  app.register_blueprint(auth.auth_bp)
    app.register_blueprint(api.api_bp)
    #  app.register_blueprint(visuals.visual_bp)

    # Create Database Models
    #  db.create_all()
