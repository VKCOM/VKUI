import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { ImageWithParentWithBorderRadius } from './ImageBase.e2e-playground';

test.describe('Image', () => {
  test.use({
    onlyForPlatforms: [Platform.ANDROID],
    onlyForAppearances: ['light'],
  });

  test('Parent with border-radius: Image does not have visible corners from Image background', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    // мы проверяем, что изображение из img полностью перекрывае фон BaseImage
    // потому что есть неприятный эффект, где видно край фона в одном из углов обрезанных с помощью border-radius и overflow: hidden у родителя
    await mount(<ImageWithParentWithBorderRadius {...componentPlaygroundProps} />);
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));
    await expectScreenshotClippedToContent();
  });
});
