import { test } from '@vkui-e2e/test';
import { ModalOutsideButtonPlayground } from './ModalOutsideButton.e2e-playground';

test('ModalOutsideButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ModalOutsideButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
