'use client';
/* eslint-disable jsdoc/require-jsdoc */

import { type ComponentType, type KeyboardEvent, type ReactNode, useCallback } from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { usePlatform } from '../../hooks/usePlatform';
import { useVirtualKeyboardState } from '../../hooks/useVirtualKeyboardState';
import { Keys, pressedKey } from '../../lib/accessibility';
import { useCSSTransition, type UseCSSTransitionState } from '../../lib/animation';
import { useBottomSheet } from '../../lib/sheet';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { ModalCardBase } from '../ModalCardBase/ModalCardBase';
import { ModalOutlet } from '../ModalOutlet/ModalOutlet';
import {
  ModalOverlay as ModalOverlayDefault,
  type ModalOverlayProps,
} from '../ModalOverlay/ModalOverlay';
import type { ModalCardProps } from './types';
import styles from './ModalCard.module.css';

const sizeByPlatformClassNames = {
  vkcom: styles['hostMaxWidthS'],
  ios: styles['hostMaxWidthM'],
  android: styles['hostMaxWidthL'],
};

const transitionStateClassNames: Partial<Record<UseCSSTransitionState, string>> = {
  appear: styles['hostStateEnter'],
  appearing: styles['hostStateEntering'],

  enter: styles['hostStateEnter'],
  entering: styles['hostStateEntering'],

  exiting: styles['hostStateExiting'],
  exited: styles['hostStateExited'],
};

export interface ModalCardInternalProps extends Omit<ModalCardProps, 'nav' | 'keepMounted'> {
  ModalOverlay?: ComponentType<ModalOverlayProps>;
}

/**
 * В компоненте заложена вся логика модального окна.
 *
 * @private
 */
export const ModalCardInternal = ({
  icon,
  title,
  titleComponent,
  description,
  descriptionComponent,
  children,
  actions,
  size,
  open,
  style: styleProp,
  className,
  preventClose,
  ModalOverlay = ModalOverlayDefault,
  modalOverlayTestId,
  modalDismissButtonTestId,
  getRootRef,
  dismissButtonMode,
  dismissLabel,
  noFocusToDialog,
  restoreFocus,
  onOpen,
  onOpened,
  onClose = noop,
  onClosed,
  disableFocusTrap,
  disableModalOverlay,
  disableOpenAnimation,
  disableCloseAnimation,
  ...restProps
}: ModalCardInternalProps): ReactNode => {
  const platform = usePlatform();
  const [transitionState, { ref, onTransitionEnd }] = useCSSTransition<HTMLDivElement>(open, {
    enableAppear: !disableOpenAnimation,
    enableEnter: !disableOpenAnimation,
    enableExit: !disableCloseAnimation,
    onEnter() {
      onOpen?.();
    },
    onEntered() {
      onOpened?.();
    },
    onExited() {
      onClosed?.();
    },
  });
  const opened = transitionState === 'appeared' || transitionState === 'entered';
  const hidden = transitionState === 'exited';
  const closable = !preventClose && opened;

  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const bottomSheetEnabled = !isDesktop && !preventClose && transitionState !== 'exited';

  const { opened: keyboardOpened } = useVirtualKeyboardState(bottomSheetEnabled);
  const [{ setSheetEl, setBackdropEl }, bottomSheetEventHandlers] = useBottomSheet(
    bottomSheetEnabled,
    {
      blocked: keyboardOpened,
      snapPoint: 'auto',
      sheetCSSProperty: '--vkui_internal_ModalCard--translateY',
      backdropCSSProperty: '--vkui_internal--modal-overlay--opacity',
      onDismiss() {
        onClose?.('swipe-down');
      },
    },
  );
  const handleRef = useExternRef<HTMLDivElement>(setSheetEl, ref, getRootRef);
  const style = keyboardOpened
    ? {
        ...styleProp,
        '--vkui_internal_ModalCard--safeAreaInsetBottom': '0px',
      }
    : styleProp;
  const modalOverlay = !disableModalOverlay && (
    <ModalOverlay
      getRootRef={setBackdropEl}
      data-testid={modalOverlayTestId}
      visible={open}
      disableOpenAnimation={disableOpenAnimation}
      disableCloseAnimation={disableCloseAnimation}
      onClick={
        closable
          ? function handleBackdropClick(event) {
              onClose('click-overlay', event);
            }
          : undefined
      }
    />
  );
  const handleEscKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (closable && pressedKey(event) === Keys.ESCAPE) {
        onClose('escape-key');
      }
    },
    [closable, onClose],
  );

  useScrollLock(!hidden);
  useFocusTrap(ref, {
    autoFocus: !noFocusToDialog,
    disabled: !opened || hidden || disableFocusTrap,
    restoreFocus,
  });

  return (
    <ModalOutlet
      hidden={hidden}
      isDesktop={isDesktop}
      onKeyDown={handleEscKeyDown}
      disableModalOverlay={disableModalOverlay}
    >
      {modalOverlay}
      <ModalCardBase
        {...restProps}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        getRootRef={handleRef}
        style={style}
        className={classNames(
          styles.host,
          isDesktop ? styles.hostDesktop : styles.hostMobile,
          sizeByPlatformClassNames[platform],
          transitionStateClassNames[transitionState],
          className,
        )}
        onTransitionEnd={onTransitionEnd}
        {...bottomSheetEventHandlers}
        icon={icon}
        title={title}
        titleComponent={titleComponent}
        description={description}
        descriptionComponent={descriptionComponent}
        actions={actions}
        onClose={() => onClose('click-close-button')}
        size={size}
        modalDismissButtonTestId={modalDismissButtonTestId}
        dismissButtonMode={dismissButtonMode}
        dismissLabel={dismissLabel}
      >
        {children}
      </ModalCardBase>
    </ModalOutlet>
  );
};
