import { test } from '@vkui-e2e/test';
import { SpacingPlayground } from './Spacing.e2e-playground';

test.use({ onlyForPlatforms: ['vkcom'], onlyForColorSchemes: ['light'] });

test('Spacing', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SpacingPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
