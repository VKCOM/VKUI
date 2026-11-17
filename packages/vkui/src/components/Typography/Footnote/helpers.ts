import { classNames } from '@vkontakte/vkjs';
import type { DensityTypeValues } from '../../../lib/adaptivity';
import styles from './Footnote.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export function footnoteClassNames(density: 'none' | DensityTypeValues, caps = false) {
  return classNames(
    styles.host,
    density !== 'regular' && densityClassNames[density],
    caps && styles.caps,
  );
}
