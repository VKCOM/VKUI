import { test } from '@vkui-e2e/test';
import { FormFieldPlayground } from './FormField.e2e-playground';

test('FormField', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<FormFieldPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
