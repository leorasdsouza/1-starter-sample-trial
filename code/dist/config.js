"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    DEVREV_PAT: process.env.DEVREV_PAT || '',
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || '',
    SLACK_CHANNEL: process.env.SLACK_CHANNEL || '#general', // Adjust to your Slack channel
};
