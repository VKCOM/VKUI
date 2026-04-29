import type { PlaywrightWorkerOptions } from '@playwright/test';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import type { ColorSchemeType } from '../../lib/colorScheme';
import type { PlatformType } from '../../lib/platform';
import type { ComponentPlaygroundProps } from './ComponentPlayground';

export interface VKUITestOptions {
  platform: PlatformType;
  colorSchemeType: ColorSchemeType;
  toMatchSnapshot?: {
    threshold?: number;
  };
}

export interface InternalVKUITestOptions {
  adaptivityProviderProps?: null | Partial<AdaptivityProps> | undefined;
  onlyForBrowsers?: null | Array<PlaywrightWorkerOptions['browserName']> | undefined;
  onlyForPlatforms?: null | PlatformType[] | undefined;
  onlyForColorSchemes?: null | ColorSchemeType[] | undefined;
}

export interface ScreenshotWithClipToContentOptions {
  /**
   * @see https://playwright.dev/docs/screenshots#full-page-screenshots
   * @default true
   */
  fullPage?: boolean | undefined;
  /**
   * Задаёт область, до которой нужно обрезать скриншот.
   * @default DEFAULT_CROP_TO_CONTENT_SELECTOR
   */
  cropToContentSelector?: string | undefined;
}

export interface VKUITestHelpers {
  componentPlaygroundProps: ComponentPlaygroundProps;
  expectScreenshotClippedToContent: (options?: ScreenshotWithClipToContentOptions) => Promise<void>;
  /** @private  */
  _skipByOnlyForProps: void;
}
