/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

import { sendSlackMessage } from '../../main';
test('Slack integration test', async () => {
    const message = 'Test message';
    await sendSlackMessage(message);
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
  });
