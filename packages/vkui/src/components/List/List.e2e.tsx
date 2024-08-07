import { test } from '@vkui-e2e/test';
import { ListPlayground } from './List.e2e-playground';

test('List', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ListPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
