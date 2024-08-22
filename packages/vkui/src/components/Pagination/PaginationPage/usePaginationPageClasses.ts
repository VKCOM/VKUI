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
    styles['PaginationPage'],
    opts.sizeY == null && styles['PaginationPage--sizeY-none'],
    opts.sizeY === 'compact' && styles['PaginationPage--sizeY-compact'],
    opts.isCurrent && styles['PaginationPage--current'],
    opts.disabled && styles['PaginationPage--disabled'],
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
