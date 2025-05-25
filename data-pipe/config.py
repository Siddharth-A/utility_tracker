import os
import logging
from dotenv import load_dotenv
from pymongo.server_api import ServerApi
from pymongo.mongo_client import MongoClient

filename = os.path.basename(os.getcwd())

# Logging configuration
LOG_FILE = "datapipe.log"

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

# Load environment variables
load_dotenv()

HYDRO_USERNAME = os.getenv("HYDRO_USERNAME")
HYDRO_PASSWORD = os.getenv("HYDRO_PASSWORD")
ALECTRA_USERNAME = os.getenv("ALECTRA_USERNAME")
ALECTRA_PASSWORD = os.getenv("ALECTRA_PASSWORD")
ENBRIDGE_USERNAME = os.getenv("ENBRIDGE_USERNAME")
ENBRIDGE_PASSWORD = os.getenv("ENBRIDGE_PASSWORD")
RELIANCE_USERNAME = os.getenv("RELIANCE_USERNAME")
RELIANCE_PASSWORD = os.getenv("RELIANCE_PASSWORD")
DATABASE_URI = os.getenv("DATABASE_URI")

# Database configuration
client = MongoClient(DATABASE_URI, server_api=ServerApi('1'))
database = client["utility_bills"]
collection_table = database["monthly_bills"]


# Provider dictionary
PROVIDERS = {
    "Bhydro": {
        "url": "https://peelregion.idoxs.ca/authentication/login",
        "username": HYDRO_USERNAME,
        "password": HYDRO_PASSWORD,
    },
    "Alectra": {
        "url": "https://myalectra.alectrautilities.com/portal/#/login",
        "username": ALECTRA_USERNAME,
        "password": ALECTRA_PASSWORD,
    },
    "Enbridge": {
        "url": "https://myaccount.enbridgegas.com/",
        "username": ENBRIDGE_USERNAME,
        "password": ENBRIDGE_PASSWORD,
    },
    "Reliance": {
        "url": "https://myreliancehome.com/Reliance/SignIn.aspx",
        "username": RELIANCE_USERNAME,
        "password": RELIANCE_PASSWORD,
    },
}

logger.info("Configuration setup complete")
