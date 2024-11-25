/*import axios from 'axios';
import { config } from '../config';

// Function to post the summary to Slack
export const postSprintSummaryToSlack = async (summary: string) => {
    const message = {
        channel: config.SLACK_CHANNEL,
        text: `*Sprint Summary*\n${summary}`,
    };

    try {
        const response = await axios.post('https://slack.com/api/chat.postMessage', message, {
            headers: {
                Authorization: `Bearer ${config.SLACK_BOT_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.data.ok) {
            console.error('Error posting to Slack:', response.data.error);
            throw new Error('Slack post failed');
        }

        console.log('Successfully posted to Slack');
    } catch (error) {
        console.error('Error posting to Slack:', error);
        throw error;
    }
};*//*
import { sendSlackMessage } from '../main';
test('Slack integration test', async () => {
    const message = 'Test message';
    await sendSlackMessage(message);
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
  });*/
  
