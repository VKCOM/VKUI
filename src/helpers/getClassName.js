import { platform, ANDROID, IOS } from '../lib/platform.js';
import classnames from '../lib/classnames';

const osname = platform();

export default function getClassname (base) {
  return classnames(base, {
    [base + '--ios']: osname === IOS,
    [base + '--android']: osname === ANDROID
  });
}
