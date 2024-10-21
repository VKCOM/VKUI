/*
 * Используем в *.e2e.ts* файлах.
 *
 * ⚠️ WARNING ⚠️
 *
 * НЕ используем в *.e2e-playground.ts*, т.к. ре-экспорт '@playwright/test' приводит к ошибке в Rollup.
 *
 * ```sh
 * RollupError: Unexpected character 'U+FFFD' (Note that you need plugins to import files that are not JavaScript)
 * ```
 *
 * Ошибка в файле /node_modules/@playwright/test/index.js:1:0
 */

// 1. Расширяем Playwright под свои нужды.
import { type devices, expect, test as testBase } from '@playwright/experimental-ct-react';
import type { PlaywrightTestConfig } from '@playwright/test';
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
  platform: ['android', { option: true }],
  colorSchemeType: ['light', { option: true }],

  adaptivityProviderProps: [null, { option: true }],
  onlyForBrowsers: [null, { option: true }],
  onlyForPlatforms: [null, { option: true }],
  onlyForColorSchemes: [null, { option: true }],

  toMatchSnapshot: [{ threshold: 0.02 }, { option: true }],

  expectScreenshotClippedToContent: async (
    { page, platform, browserName, colorSchemeType, toMatchSnapshot },
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
          colorSchemeType,
        },
        expectCallCount,
      );
      expect(await screenshotWithClipToContent(page, options, browserName)).toMatchSnapshot(
        customScreenshotName,
        toMatchSnapshot,
      );
      expectCallCount += 1;
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(result);
  },

  componentPlaygroundProps: async ({ platform, colorSchemeType, adaptivityProviderProps }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use({
      platform,
      colorScheme: colorSchemeType,
      adaptivityProviderProps: adaptivityProviderProps ? adaptivityProviderProps : undefined,
    });
  },

  /**
   * @private
   */
  _skipByOnlyForProps: [
    async (
      {
        platform,
        colorSchemeType,
        defaultBrowserType,
        onlyForBrowsers,
        onlyForPlatforms,
        onlyForColorSchemes,
      },
      use,
      testInfo,
    ) => {
      const skipReasons = [
        { type: 'browser', matchList: onlyForBrowsers || [], value: defaultBrowserType },
        { type: 'platform', matchList: onlyForPlatforms || [], value: platform },
        { type: 'colorScheme', matchList: onlyForColorSchemes || [], value: colorSchemeType },
      ]
        .filter(
          ({ matchList, value }) => matchList.length > 0 && matchList.every((i) => i !== value),
        )
        .map(({ type, matchList }) => `${matchList.join(', ')} ${type}`);

      testInfo.skip(skipReasons.length > 0, `Because test only for ${skipReasons.join(' and ')}`);
      await use();
    },
    { auto: true },
  ],
});

// 2. Ре-экспортируем нужные модули, типы и константы.
export { expect, defineConfig, devices } from '@playwright/experimental-ct-react';
export type { PlaywrightTestConfig, ReporterDescription } from '@playwright/test';
export { ColorScheme } from '../../lib/colorScheme';
export { Platform } from '../../lib/platform';

// 3. Вычленяем типы, которые не экспортируются самим Playwright.
export type TestProject = Exclude<PlaywrightTestConfig<VKUITestOptions>['projects'], undefined>;
export type Devices = typeof devices;
export type DeviceKey = keyof Devices;
