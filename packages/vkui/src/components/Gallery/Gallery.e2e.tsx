import { test } from '@vkui-e2e/test';
import { GalleryPlayground, GalleryWithArrowsPlayground } from './Gallery.e2e-playground';

test('Gallery', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<GalleryPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Gallery', () => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });
  test('show arrows', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<GalleryWithArrowsPlayground {...componentPlaygroundProps} />);
    const gallery = page.getByTestId('gallery');

    await gallery.hover();
    await page.waitForTimeout(300);

    await expectScreenshotClippedToContent();
  });
});
