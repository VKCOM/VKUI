import { test } from '@vkui-e2e/test';
import { TappablePlayground } from './Tappable.e2e-playground';

test('Tappable', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TappablePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
