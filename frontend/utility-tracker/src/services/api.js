// API Configuration
const API_BASE_URL = 'http://localhost:3002/api';

const API_ENDPOINTS = {
    BILLS: `${API_BASE_URL}/bills`,
    CURRENT_BILLS: `${API_BASE_URL}/bills/current`,
};

// API Service
class ApiService {
    async getAllBills() {
        try {
            const response = await fetch(API_ENDPOINTS.BILLS);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching all bills:', error);
            throw error;
        }
    }

    async getCurrentBills() {
        try {
            const response = await fetch(API_ENDPOINTS.CURRENT_BILLS);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching current bills:', error);
            throw error;
        }
    }
}

export const apiService = new ApiService(); 