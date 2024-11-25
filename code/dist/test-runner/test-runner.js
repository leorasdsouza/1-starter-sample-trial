"use strict";
/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */
/*
import * as dotenv from 'dotenv';
import { functionFactory, FunctionFactoryType } from '../function-factory';

export interface TestRunnerProps {
  functionName: FunctionFactoryType;
  fixturePath: string;
}

export const testRunner = async ({ functionName, fixturePath }: TestRunnerProps) => {
  const env = dotenv.config();

  //TODO: Pass this config to run method
  console.info(env.parsed?.APP_SECRET_TEST);

  if (!functionFactory[functionName]) {
    console.error(`${functionName} is not found in the functionFactory`);
    console.error('Add your function to the function-factory.ts file');
    throw new Error('Function is not found in the functionFactory');
  }

  const run = functionFactory[functionName];

  const eventFixture = require(`../fixtures/${fixturePath}`);

  await run(eventFixture);
};*/
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
const axios_1 = __importDefault(require("axios"));
const main_1 = require("../main"); // Ensure this path is correct
// Mock the axios module
jest.mock('axios');
// Type the axios.post mock explicitly
const mockedAxios = axios_1.default;
// Mock the console methods
global.console.log = jest.fn();
global.console.error = jest.fn();
test('Slack message should be sent successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    // Arrange: Mock axios post response with a complete Axios response
    mockedAxios.post.mockResolvedValue({
        data: { ok: true },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
            url: 'https://slack.com/api/chat.postMessage',
            method: 'post', // HTTP method (POST in this case)
        }, // Configuration (can be empty for this case)
    });
    const message = "Test message";
    // Act: Call sendSlackMessage
    yield (0, main_1.sendSlackMessage)(message);
    // Assert: Check that console.log was called with the success message
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
}));
test('Slack error should be handled properly', () => __awaiter(void 0, void 0, void 0, function* () {
    // Arrange: Mock axios post response with an error response
    mockedAxios.post.mockResolvedValue({
        data: { ok: false, error: 'invalid_auth' },
        status: 400,
        statusText: 'Bad Request',
        headers: {},
        config: {
            url: 'https://slack.com/api/chat.postMessage',
            method: 'post', // HTTP method (POST)
        }, // Mock config
    });
    const message = "Test message";
    // Act: Call sendSlackMessage
    yield (0, main_1.sendSlackMessage)(message);
    // Assert: Check that console.error was called with the error message
    expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'invalid_auth');
}));
