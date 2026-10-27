import { classNames } from '@vkontakte/vkjs';
import type { DensityTypeValues } from '../../../lib/adaptivity';
import styles from './Caption.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
};

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export function captionClassNames(
  density: 'none' | DensityTypeValues,
  level: '1' | '2' | '3' | undefined = '1',
  caps = false,
) {
  return classNames(
    density !== 'regular' && densityClassNames[density],
    caps && styles.caps,
    stylesLevel[level],
  );
}
