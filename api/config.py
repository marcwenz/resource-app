from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, ".env"))


class Config:
    FLASK_APP = "start-backend.py"
    FLASK_ENV = environ.get("FLASK_ENV")
    CORS_HEADERS = "Content-Type"