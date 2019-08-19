import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../lib/platform';
import classNames from '../lib/classNames';

export default function getClassname(base: string): string {
  return classNames(base, {
    [base + '--ios']: IS_PLATFORM_IOS,
    [base + '--android']: IS_PLATFORM_ANDROID
  });
}
