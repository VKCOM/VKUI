import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../lib/platform.js';
import classNames from '../lib/classNames';

export default function getClassName (base: string): string {
  return classNames(base, {
    [base + '--ios']: IS_PLATFORM_IOS,
    [base + '--android']: IS_PLATFORM_ANDROID
  });
}
