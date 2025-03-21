import os
import logging
from dotenv import load_dotenv

filename = os.path.basename(os.getcwd())

# Logging configuration
LOG_FILE = "utility_tracker.log"

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

# Database configuration

# Provider dictionary
PROVIDERS = {
    "hydro": {
        "url": "https://google.ca",
        "username": HYDRO_USERNAME,
        "password": HYDRO_PASSWORD,
    },
    "alectra": {
        "url": "https://google.ca",
        "username": ALECTRA_USERNAME,
        "password": ALECTRA_PASSWORD,
    },
    "enbridge": {
        "url": "https://google.ca",
        "username": ENBRIDGE_USERNAME,
        "password": ENBRIDGE_PASSWORD,
    },
    "reliance": {
        "url": "https://google.ca",
        "username": RELIANCE_USERNAME,
        "password": RELIANCE_PASSWORD,
    },
}

logger.info("Configuration setup complete")