# Sprint Summary Automation for Slack

## Objective
The goal of this project is to automate the generation of a sprint summary at the end of each sprint and deliver it to a Slack channel. The sprint summary includes insights such as what went well, what went wrong, and actionable insights for the team. 

## Problem Statement
End-of-sprint reviews provide essential feedback but manually compiling these summaries can be time-consuming. This project automates the process of generating the sprint summary and posting it to a Slack channel. This allows teams to quickly reflect on their progress without the burden of manually creating the summary.

## Features
- **Sprint Summary Generation**: Generates a sprint summary including:
  - **What went well**: Tasks or aspects of the sprint that were successful.
  - **What went wrong**: Issues or blockers faced during the sprint.
  - **Retrospective insights**: Recommendations or actionable insights for future sprints.
  - *Note*: Currently, the summary is predefined, but this can be dynamically generated in future versions.
- **Slack Integration**: The sprint summary is posted automatically to a Slack channel at the end of the sprint using the Slack API.

## Tools and Technologies Used
- **DevRev**: Used for tracking sprint data.
- **Slack API**: To post messages to a Slack channel.
- **TypeScript**: The primary language used for development.
- **DevRev Snap-In Platform**: The platform used to integrate and automate the process.
- **Node.js**: Backend runtime environment.

## How It Works
1. **Sprint Summary**: A predefined sprint summary is generated, which includes:
   - What went well
   - What went wrong
   - Retrospective insights
2. **Slack Posting**: The sprint summary is posted to a Slack channel using the Slack API.
3. **Configuration**: 
   - Set up your Slack bot token and channel ID to allow communication with Slack.
4. **Run the application**:
   - The application fetches the predefined sprint summary and sends it to Slack at the end of the sprint.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- A Slack workspace with access to create a bot and obtain the bot token.
- A DevRev account (for tracking sprint data).

### Steps to Set Up
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/leorasdsouza/sprint-summarizer.git
   cd sprint-summarizer
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project to store your Slack credentials:
   ```plaintext
   SLACK_BOT_TOKEN=your_slack_bot_token
   SLACK_CHANNEL_ID=your_slack_channel_id
   ```
4. Run the application:
   ```bash
   npm run start
   ```
5. The sprint summary will be posted to the Slack channel.

---

## Slack Bot Setup
### Steps to Create Your Slack Bot
1. Go to the [Slack API](https://api.slack.com/) and click **"Create a New App"**.
2. Choose **"From Scratch"**, provide a name for your bot, and select your Slack workspace.
3. Navigate to **OAuth & Permissions** under **Features** in the left menu.
4. Add the following Bot Token Scopes:
   - `chat:write` (to post messages to channels).
5. Click **Install App to Workspace** to authorize the app and get the **Bot User OAuth Token**.
6. Copy the **Bot User OAuth Token** and add it to your `.env` file:
   ```plaintext
   SLACK_BOT_TOKEN=your_bot_user_oauth_token
   ```
7. Identify the **Channel ID** for the Slack channel you want to post to:
   - Open Slack, navigate to the channel.
   - Click on the channel name > **More > View channel details > Copy ID**.
   - Add the channel ID to your `.env` file:
     ```plaintext
     SLACK_CHANNEL_ID=your_channel_id
     ```

---

## Future Improvements
- **Dynamic Sprint Summary Generation**: Automate the generation of the sprint summary based on real-time data from DevRev (e.g., completed, in-progress, and blocked tasks).
- **Improved Error Handling**: Add error handling for Slack API failures or missing data.
- **Customizable Templates**: Allow users to customize the format of the sprint summary.

---
