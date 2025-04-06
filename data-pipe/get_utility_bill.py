import time
from datetime import datetime
from selenium.webdriver.common.by import By
from config import logger

def get_hydro_bill(driver, details):
    driver.get(details['url'])
    time.sleep(5)
    user = driver.find_element(By.NAME, "username")
    user.send_keys(details['username'])
    password = driver.find_element(By.NAME, "password")
    password.send_keys(details['password'])
    password.submit()
    time.sleep(20)
    #search hotmail, get verification code and hit verify button next

    return 0

def get_alectra_bill(driver, details):
    return 0

def get_enbridge_bill(driver, details):
    return 0

def get_reliance_bill(driver, details):
    return 0

    # driver.get("https://www.google.ca")
    # time.sleep(5)

    # search_box = driver.find_element(By.NAME, "q")
    # search_box.send_keys("Selenium WebDriver on macOS")
    # search_box.submit()
    # time.sleep(5)