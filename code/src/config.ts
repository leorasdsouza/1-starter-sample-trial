import dotenv from 'dotenv';
dotenv.config();

export const config = {
    DEVREV_PAT: process.env.DEVREV_PAT || '',
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || '',
    SLACK_CHANNEL: process.env.SLACK_CHANNEL || '#sprint-summarizer',  // Adjust to your Slack channel
};
