/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

/*export const run = async (events: any[]): Promise<Record<string, any>> => {
  console.info(events);
  return { 'input_event': events[0] };
};

export default run;*/
import { sendSlackMessage } from '../../main';
test('Slack integration test', async () => {
    const message = 'Test message';
    await sendSlackMessage(message);
    expect(console.log).toHaveBeenCalledWith('Message sent to Slack!');
  });
