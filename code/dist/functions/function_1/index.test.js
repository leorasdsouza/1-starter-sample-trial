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
/*import { testRunner } from '../../test-runner/test-runner';
describe('Example Index Test file', () => {
  it('Testing the method', () => {
    testRunner({
      fixturePath: 'function_1_event.json',
      functionName: 'function_1',
    });
  });
});*/
// src/functions/function_1/index.test.ts
const main_1 = require("../../main"); // Import the function you want to test
const axios_1 = __importDefault(require("axios")); // Import axios for mocking
// Mocking axios.post using jest.spyOn()
jest.spyOn(axios_1.default, 'post'); // This will spy on axios.post
// Reset the console mocks before each test
global.console.log = jest.fn();
global.console.error = jest.fn();
describe('sendSlackMessage', () => {
    test('should send a message to Slack successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const message = 'Test message'; // The input message for Slack
        const mockResponse = { data: { ok: true } }; // Simulate a successful response from Slack
        // Mock axios.post to resolve with the mock response
        axios_1.default.post.mockResolvedValue(mockResponse);
        // Act: Call the function with the test message
        yield (0, main_1.sendSlackMessage)(message);
        // Assert: Check that the success message was logged
        expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
    }));
    test('should handle Slack error response', () => __awaiter(void 0, void 0, void 0, function* () {
        const message = 'Test message with error';
        const mockErrorResponse = { data: { ok: false, error: 'invalid_auth' } }; // Simulate an error response from Slack
        // Mock axios.post to resolve with the mock error response
        axios_1.default.post.mockResolvedValue(mockErrorResponse);
        // Act: Call the function with the test message
        yield (0, main_1.sendSlackMessage)(message);
        // Assert: Check that the error message was logged
        expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'invalid_auth');
    }));
});
