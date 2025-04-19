#!/usr/bin/env python3

from datetime import datetime
from webdriver import MyDriver
from config import logger, PROVIDERS
from get_utility_bill import hydro, alectra, enbridge, reliance


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


def main(driver):
    logger.info("Begin data extraction pipeline")
    current_bill = generate_bill_entry()
    get_utility_bills(current_bill, driver)
    print(current_bill)


if __name__ == "__main__":
    my_driver = MyDriver()
    driver = my_driver.start_webdriver()
    main(driver)
    my_driver.stop_webdriver()
