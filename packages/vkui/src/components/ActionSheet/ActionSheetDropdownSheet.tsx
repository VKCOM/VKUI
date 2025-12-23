'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { usePlatform } from '../../hooks/usePlatform';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

export const ActionSheetDropdownSheet = ({
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  className,
  onClick,
  allowClickPropagation = false,
  onClose,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  useGlobalEscKeyDown(true, onClose);

  return (
    <FocusTrap
      {...restProps}
      onClick={handleClick}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        closing ? styles.closing : styles.opening,
        sizeY === 'compact' && styles.sizeYCompact,
        className,
      )}
    >
      {children}
    </FocusTrap>
  );
};
