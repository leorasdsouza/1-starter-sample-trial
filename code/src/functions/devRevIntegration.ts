/*import axios from 'axios';
import { config } from '../config';

// Function to fetch tasks or issues from DevRev
export const fetchSprintData = async () => {
    const url = 'https://api.devrev.ai/dev-users.self';  // Modify this to fetch sprint-related data (tasks/issues)
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${config.DEVREV_PAT}`,
            },
        });

        return response.data;  // Process and return the sprint-related data
    } catch (error) {
        console.error('Error fetching DevRev data:', error);
        throw error;
    }
};*/
