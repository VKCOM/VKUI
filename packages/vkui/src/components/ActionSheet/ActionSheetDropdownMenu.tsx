'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useRestoreFocusWrapper } from '../../hooks/useFocusTrap/useRestoreFocusWrapper';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { usePlatform } from '../../hooks/usePlatform';
import { isRefObject } from '../../lib/isRefObject';
import { stopPropagation } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { Popper } from '../Popper/Popper';
import { RootComponent } from '../RootComponent/RootComponent';
import { ActionSheetContext, type ActionSheetContextType } from './ActionSheetContext';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

const warn = warnOnce('ActionSheet');
function getEl(ref: SharedDropdownProps['toggleRef']): Element | null | undefined {
  return ref && 'current' in ref ? ref.current : ref;
}

export const ActionSheetDropdownMenu = ({
  children,
  toggleRef,
  closing,
  onClose: onCloseProp,
  className,
  style,
  popupOffsetDistance = 0,
  placement,
  onAnimationStart,
  onAnimationEnd,
  allowClickPropagation = false,
  onClick,
  getRootRef,
  // FocusTrap props
  autoFocus,
  restoreFocus: restoreFocusProp,
  disabled,
  timeout,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const focusTrapRootRef = useExternRef(getRootRef);
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  const { onClose: onActionSheetClose } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const toggleEl = getEl(toggleRef);
      if (!toggleEl) {
        warn(`Свойство "toggleRef" не передано`, 'error');
      }
    }
  }, [toggleRef]);

  const targetRef = React.useMemo(() => {
    if (isRefObject<SharedDropdownProps['toggleRef'], HTMLElement>(toggleRef)) {
      return toggleRef;
    }

    return { current: toggleRef as HTMLElement };
  }, [toggleRef]);

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

  const { restoreFocus, getRestoreFocusTarget } = useRestoreFocusWrapper(restoreFocusProp);

  return (
    <Popper
      targetRef={targetRef}
      offsetByMainAxis={popupOffsetDistance}
      placement={placement}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        styles.menu,
        closing ? styles.closing : styles.opening,
        sizeY === 'compact' && styles.sizeYCompact,
        className,
      )}
      style={style}
      getRootRef={elementRef}
      usePortal={false}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <FocusTrap
        autoFocus={autoFocus}
        autoFocusDelay={timeout}
        restoreFocus={restoreFocus}
        getRestoreFocusTarget={getRestoreFocusTarget}
        disabled={disabled}
        rootRef={focusTrapRootRef}
      >
        <RootComponent
          {...restProps}
          tabIndex={-1}
          onClick={handleClick}
          getRootRef={focusTrapRootRef}
        >
          {children}
        </RootComponent>
      </FocusTrap>
    </Popper>
  );
};
