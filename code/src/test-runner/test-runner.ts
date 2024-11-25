/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */


import axios from 'axios';
import { sendSlackMessage } from '../main'; // Ensure this path is correct

// Mock the axios module
jest.mock('axios');

// Type the axios.post mock explicitly
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock the console methods
global.console.log = jest.fn();
global.console.error = jest.fn();

test('Slack message should be sent successfully', async () => {
  // Arrange: Mock axios post response with a complete Axios response
  mockedAxios.post.mockResolvedValue({
    data: { ok: true },
    status: 200,            // HTTP status code
    statusText: 'OK',       // Status text (e.g., "OK")
    headers: {},            // Any headers you want to mock (can be empty for this case)
    config: {               // Config object now includes the 'url' property
      url: 'https://slack.com/api/chat.postMessage', // Mocked URL of the request
      method: 'post',       // HTTP method (POST in this case)
    },            // Configuration (can be empty for this case)
  });

  const message = "Test message";

  // Act: Call sendSlackMessage
  await sendSlackMessage(message);

  // Assert: Check that console.log was called with the success message
  expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
});

test('Slack error should be handled properly', async () => {
  // Arrange: Mock axios post response with an error response
  mockedAxios.post.mockResolvedValue({
    data: { ok: false, error: 'invalid_auth' },
    status: 400,            // HTTP status code (simulate a failure)
    statusText: 'Bad Request', // Status text
    headers: {},            // Mock headers
    config: {               // Config object includes the 'url' property
      url: 'https://slack.com/api/chat.postMessage', // Mocked URL of the request
      method: 'post',       // HTTP method (POST)
    },             // Mock config
  });

  const message = "Test message";

  // Act: Call sendSlackMessage
  await sendSlackMessage(message);

  // Assert: Check that console.error was called with the error message
  expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'invalid_auth');
});
