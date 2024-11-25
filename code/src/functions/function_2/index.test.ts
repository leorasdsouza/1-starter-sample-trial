import { sendSlackMessage } from '../../main'; // Import the function to test
import axios from 'axios'; // Import axios for mocking

// Mocking axios.post using jest.spyOn()
jest.spyOn(axios, 'post');

// Reset console mocks before each test
global.console.log = jest.fn();
global.console.error = jest.fn();

describe('sendSlackMessage in function_2', () => {
  test('should send a message to Slack successfully', async () => {
    const message = 'Test message from function_2'; // Test input message
    const mockResponse = { data: { ok: true } }; // Simulate a successful response from Slack

    // Mock axios.post to resolve with the mock response
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    // Act: Call the function with the test message
    await sendSlackMessage(message);

    // Assert: Check that the success message was logged
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
  });

  test('should handle Slack error response in function_2', async () => {
    const message = 'Test error message from function_2'; // Test input message
    const mockErrorResponse = { data: { ok: false, error: 'channel_not_found' } }; // Simulate an error response from Slack

    // Mock axios.post to resolve with the mock error response
    (axios.post as jest.Mock).mockResolvedValue(mockErrorResponse);

    // Act: Call the function with the test message
    await sendSlackMessage(message);

    // Assert: Check that the error message was logged
    expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'channel_not_found');
  });

  test('should handle network errors in function_2', async () => {
    const message = 'Network error test from function_2'; // Test input message
    const mockError = new Error('Network Error'); // Simulate a network error

    // Mock axios.post to reject with a network error
    (axios.post as jest.Mock).mockRejectedValue(mockError);

    // Act: Call the function with the test message
    await sendSlackMessage(message);

    // Assert: Check that the network error message was logged
    expect(console.error).toHaveBeenCalledWith('Failed to send message due to network error:', mockError.message);
  });
});
