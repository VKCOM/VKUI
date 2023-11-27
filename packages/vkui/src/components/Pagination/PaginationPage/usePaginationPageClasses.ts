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
    styles['PaginationPage'],
    sizeY === 'none' && styles['PaginationPage--sizeY-none'],
    sizeY === 'compact' && styles['PaginationPage--sizeY-compact'],
    isCurrent && styles['PaginationPage--current'],
    disabled && styles['PaginationPage--disabled'],
  );
}
