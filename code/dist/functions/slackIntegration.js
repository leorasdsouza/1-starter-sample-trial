"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
};*/
const main_1 = require("../main");
test('Slack integration test', () => __awaiter(void 0, void 0, void 0, function* () {
    const message = 'Test message';
    yield (0, main_1.sendSlackMessage)(message);
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
}));
