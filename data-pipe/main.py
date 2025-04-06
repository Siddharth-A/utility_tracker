#!/usr/bin/env python3

import time
from webdriver import MyDriver
from datetime import datetime
from selenium.webdriver.common.by import By
from get_utility_bill import *
from config import logger, PROVIDERS

def generate_bill_entry(current_bill):
    logger.info("Generate bill entry dictionary")
    hydro_bill = alectra_bill = enbridge_bill = reliance_bill = 0
    current_month = datetime.now().strftime("%b")
    current_year = datetime.now().year
    
    current_bill = {
        "month": current_month,
        "year": current_year,
        "Alectra": alectra_bill,
        "Bhydro": hydro_bill,
        "Enbridge": enbridge_bill,
        "Reliance": reliance_bill
    }

def get_utility_bills(current_bill):
    logger.info("Get utility service bills")
    for provider,details in PROVIDERS.items():
        if provider == "Bhydro":
            current_bill[provider] = get_hydro_bill(driver, details)
        if provider == "Alectra":
            current_bill[provider] = get_alectra_bill(driver, details)
        if provider == "Enbridge":
            current_bill[provider] = get_enbridge_bill(driver, details)
        if provider == "Reliance":
            current_bill[provider] = get_reliance_bill(driver, details)

def main(driver):
    logger.info("Begin data extraction pipeline")

    current_bill = {}
    generate_bill_entry(current_bill)
    get_utility_bills(current_bill)
    print(current_bill)
    

    # driver.get("https://www.google.ca")
    # time.sleep(5)

    # search_box = driver.find_element(By.NAME, "q")
    # search_box.send_keys("Selenium WebDriver on macOS")
    # search_box.submit()
    # time.sleep(5)

if __name__ == "__main__":
    my_driver = MyDriver()
    driver = my_driver.start_webdriver()
    main(driver)
    my_driver.stop_webdriver()