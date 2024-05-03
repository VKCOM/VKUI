import { test } from '@vkui-e2e/test';
import { DropZonePlayground } from './DropZone.e2e-playground';

test('DropZone', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<DropZonePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
