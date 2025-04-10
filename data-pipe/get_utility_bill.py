import time
from config import logger
from datetime import datetime
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support import expected_conditions as EC


current_month = datetime.now().strftime("%b")
current_year = datetime.now().year

def read_element_safely(driver, by, value, default):
    try:
        return driver.find_element(by, value)
    except NoSuchElementException:
        return default


def get_hydro_bill(driver, details):
    hydro_bill = 0
    driver.get(details['url'])
    time.sleep(2)
    
    # login
    user = driver.find_element(By.NAME, "username")
    user.send_keys(details['username'])
    password = driver.find_element(By.NAME, "password")
    password.send_keys(details['password'])
    password.submit()
    time.sleep(5)

    # go to bill history
    bill_history = driver.find_element(By.ID, "main_lnkBills")
    bill_history.click()
    time.sleep(5)

    # select bill date range to 30days 
    # this is done to show only latest bill if any since bill data cannot be fetched from a static ID
    select_date_range = Select(driver.find_element(By.ID, "main_ddlRangeDays"))
    select_date_range.select_by_value("30")
    time.sleep(5)

    # read bill date and amount
    # use By.XPATH to account for dynamic ID allocated to billdate and amountdue
    bill_date_element = read_element_safely(driver, By.XPATH, ("//span[contains(@id,'lblBillDate')]"), default = datetime.now())
    bill_date = bill_date_element.text
    bill_amount_element = read_element_safely(driver, By.XPATH, ("//span[contains(@id,'lblAmountDue')]"), default = 0)
    bill_amount = bill_amount_element.text
    logger.info("Peel water bill date: %s bill value: %s", bill_date, bill_amount)

    # process bill date and value
    bill_amount = float(bill_amount.replace("$", "").replace(",", ""))
    bill_date = datetime.strptime(bill_date, "%B %d, %Y")
    bill_date_month = bill_date.strftime("%b")
    bill_date_year = bill_date.year
    # if (bill_date_year == current_year):
    if (bill_date_month == current_month and bill_date_year == current_year):
        hydro_bill = bill_amount

    return hydro_bill

def get_alectra_bill(driver, details):
    alectra_bill = 0
    driver.get(details['url'])
    time.sleep(2)
    
    # login
    user = driver.find_element(By.NAME, "username")
    user.send_keys(details['username'])
    password = driver.find_element(By.NAME, "password")
    password.send_keys(details['password'])
    login_button = driver.find_element(By.CSS_SELECTOR, 'button[aria-label="Click Here to Sign In"]')
    login_button.click()
    time.sleep(5)

    # go to view bill page
    driver.get("https://myalectra.alectrautilities.com/portal/#/ViewBill")
    time.sleep(5)

    # read bill date and amount
    bill_date_element = read_element_safely(driver, By.CLASS_NAME, "dueDate", default = datetime.now())
    bill_date = bill_date_element.text
    bill_amount_element = read_element_safely(driver, By.ID, "totalAmountDue", default = 0)
    bill_amount = bill_amount_element.text
    logger.info("Alectra electricity bill date: %s bill value: $%s", bill_date, bill_amount)

    # process bill date and value
    bill_amount = float(bill_amount.replace("$", "").replace(",", ""))
    bill_date = datetime.strptime(bill_date, "%B %d, %Y")
    bill_date_month = bill_date.strftime("%b")
    bill_date_year = bill_date.year
    if (bill_date_month == current_month and bill_date_year == current_year):
        alectra_bill = bill_amount

    return alectra_bill

def get_enbridge_bill(driver, details):
    return 0

def get_reliance_bill(driver, details):
    return 0