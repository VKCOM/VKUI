/* eslint-disable jsdoc/require-jsdoc */

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import type { DensityTypeValues } from '../../../lib/adaptivity';
import styles from './PaginationPage.module.css';

export interface UsePaginationPageClassNamesProps {
  isCurrent?: boolean;
  disabled?: boolean;
}

export const getPaginationPageClassNames = (
  opts: UsePaginationPageClassNamesProps & { density?: DensityTypeValues },
): string => {
  return classNames(
    styles.host,
    opts.density == null && styles.densityNone,
    opts.density === 'compact' && styles.densityCompact,
    opts.isCurrent && styles.current,
    opts.disabled && styles.disabled,
  );
};

export function usePaginationPageClassNames({
  isCurrent,
  disabled,
}: UsePaginationPageClassNamesProps): string {
  const { density } = useAdaptivity();
  return getPaginationPageClassNames({
    isCurrent,
    disabled,
    density,
  });
}
