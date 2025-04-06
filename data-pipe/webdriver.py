from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

class MyDriver():
    def __init__(self):
        self.driver = None
        # self.service = Service(
        #     executable_path="/Users/sakshamahluwalia/Downloads/chromedriver-mac-arm64/chromedriver"
        # )

    def start_webdriver(self):
        chrome_options = Options()
        # chrome_options.add_argument("--headless")  # Run in headless mode
        # chrome_options.add_argument("--no-sandbox")
        # chrome_options.add_argument"--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-infobars")
        chrome_options.add_argument("--disable-extensions")
        chrome_options.add_argument("--disable-notifications")
        chrome_options.add_argument('--user-data-dir=/Users/Shared/D/Projects/25utility_tracker/utility_tracker/data-pipe/user-profile') 
        chrome_options.add_argument('--profile-directory=Profile 2')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option('useAutomationExtension', False)
        chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])

        # chrome_options.binary_location = '/usr/bin/chromium'
        # service = Service('/usr/bin/chromedriver')
        
        # self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.driver = webdriver.Chrome(options=chrome_options)

        return self.driver

    def stop_webdriver(self):
        self.driver.close()
