'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ActionSheetContext, type ActionSheetContextType } from './ActionSheetContext';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

export type ActionSheetDropdownProps = Omit<
  SharedDropdownProps,
  'popupDirection' | 'popupOffsetDistance' | 'placement'
>;

export const ActionSheetDropdownSheet = ({
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  className,
  onClick,
  allowClickPropagation = false,
  onClose: onCloseProp,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  const { onClose: onActionSheetClose } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);

  const onClose = React.useCallback(() => {
    onCloseProp?.();
    onActionSheetClose?.('escape-key', 'other');
  }, [onActionSheetClose, onCloseProp]);

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  return (
    <FocusTrap
      {...restProps}
      onClose={onClose}
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
