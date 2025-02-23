#!/usr/bin/env python3

import time
from webdriver import MyDriver
from selenium.webdriver.common.by import By

def main(driver):
    driver.get("https://www.google.ca")
    time.sleep(5)

    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("Selenium WebDriver on macOS")
    search_box.submit()
    time.sleep(5)
    driver.implicitly_wait(5)

if __name__ == "__main__":
    my_driver = MyDriver()
    driver = my_driver.start_webdriver()
    main(driver)
    my_driver.stop_webdriver()