from datetime import datetime
from flask import Blueprint, jsonify
from config import logger, collection_table

bills_bp = Blueprint('bills', __name__, url_prefix='/api')

@bills_bp.route('/bills', methods=['GET'])
def get_bills():
    try:
        logger.info("Fetching all bills from database")
        bills = list(collection_table.find({}, {'_id': 0}))
        return jsonify(bills)
    except Exception as e:
        logger.error(f"Error fetching bills: {str(e)}")
        return jsonify({'error': str(e)}), 500

@bills_bp.route('/bills/current', methods=['GET'])
def get_current_bills():
    try:
        current_month = datetime.now().strftime("%m")
        current_year = datetime.now().year
        logger.info(f"Fetching current month's bills ({current_month}/{current_year})")
        
        current_bills = collection_table.find_one(
            {'month': current_month, 'year': current_year},
            {'_id': 0}
        )
        
        return jsonify(current_bills if current_bills else {})
    except Exception as e:
        logger.error(f"Error fetching current bills: {str(e)}")
        return jsonify({'error': str(e)}), 500