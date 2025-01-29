'use client';

import { type ComponentType, type KeyboardEvent, useCallback } from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useExternRef } from '../../hooks/useExternRef';
import { useVirtualKeyboardState } from '../../hooks/useVirtualKeyboardState';
import { Keys, pressedKey } from '../../lib/accessibility';
import { useCSSTransition, type UseCSSTransitionState } from '../../lib/animation';
import {
  BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE,
  type SnapPoint,
  type SnapPointChange,
  useBottomSheet,
} from '../../lib/sheet';
import type { CSSCustomProperties } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { ModalOutlet } from '../ModalOutlet/ModalOutlet';
import {
  ModalOverlay as ModalOverlayDefault,
  type ModalOverlayProps,
} from '../ModalOverlay/ModalOverlay';
import { ModalPageContent } from '../ModalPageContent/ModalPageContent';
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
  noFocusToDialog,
  hideCloseButton,
  preventClose,
  disableContentPanningGesture,
  onOpen,
  onOpened,
  onClose = noop,
  onClosed,
  ...restProps
}: ModalPageInternalProps) => {
  const { hasCustomPanelHeaderAfter } = useConfigProvider();
  const [transitionState, { ref, onTransitionEnd }] = useCSSTransition<HTMLDivElement>(open, {
    enableAppear: true,
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

  const disableContentPanningGestureProp = disableContentPanningGesture
    ? BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE
    : undefined;
  const [desktopMaxWidthClassName, desktopMaxWidthStyle] = resolveDesktopMaxWidth(
    isDesktop ? desktopMaxWidth : 's',
  );

  const modalOverlay = (
    <ModalOverlay
      getRootRef={setBackdropEl}
      data-testid={modalOverlayTestId}
      visible={open}
      onClick={
        closable
          ? function handleBackdropClick(event) {
              onClose('click-overlay', event);
            }
          : undefined
      }
    />
  );
  const closeButton =
    hideCloseButton || !isDesktop ? null : (
      <ModalDismissButton
        data-testid={modalDismissButtonTestId}
        onClick={
          closable
            ? function handleDismissButtonClick(event) {
                onClose('click-close-button', event);
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
    <ModalOutlet hidden={hidden} isDesktop={isDesktop} onKeyDown={handleEscKeyDown}>
      {modalOverlay}
      <FocusTrap
        {...restProps}
        autoFocus={!noFocusToDialog}
        role="dialog"
        aria-modal="true"
        disabled={!opened || hidden}
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
        <div
          {...bottomSheetEventHandlers}
          ref={handleSheetRef}
          role="document"
          style={documentStyle}
          className={classNames(
            styles.document,
            isDesktop ? styles.documentDesktop : styles.documentMobile,
            transitionStateClassNames[transitionState],
          )}
          onTransitionEnd={onTransitionEnd}
        >
          <div className={classNames(styles.children, isDesktop && styles.childrenDesktop)}>
            {hasReactNode(header) && header}
            <ModalPageContent
              getRootRef={handleSheetScrollRef}
              data-testid={modalContentTestId}
              {...disableContentPanningGestureProp}
            >
              {children}
            </ModalPageContent>
            {hasReactNode(footer) && footer}
          </div>
          {closeButton}
        </div>
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
  if (typeof desktopMaxWidth === 'string') {
    return [desktopMaxWidthClassNames[desktopMaxWidth], undefined];
  }

  return [
    undefined,
    typeof desktopMaxWidth === 'number'
      ? { '--vkui_internal_ModalPage--desktopMaxWidth': `${desktopMaxWidth}px` }
      : undefined,
  ];
}

function getHeightCSSVariable(height?: number | string): CSSCustomProperties | undefined {
  return height !== undefined
    ? {
        '--vkui_internal_ModalPage--userHeight':
          typeof height === 'number' ? `${height}px` : height,
      }
    : undefined;
}
