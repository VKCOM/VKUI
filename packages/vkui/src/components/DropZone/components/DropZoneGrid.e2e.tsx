import { test } from '@vkui-e2e/test';
import { DropZoneGridPlayground } from './DropZoneGrid.e2e-playground';

test.describe('DropZoneGrid', () => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });

  test('desktop', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<DropZoneGridPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
