import time
from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
driver.get("https://www.google.ca")
time.sleep(5)

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium WebDriver on macOS")
search_box.submit()
time.sleep(5)

driver.implicitly_wait(5)
# driver.quit()