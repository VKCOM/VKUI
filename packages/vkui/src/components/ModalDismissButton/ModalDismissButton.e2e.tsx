import { test } from '@vkui-e2e/test';
import { ModalDismissButtonPlayground } from './ModalDismissButton.e2e-playground';

test('ModalDismissButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ModalDismissButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
