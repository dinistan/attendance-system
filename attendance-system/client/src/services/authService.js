import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data.token;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data?.error || 'Login failed';
            throw new Error(errorMessage);
        } else if (error.request) {
            throw new Error('No response from server');
        } else {
            throw new Error('Error in setting up request');
        }
    }
};