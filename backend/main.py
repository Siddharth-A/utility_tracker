from config import app
from routes import bills_bp

# Register the blueprint
app.register_blueprint(bills_bp)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3002)