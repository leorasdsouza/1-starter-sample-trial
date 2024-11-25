/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

/*export const run = async (events: any[]) => {
  /*
  Put your code here and remove the log below
  */

 /* console.info('events', events);
};

export default run;*/

// Placeholder logic, you can add real logic here later.
//export const function1 = async () => {
 // console.log("Function 1 logic for sprint summary goes here!");
//};

/*import axios from 'axios';

const devRevApiUrl = "https://api.devrev.ai/dev-users.self"; // Replace with the actual API endpoint
const devRevApiKey = process.env.DEVREV_API_KEY; // Store your API key securely

export const run = async (events: any[]) => {
  // Here we will assume the event has the necessary details to fetch sprint data
  const sprintId = events[0].payload.sprint_id; // Example field to identify the sprint
  
  try {
    const response = await axios.get(`${devRevApiUrl}/sprints/${sprintId}/tasks`, {
      headers: {
        'Authorization': `Bearer ${devRevApiKey}`
      }
    });
    
    // Extract data for summary
    const tasks = response.data.tasks;
    console.log('Sprint tasks:', tasks);

    // Continue with summarizing and sending data to Slack
  } catch (error) {
    console.error('Error fetching sprint data from DevRev:', error);
  }
};
*/
import axios from 'axios';
import { config } from '../../config';

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
};
