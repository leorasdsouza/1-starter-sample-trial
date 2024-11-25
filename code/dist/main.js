"use strict";
/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSlackMessage = void 0;
/*import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FunctionFactoryType } from './function-factory';
import { testRunner } from './test-runner/test-runner';

(async () => {
  const argv = await yargs(hideBin(process.argv)).options({
    fixturePath: {
      type: 'string',
      require: true,
    },
    functionName: {
      type: 'string',
      require: true,
    },
  }).argv;

  if (!argv.fixturePath || !argv.functionName) {
    console.error(
      'Please make sure you have passed fixturePath & functionName'
    );
  }

  await testRunner({
    fixturePath: argv.fixturePath,
    functionName: argv.functionName as FunctionFactoryType,
  });
})();*/
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const slackToken = process.env.SLACK_BOT_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL_ID;
// Function to send a message to Slack
const sendSlackMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('https://slack.com/api/chat.postMessage', {
            channel: slackChannel,
            text: message,
        }, {
            headers: {
                Authorization: `Bearer ${slackToken}`,
            },
        });
        if (response.data.ok) {
            console.log('Message sent to Slack!');
        }
        else {
            console.error('Failed to send message:', response.data.error);
        }
    }
    catch (error) {
        console.error('Error sending message to Slack:', error);
    }
});
exports.sendSlackMessage = sendSlackMessage;
const generateSprintSummary = () => {
    const summary = `
  Sprint Summary:

  What went well:
  - Completed all tasks within the sprint.
  - Team collaboration was excellent.

  What went wrong:
  - Blockers with third-party integrations delayed progress.

  Retrospective Insights:
  - Improve communication around blockers.
  - Start sprint planning earlier.

  Cheers! The DevRev team.
  `;
    return summary;
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const sprintSummary = generateSprintSummary();
    yield (0, exports.sendSlackMessage)(sprintSummary);
});
main();
