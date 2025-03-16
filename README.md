README file

###################
FRONT-END
###################
to begin front-end: cd frontend/utility-tracker; npm run dev

1. sudo npm install -g create-vite
2. npm create vite@latest utility-tracker --template react
    2.1 React 
    2.2 Javascript
3. cd utility-tracker
4. npm install
5. npm run dev
6. npm install @mui/material @emotion/react @emotion/styled
7. npm install @mui/icons-material
8. npm install @mui/x-charts
9. npm install react-router-dom
10. update "dev": "vite --host" in package.json to enable view on other devices
11. npm install @mui/x-data-grid

###################
DATA PIPELINE
###################
1. python3 -m venv venv
2. source venv/bin/activate
3. nano requirements.txt
4. pip freeze > requirements.txt
5.   ==> on target platform, install all packages: pip install -r requirements.txt
6. python3 -m pip install selenium
7. brew install chromedriver
8. cd /opt/homebrew/Caskroom/chromedriver/133.0.6943.126/chromedriver-mac-arm64
9. xattr -d com.apple.quarantine chromedriver
10. chromedriver --version
11. python -m pip install python-dotenv (to store password and username)

x. pip freeze > requirements.txt (to capture all packages)