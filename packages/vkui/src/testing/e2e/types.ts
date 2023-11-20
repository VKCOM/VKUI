import type { PlaywrightWorkerOptions } from '@playwright/test';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import type { AppearanceType } from '../../lib/appearance';
import { Platform } from '../../lib/platform';
import type { ComponentPlaygroundProps } from './ComponentPlayground';

export interface VKUITestOptions {
  platform: Platform;
  appearance: AppearanceType;
  toMatchSnapshot?: {
    threshold?: number;
  };
}

export interface InternalVKUITestOptions {
  adaptivityProviderProps?: null | Partial<AdaptivityProps>;
  onlyForBrowsers?: null | Array<PlaywrightWorkerOptions['browserName']>;
  onlyForPlatforms?: null | Platform[];
  onlyForAppearances?: null | AppearanceType[];
}

export interface ScreenshotWithClipToContentOptions {
  cropToContentSelector?: string;
}

export interface VKUITestHelpers {
  componentPlaygroundProps: ComponentPlaygroundProps;
  expectScreenshotClippedToContent(options?: ScreenshotWithClipToContentOptions): Promise<void>;
  /** @private  */
  _skipByOnlyForProps: void;
}
