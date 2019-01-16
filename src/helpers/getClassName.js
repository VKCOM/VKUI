import { platform, ANDROID, IOS } from '../lib/platform.js';
import classNames from '../lib/classNames';

const osname = platform();

export default function getClassname (base) {
  return classNames(base, {
    [base + '--ios']: osname === IOS,
    [base + '--android']: osname === ANDROID
  });
}
