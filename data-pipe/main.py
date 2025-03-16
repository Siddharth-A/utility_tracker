#!/usr/bin/env python3

import time
from webdriver import MyDriver
from datetime import datetime
from selenium.webdriver.common.by import By
from config import logger, PROVIDERS

def generate_bill(alectra_bill, hydro_bill, enbridge_bill, reliance_bill):
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

def main(driver):
    logger.info("Begin data extraction")

    for provider,details in PROVIDERS.items():
        if provider == "hydro":
            get_hydro_bill(driver, details)
        if provider == "alectra":
            get_alectra_bill(driver, details)
        if provider == "enbridge":
            get_enbridge_bill(driver, details)
        if provider == "reliance":
            get_reliance_bill(driver, details)

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