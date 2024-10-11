import { test } from '@vkui-e2e/test';
import { SeparatorPlayground } from './Separator.e2e-playground';

test('Separator', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SeparatorPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
