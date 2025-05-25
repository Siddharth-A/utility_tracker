const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002/api';

/**
 * Fetches all utility bills from the API
 * @returns {Promise<Array>} Array of bill objects
 * @throws {Error} If the API request fails
 */
export const fetchBills = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/bills`);
        if (!response.ok) {
            throw new Error('Failed to fetch bills');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching bills:', error);
        throw error;
    }
};

/**
 * Fetches the current month's utility bills from the API
 * @returns {Promise<Object>} Current month's bill data
 * @throws {Error} If the API request fails
 */
export const fetchCurrentBills = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/bills/current`);
        if (!response.ok) {
            throw new Error('Failed to fetch current bills');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching current bills:', error);
        throw error;
    }
}; 