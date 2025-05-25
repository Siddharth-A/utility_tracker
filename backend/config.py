import os
import logging
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient

# Load environment variables
load_dotenv()
DATABASE_URI = os.getenv("DATABASE_URI")

# Database configuration
client = MongoClient(DATABASE_URI, server_api=ServerApi('1'))
database = client["utility_bills"]
collection_table = database["monthly_bills"]

# Logging configuration
LOG_FILE = "backend.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(filename)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler()
    ],
)
logger = logging.getLogger(__name__)

# Backend configuration
app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})