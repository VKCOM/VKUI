import { test } from '@vkui-e2e/test';
import { SimpleGridPlayground } from './SimpleGrid.e2e-playground';

test.describe('SimpleGrid', () => {
  test.use({
    onlyForColorSchemes: ['light'],
  });
  test('Rendering', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<SimpleGridPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
