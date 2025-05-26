#!/usr/bin/env python3

import time
import argparse
from datetime import datetime
from webdriver import MyDriver
from config import logger, PROVIDERS, collection_table
from get_utility_bill import hydro, alectra, enbridge, reliance

def parse_args():
    parser = argparse.ArgumentParser(description='Utility Tracker Data Pipeline')
    parser.add_argument('--update-cookies', default=False, action='store_true', help='Flag to update cookies before execution')
    return parser.parse_args()

def update_cookies(args, driver):
    logger.info("Update cookies for the webdriver?: ")
    if args.update_cookies:
        logger.info("Updating...")
        time.sleep(500)
    else:
        logger.info("Skipping...")

def generate_bill_entry():
    logger.info("Generate bill entry dictionary")
    hydro_bill = alectra_bill = enbridge_bill = reliance_bill = 0
    current_month = datetime.now().strftime("%m")
    current_year = datetime.now().year

    current_bill = {
        "month": current_month,
        "year": current_year,
        "Alectra": alectra_bill,
        "Bhydro": hydro_bill,
        "Enbridge": enbridge_bill,
        "Reliance": reliance_bill
    }

    return current_bill


def get_utility_bills(current_bill, driver):
    logger.info("Get utility service bills")
    for provider, details in PROVIDERS.items():
        if provider == "Bhydro":
            current_bill[provider] = hydro(driver, details)
        if provider == "Alectra":
            current_bill[provider] = alectra(driver, details)
        if provider == "Enbridge":
            current_bill[provider] = enbridge(driver, details)
        if provider == "Reliance":
            current_bill[provider] = reliance(driver, details)


def fetch_last_entry():
    logger.info("Fetch last entry into database")
    last_entry = collection_table.find_one(sort=[("_id", -1)])
    return last_entry


def push_to_database(current_bill, force_push=False):
    logger.info("Push current utility bill value to database")
    last_entry = fetch_last_entry()

    if ((last_entry["month"] != current_bill["month"]) or force_push):
        collection_table.insert_one(current_bill)
    else:
        logger.info(
            "Duplicate database entry found! current bill will not be pushed")


def get_all_entries():
    logger.info("Fetch all database entries")
    all_entries = list(collection_table.find())
    for entry in all_entries:
        print(entry)
    return all_entries


def main(driver):
    logger.info("Begin data extraction pipeline")
    args = parse_args()
    update_cookies(args, driver)
    current_bill = generate_bill_entry()
    get_utility_bills(current_bill, driver)
    print(current_bill)
    force_push = False
    push_to_database(current_bill, force_push)
    # get_all_entries()


if __name__ == "__main__":
    my_driver = MyDriver()
    driver = my_driver.start_webdriver()
    main(driver)
    my_driver.stop_webdriver()
