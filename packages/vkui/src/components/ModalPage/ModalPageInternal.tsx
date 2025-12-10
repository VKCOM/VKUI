'use client';
/* eslint-disable jsdoc/require-jsdoc */

import { type ComponentType, type KeyboardEvent, useCallback } from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useVirtualKeyboardState } from '../../hooks/useVirtualKeyboardState';
import { Keys, pressedKey } from '../../lib/accessibility';
import { useCSSTransition, type UseCSSTransitionState } from '../../lib/animation';
import { type SnapPoint, type SnapPointChange, useBottomSheet } from '../../lib/sheet';
import type { CSSCustomProperties } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalOutlet } from '../ModalOutlet/ModalOutlet';
import {
  ModalOverlay as ModalOverlayDefault,
  type ModalOverlayProps,
} from '../ModalOverlay/ModalOverlay';
import { ModalPageBase } from './ModalPageBase';
import type { ModalPageProps } from './types';
import styles from './ModalPage.module.css';

const transitionStateClassNames: Partial<Record<UseCSSTransitionState, string>> = {
  appear: styles['documentStateEnter'],
  appearing: styles['documentStateEntering'],

  enter: styles['documentStateEnter'],
  entering: styles['documentStateEntering'],

  exiting: styles['documentStateExiting'],
  exited: styles['documentStateExited'],
};

export interface ModalPageInternalProps
  extends Omit<ModalPageProps, 'nav' | 'keepMounted' | 'settlingHeight' | 'dynamicContentHeight'> {
  snapPoint: SnapPoint;
  ModalOverlay?: ComponentType<ModalOverlayProps>;
  onSnapPointChange?: SnapPointChange;
}

/**
 * В компоненте заложена вся логика модального окна.
 *
 * @private
 */
export const ModalPageInternal = ({
  open,
  header,
  footer,
  size: desktopMaxWidth,
  height,
  children,
  className,
  style,
  snapPoint,
  onSnapPointChange,
  getModalContentRef,
  ModalOverlay = ModalOverlayDefault,
  modalOverlayTestId,
  modalContentTestId,
  modalDismissButtonTestId,
  modalDismissButtonLabel = 'Закрыть',
  outsideButtons,
  noFocusToDialog,
  hideCloseButton,
  preventClose,
  disableContentPanningGesture,
  restoreFocus,
  onOpen,
  onOpened,
  onClose = noop,
  onClosed,
  disableFocusTrap,
  disableModalOverlay,
  disableOpenAnimation = false,
  disableCloseAnimation = false,
  ...restProps
}: ModalPageInternalProps) => {
  const { hasCustomPanelHeaderAfter } = useConfigProvider();
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

  const { sizeX, isDesktop } = useAdaptivityWithJSMediaQueries();
  const bottomSheetEnabled = !isDesktop && !preventClose && transitionState !== 'exited';
  const { opened: keyboardOpened } = useVirtualKeyboardState(bottomSheetEnabled);

  const [{ initialStyle, setSheetEl, setSheetScrollEl, setBackdropEl }, bottomSheetEventHandlers] =
    useBottomSheet(bottomSheetEnabled, {
      blocked: keyboardOpened,
      snapPoint,
      sheetCSSProperty: '--vkui_internal_ModalPageDocument--snapPoint',
      backdropCSSProperty: '--vkui_internal--modal-overlay--opacity',
      onSnapPointChange,
      onDismiss() {
        onClose('swipe-down');
      },
    });
  const documentStyle = keyboardOpened
    ? {
        '--vkui_internal_ModalPageDocument--safeAreaInsetBottom': '0px',
        ...initialStyle,
      }
    : initialStyle;
  const handleSheetRef = useExternRef<HTMLDivElement>(setSheetEl, ref);
  const handleSheetScrollRef = useExternRef<HTMLDivElement>(setSheetScrollEl, getModalContentRef);

  const [desktopMaxWidthClassName, desktopMaxWidthStyle] = isDesktop
    ? resolveDesktopMaxWidth(desktopMaxWidth)
    : [undefined, undefined];

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

  return (
    <ModalOutlet
      hidden={hidden}
      isDesktop={isDesktop}
      onKeyDown={handleEscKeyDown}
      disableModalOverlay={disableModalOverlay}
    >
      {modalOverlay}
      <FocusTrap
        {...restProps}
        autoFocus={!noFocusToDialog}
        restoreFocus={restoreFocus}
        role="dialog"
        aria-modal="true"
        disabled={!opened || hidden || disableFocusTrap}
        className={classNames(
          className,
          styles.host,
          isDesktop ? styles.hostDesktop : styles.hostMobile,
          !isDesktop &&
            (hasCustomPanelHeaderAfter
              ? styles.hostMobileSafeAreaInsetTopWithCustomOffset
              : styles.hostMobileSafeAreaInsetTop),
          desktopMaxWidthClassName,
          sizeX === 'regular' && 'vkuiInternalModalPage--sizeX-regular',
        )}
        style={mergeStyle(mergeStyle(desktopMaxWidthStyle, getHeightCSSVariable(height)), style)}
      >
        <ModalPageBase
          {...bottomSheetEventHandlers}
          getRootRef={handleSheetRef}
          getRef={handleSheetScrollRef}
          style={documentStyle}
          className={classNames(
            isDesktop ? styles.documentDesktop : styles.documentMobile,
            transitionStateClassNames[transitionState],
          )}
          onTransitionEnd={onTransitionEnd}
          isDesktop={isDesktop}
          disableContentPanningGesture={disableContentPanningGesture}
          header={header}
          footer={footer}
          outsideButtons={outsideButtons}
          modalContentTestId={modalContentTestId}
          modalDismissButtonTestId={modalDismissButtonTestId}
          modalDismissButtonLabel={modalDismissButtonLabel}
          hideCloseButton={hideCloseButton}
          closable={closable}
          onClose={onClose}
        >
          {children}
        </ModalPageBase>
      </FocusTrap>
    </ModalOutlet>
  );
};

const desktopMaxWidthClassNames = {
  s: styles['hostDesktopMaxWidthS'],
  m: styles['hostDesktopMaxWidthM'],
  l: styles['hostDesktopMaxWidthL'],
};

function resolveDesktopMaxWidth(
  desktopMaxWidth: ModalPageInternalProps['size'] = 's',
): [string | undefined, CSSCustomProperties | undefined] {
  if (typeof desktopMaxWidth === 'number') {
    return [undefined, { '--vkui_internal_ModalPage--desktopMaxWidth': `${desktopMaxWidth}px` }];
  }

  return desktopMaxWidthClassNames.hasOwnProperty(desktopMaxWidth)
    ? [desktopMaxWidthClassNames[desktopMaxWidth], undefined]
    : [undefined, { '--vkui_internal_ModalPage--desktopMaxWidth': desktopMaxWidth }];
}

function getHeightCSSVariable(height?: number | string): CSSCustomProperties | undefined {
  return height !== undefined
    ? {
        '--vkui_internal_ModalPage--userHeight':
          typeof height === 'number' ? `${height}px` : height,
      }
    : undefined;
}
