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
  adaptivityProviderProps?: null | Partial<AdaptivityProps>;
  onlyForBrowsers?: null | Array<PlaywrightWorkerOptions['browserName']>;
  onlyForPlatforms?: null | PlatformType[];
  onlyForColorSchemes?: null | ColorSchemeType[];
}

export interface ScreenshotWithClipToContentOptions {
  /**
   * @see https://playwright.dev/docs/screenshots#full-page-screenshots
   * @default true
   */
  fullPage?: boolean;
  /**
   * Задаёт область, до которой нужно обрезать скриншот.
   * @default DEFAULT_CROP_TO_CONTENT_SELECTOR
   */
  cropToContentSelector?: string;
}

export interface VKUITestHelpers {
  componentPlaygroundProps: ComponentPlaygroundProps;
  expectScreenshotClippedToContent: (options?: ScreenshotWithClipToContentOptions) => Promise<void>;
  /** @private  */
  _skipByOnlyForProps: void;
}
