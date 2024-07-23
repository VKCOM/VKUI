import { test } from '@vkui-e2e/test';
import { CardGridPlayground } from './CardGrid.e2e-playground';

test('CardGrid', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<CardGridPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
