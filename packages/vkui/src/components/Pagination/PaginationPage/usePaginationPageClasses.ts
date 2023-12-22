import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import styles from './PaginationPage.module.css';

export interface UsePaginationPageClassNamesProps {
  isCurrent?: boolean;
  disabled?: boolean;
}

export function usePaginationPageClassNames({
  isCurrent,
  disabled,
}: UsePaginationPageClassNamesProps) {
  const { sizeY = 'none' } = useAdaptivity();

  return classNames(
    styles.host,
    sizeY === 'none' && styles.hostSizeYNone,
    sizeY === 'compact' && styles.hostSizeYCompact,
    isCurrent && styles.hostCurrent,
    disabled && styles.hostDisabled,
  );
}
