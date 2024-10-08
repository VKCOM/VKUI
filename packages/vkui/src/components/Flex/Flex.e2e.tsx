import { test } from '@vkui-e2e/test';
import { FlexPlayground } from './Flex.e2e-playground';

test.describe('Flex', () => {
  test.use({
    onlyForColorSchemes: ['light'],
  });
  test('Rendering', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<FlexPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
