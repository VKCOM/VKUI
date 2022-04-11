import { BrowserInfo, computeBrowserInfo } from "./browser";

export enum Platform {
  ANDROID = "android",
  IOS = "ios",
  VKCOM = "vkcom",
}

export const ANDROID = Platform.ANDROID;
export const IOS = Platform.IOS;
export const VKCOM = Platform.VKCOM;

export type PlatformType =
  | Platform.ANDROID
  | Platform.IOS
  | Platform.VKCOM
  | string;

export function platform(browserInfo?: BrowserInfo): PlatformType {
  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === "ios" ? IOS : ANDROID;
}
