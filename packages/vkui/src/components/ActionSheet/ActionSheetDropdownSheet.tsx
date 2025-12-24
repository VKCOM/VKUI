'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { usePlatform } from '../../hooks/usePlatform';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { RootComponent } from '../RootComponent/RootComponent';
import { ActionSheetContext, type ActionSheetContextType } from './ActionSheetContext';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

export const ActionSheetDropdownSheet = ({
  getRootRef,
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  className,
  onClick,
  allowClickPropagation = false,
  onClose: onCloseProp,
  // FocusTrap props
  autoFocus,
  restoreFocus,
  disabled,
  timeout,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const focusTrapRootRef = useExternRef(getRootRef);
  const platform = usePlatform();

  const { onClose: onActionSheetClose } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);

  const onClose = React.useCallback(() => {
    onCloseProp?.();
    onActionSheetClose?.('escape-key');
  }, [onActionSheetClose, onCloseProp]);

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  useGlobalEscKeyDown(true, onClose);

  return (
    <FocusTrap
      autoFocus={autoFocus}
      timeout={timeout}
      restoreFocus={restoreFocus}
      disabled={disabled}
      rootRef={focusTrapRootRef}
    >
      <RootComponent
        {...restProps}
        getRootRef={focusTrapRootRef}
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
      </RootComponent>
    </FocusTrap>
  );
};
