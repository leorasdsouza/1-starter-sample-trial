/*import { postSprintSummaryToSlack } from '../src/functions/slackIntegration';

test('Post summary to Slack', async () => {
    const mockSummary = '*What Went Well:*\nTask 1\nTask 2';
    await expect(postSprintSummaryToSlack(mockSummary)).resolves.not.toThrow();
});*/
// test/slackIntegration.test.ts

import { sendSlackMessage } from '../src/main'; // Adjust the path if needed

// Mocking console.log and console.error to check if they are called correctly
global.console.log = jest.fn();
global.console.error = jest.fn();

test('Slack message should be sent successfully', async () => {
  const message = 'Test message';

  // Mocking the axios.post function that sends the message
  jest.spyOn(require('axios'), 'post').mockResolvedValue({
    data: { ok: true },
  });

  // Call the sendSlackMessage function
  await sendSlackMessage(message);

  // Assert that console.log was called with the expected message
  expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
});

test('Slack message should handle errors', async () => {
  const message = 'Test message with error';

  // Mocking the axios.post function to simulate an error
  jest.spyOn(require('axios'), 'post').mockResolvedValue({
    data: { ok: false, error: 'invalid_auth' },
  });

  // Call the sendSlackMessage function
  await sendSlackMessage(message);

  // Assert that console.error was called with the expected error
  expect(console.error).toHaveBeenCalledWith('Failed to send message:', 'invalid_auth');
});
