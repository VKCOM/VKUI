import { OS, platform } from '../lib/platform';
import classNames from '../lib/classNames';

export default function getClassname(base: string, osname: OS = platform()): string {
  return classNames(base, {
    [base + '--ios']: osname === OS.IOS,
    [base + '--android']: osname === OS.ANDROID
  });
}
