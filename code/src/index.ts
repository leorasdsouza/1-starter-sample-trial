/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

/*export * from './function-factory';*/
/*import dotenv from 'dotenv';
import { fetchSprintData } from './functions/devRevIntegration';
import { postSprintSummaryToSlack } from './functions/slackIntegration';
import { generateSprintSummary } from './utils/sprintSummary';

dotenv.config();

const runSprintSummarizer = async () => {
    try {
        // Step 1: Fetch sprint data from DevRev
        const sprintData = await fetchSprintData();
        
        // Step 2: Generate sprint summary
        const summary = generateSprintSummary(sprintData.tasks); // Assuming tasks is part of the response

        // Step 3: Format the summary for Slack
        const formattedSummary = `
            *What Went Well:*\n${summary.whatWentWell.join('\n')}
            *What Went Wrong:*\n${summary.whatWentWrong.join('\n')}
            *Retrospective Insights:*\n${summary.retrospectiveInsights.join('\n')}
        `;

        // Step 4: Post summary to Slack
        await postSprintSummaryToSlack(formattedSummary);
    } catch (error) {
        console.error('Error running Sprint Summarizer:', error);
    }
};

// Run the summarizer process
runSprintSummarizer();*/
