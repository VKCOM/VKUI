import { test } from '@vkui-e2e/test';
import { CellButtonGroupPlayground } from './CellButtonGroup.e2e-playground';

test('CellButtonGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CellButtonGroupPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
