import type { PlaywrightWorkerOptions } from '@playwright/test';
import axe from 'axe-core';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import type { AppearanceType } from '../../lib/appearance';
import { PlatformType } from '../../lib/platform';
import type { ComponentPlaygroundProps } from './ComponentPlayground';

export interface VKUITestOptions {
  platform: PlatformType;
  appearance: AppearanceType;
  toMatchSnapshot?: {
    threshold?: number;
  };
}

export interface InternalVKUITestOptions {
  adaptivityProviderProps?: null | Partial<AdaptivityProps>;
  onlyForBrowsers?: null | Array<PlaywrightWorkerOptions['browserName']>;
  onlyForPlatforms?: null | PlatformType[];
  onlyForAppearances?: null | AppearanceType[];
}

export interface ScreenshotWithClipToContentOptions {
  cropToContentSelector?: string;
}

export interface VKUITestHelpers {
  expectA11yScanResults(): Promise<void>;
  componentPlaygroundProps: ComponentPlaygroundProps;
  expectScreenshotClippedToContent(options?: ScreenshotWithClipToContentOptions): Promise<void>;
  /** @private  */
  _skipByOnlyForProps: void;
}

export interface AxeResultsPartial extends Partial<axe.AxeResults> {
  violations: axe.Result[];
}
