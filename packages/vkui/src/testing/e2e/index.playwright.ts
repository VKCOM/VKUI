/*
 * Используем в *.e2e.ts* файлах.
 *
 * ⚠️ WARNING ⚠️
 *
 * НЕ используем в *.e2e-playground.ts*, т.к. ре-экспорт '@playwright/test' приводит к ошибке в Rollup.
 *
 * ```sh
 * RollupError: Unexpected character '�' (Note that you need plugins to import files that are not JavaScript)
 * ```
 *
 * Ошибка в файле /node_modules/@playwright/test/index.js:1:0
 */

// 1. Расширяем Playwright под свои нужды.
import { devices, expect, test as testBase } from '@playwright/experimental-ct-react17';
import type { PlaywrightTestConfig } from '@playwright/test';
import { Platform } from '../../lib/platform';
import { screenshotWithClipToContent } from './screenshotWithClipToContent';
import type {
  InternalVKUITestOptions,
  ScreenshotWithClipToContentOptions,
  VKUITestHelpers,
  VKUITestOptions,
} from './types';
import { generateCustomScreenshotName } from './utils';

export type { VKUITestOptions } from './types';

export const test = testBase.extend<VKUITestOptions & InternalVKUITestOptions & VKUITestHelpers>({
  platform: [Platform.ANDROID, { option: true }],
  appearance: ['light', { option: true }],

  adaptivityProviderProps: [null, { option: true }],
  onlyForPlatforms: [null, { option: true }],
  onlyForAppearances: [null, { option: true }],

  /**
   * см. https://playwright.dev/docs/test-fixtures#overriding-fixtures
   *
   * @override
   */
  page: async ({ page }, use) => {
    // Сбрасываем курсор мыши перед началом каждого теста.
    // см. https://github.com/VKCOM/VKUI/pull/4652#firefox-bottleneck
    await page.mouse.move(0, 0);
    await use(page);
  },

  expectScreenshotClippedToContent: async (
    { page, platform, browserName, appearance },
    use,
    testInfo,
  ) => {
    // Чтобы была возможность в рамках одного тест кейса делать разные скриншоты, используем в названии скриншота
    // счётчик вызова `expect`.
    let expectCallCount = 1;
    const result = async (options?: ScreenshotWithClipToContentOptions) => {
      const customScreenshotName = generateCustomScreenshotName(
        testInfo.titlePath,
        {
          platform,
          browserName,
          appearance,
        },
        expectCallCount,
      );
      expect(await screenshotWithClipToContent(page, options, browserName)).toMatchSnapshot(
        customScreenshotName,
      );
      expectCallCount += 1;
    };
    await use(result);
  },

  componentPlaygroundProps: async ({ platform, appearance, adaptivityProviderProps }, use) => {
    await use({
      platform,
      appearance,
      adaptivityProviderProps: adaptivityProviderProps ? adaptivityProviderProps : undefined,
    });
  },

  /**
   * @private
   */
  _skipByOnlyForProps: [
    async ({ platform, appearance, onlyForPlatforms, onlyForAppearances }, use, testInfo) => {
      const skipPlatform = Array.isArray(onlyForPlatforms) && !onlyForPlatforms.includes(platform);
      const skipAppearance =
        Array.isArray(onlyForAppearances) && !onlyForAppearances.includes(appearance);
      let descriptions = [];
      if (skipPlatform) {
        descriptions.push(`${onlyForPlatforms.join(', ')} platforms`);
      }
      if (skipAppearance) {
        descriptions.push(`${onlyForAppearances.join(', ')} appearances`);
      }
      testInfo.skip(
        skipPlatform || skipAppearance,
        `Because test only for ${descriptions.join(' and ')}`,
      );
      await use();
    },
    { auto: true },
  ],
});

// 2. Ре-экспортируем из Playwright нужные модули и типы.
export { expect, defineConfig, devices } from '@playwright/experimental-ct-react17';
export type { PlaywrightTestConfig, ReporterDescription } from '@playwright/test';

// 3. Вычленяем типы, которые не экспортируются самим Playwright.
export type TestProject = Exclude<PlaywrightTestConfig<VKUITestOptions>['projects'], undefined>;
export type Devices = typeof devices;
export type DeviceKey = keyof Devices;

// 4. Из-за enum типов приходится экспортировать для использования в playwright-ct.config.ts.
export { Platform as PlaywrightConfigPlatform } from '../../lib/platform';
