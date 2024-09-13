import { test } from '@vkui-e2e/test';
import { EpicPlayground } from './Epic.e2e-playground';

test('Epic', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<EpicPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
