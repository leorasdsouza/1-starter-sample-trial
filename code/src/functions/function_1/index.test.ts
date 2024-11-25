/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */


import { sendSlackMessage } from '../../main'; // Import the function you want to test
import axios from 'axios'; // Import axios for mocking

// Mocking axios.post using jest.spyOn()
jest.spyOn(axios, 'post');  // This will spy on axios.post

// Reset the console mocks before each test
global.console.log = jest.fn();
global.console.error = jest.fn();

describe('sendSlackMessage', () => {
  test('should send a message to Slack successfully', async () => {
    const message = 'Test message';  // The input message for Slack
    const mockResponse = { data: { ok: true } };  // Simulate a successful response from Slack

    // Mock axios.post to resolve with the mock response
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    // Act: Call the function with the test message
    await sendSlackMessage(message);

    // Assert: Check that the success message was logged
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
  });

  test('should handle Slack error response', async () => {
    const message = 'Test message with error';
    const mockErrorResponse = { data: { ok: false, error: 'invalid_auth' } }; // Simulate an error response from Slack

    // Mock axios.post to resolve with the mock error response
    (axios.post as jest.Mock).mockResolvedValue(mockErrorResponse);

    // Act: Call the function with the test message
    await sendSlackMessage(message);

    // Assert: Check that the error message was logged
    expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'invalid_auth');
  });
});
