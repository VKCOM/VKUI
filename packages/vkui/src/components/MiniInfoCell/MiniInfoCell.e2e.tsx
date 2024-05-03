import { test } from '@vkui-e2e/test';
import { MiniInfoCellPlayground } from './MiniInfoCell.e2e-playground';

test('MiniInfoCell', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<MiniInfoCellPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
