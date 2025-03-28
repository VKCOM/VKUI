/* eslint-disable jsdoc/require-jsdoc */

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import type { SizeTypeValues } from '../../../lib/adaptivity';
import styles from './PaginationPage.module.css';

export interface UsePaginationPageClassNamesProps {
  isCurrent?: boolean;
  disabled?: boolean;
}

export const getPaginationPageClassNames = (
  opts: UsePaginationPageClassNamesProps & { sizeY?: SizeTypeValues },
): string => {
  return classNames(
    styles.host,
    opts.sizeY == null && styles.sizeYNone,
    opts.sizeY === 'compact' && styles.sizeYCompact,
    opts.isCurrent && styles.current,
    opts.disabled && styles.disabled,
  );
};

export function usePaginationPageClassNames({
  isCurrent,
  disabled,
}: UsePaginationPageClassNamesProps): string {
  const { sizeY } = useAdaptivity();
  return getPaginationPageClassNames({
    isCurrent,
    disabled,
    sizeY,
  });
}
