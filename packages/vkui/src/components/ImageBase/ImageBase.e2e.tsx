import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { ImageWithBrokenSrc, ImageWithParentWithBorderRadius } from './ImageBase.e2e-playground';

test.describe('ImageBase', () => {
  test.use({
    onlyForPlatforms: [Platform.ANDROID],
    onlyForColorSchemes: ['light'],
  });

  test('Parent with border-radius: Image does not have visible corners from Image background', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    // есть неприятный эффект, где видно край фона в одном из углов обрезанных с помощью border-radius и overflow: hidden у родителя
    // сейчас мы прячем фон после загрузки изображения, чтобы он не выглядывал, а тут проверяем, что такой ситуации больше не происходит.
    await mount(<ImageWithParentWithBorderRadius {...componentPlaygroundProps} />);
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));
    await expectScreenshotClippedToContent();
  });

  test('Broken src cases', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ImageWithBrokenSrc {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
