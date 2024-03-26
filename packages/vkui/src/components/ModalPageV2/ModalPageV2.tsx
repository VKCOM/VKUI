import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { useKeyboard } from '../../hooks/useKeyboard';
import { isSmallTablePlus } from '../../lib/adaptivity';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { BottomSheetController } from '../../lib/bottomSheet';
import { hasSelectionWithRangeType } from '../../lib/dom';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { ModalPageBackdrop } from '../ModalPageBackdrop/ModalPageBackdrop';
import type { ModalPageV2Props } from './types';
import styles from './ModalPageV2.module.css';

const animationStateClassNames = {
  enter: styles['ModalPageV2--enter'],
  entering: styles['ModalPageV2--enter'],
  entered: undefined,
  exit: styles['ModalPageV2--exit'],
  exiting: styles['ModalPageV2--exit'],
  exited: undefined,
};

const desktopMaxWidthClassName = {
  s: styles['ModalPageV2--maxWidth-s'],
  m: styles['ModalPageV2--maxWidth-m'],
  l: styles['ModalPageV2--maxWidth-l'],
};

export const ModalPageV2 = ({
  open,
  desktopMaxWidth = 's',
  // height,
  children,
  className,
  disableAutoFocus,
  disableCloseButton,
  disableCloseOnEscKey,
  disableBackdrop,
  closeButtonTestId,
  closable: closableProp = true,
  dynamicContentHeight,
  settlingHeight = 100,
  onOpen,
  onOpened,
  onClose = noop,
  onClosed = noop,
  ...restProps
}: ModalPageV2Props) => {
  const { isOpened: disableTouchForTextfieldFocused } = useKeyboard();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    open ? 'enter' : 'exit',
    {
      onEnter: onOpen,
      onEntered: onOpened,
      onExited: onClosed,
    },
    !open,
  );
  const opened = animationState === 'entered';
  const hidden = animationState === 'exited';
  const closable = closableProp && opened;
  const touchable = !disableTouchForTextfieldFocused && closable;

  const bsController = React.useRef<BottomSheetController | null>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const touchableContainerRef = React.useRef<HTMLDivElement>(null);

  const initialOffset = 100 - settlingHeight;
  const initialStyle =
    initialOffset !== 0
      ? { '--vkui_internal_ModalPage--transform-default': `translateY(${initialOffset}%)` }
      : null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    onClose(Object.assign({ reason: 'click-backdrop' as const }, event));
  };

  const backdrop = disableBackdrop ? null : (
    <ModalPageBackdrop
      getRootRef={backdropRef}
      visible={open}
      onClick={closable ? handleBackdropClick : undefined}
    />
  );

  const handleClosesButton = (event: React.MouseEvent<HTMLElement>) => {
    onClose(Object.assign({ reason: 'click-close-button' as const }, event));
  };

  const closeButton = disableCloseButton ? null : (
    <ModalDismissButton
      className={styles['Modal__CloseButton']}
      data-testid={closeButtonTestId}
      onClick={closable ? handleClosesButton : undefined}
    />
  );

  const handleEscKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      onClose(Object.assign({ reason: 'escape-key' as const }, event));
    },
    [onClose],
  );

  useGlobalEscKeyDown(!disableCloseOnEscKey && closable, handleEscKeyDown);

  const handleSwipeDown = () => {
    onClose({ reason: 'swipe-down' });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    if (
      // FIXME надо проверять на desktop иначе, текущий брейкпоинт не учитывает landscape
      isSmallTablePlus(event.currentTarget) ||
      hasSelectionWithRangeType(event.currentTarget)
    ) {
      return;
    }

    if (!bsController.current) {
      bsController.current = new BottomSheetController(
        touchableContainerRef.current!,
        backdropRef.current!,
        handleSwipeDown,
      );
    }

    bsController.current.panStart(event.nativeEvent, initialOffset);
  };

  const handleTouchEnd = () => {
    if (bsController.current) {
      bsController.current.panEnd();
    }
  };

  React.useEffect(
    function onTouchMoveWithPassiveIsFalseForPreventScrollIfNeeded() {
      const touchableContainerEl = touchableContainerRef.current;

      if (!touchable || !touchableContainerEl) {
        return;
      }

      const handleTouchMove = function (this: HTMLElement, event: TouchEvent) {
        if (hasSelectionWithRangeType(this)) {
          return;
        }

        if (bsController.current) {
          bsController.current.panMove(event);
        }
      };

      const eventOptions = { capture: false, passive: false };
      touchableContainerEl.addEventListener('touchmove', handleTouchMove, eventOptions);
      return function handleUnmount() {
        touchableContainerEl.removeEventListener('touchmove', handleTouchMove, eventOptions);
      };
    },
    [touchable],
  );

  React.useEffect(
    function handleAnimationExitedForDestroyBottomSheetController() {
      if (hidden && bsController.current) {
        bsController.current.destroy();
        bsController.current = null;
      }
    },
    [hidden],
  );

  useScrollLock(!hidden);

  return (
    <div className={styles.ModalPageV2Root} hidden={hidden} aria-hidden={hidden}>
      {backdrop}
      <FocusTrap
        {...restProps}
        {...animationHandlers}
        tabIndex={-1}
        autoFocus={disableAutoFocus}
        role="dialog"
        aria-modal="true"
        className={classNames(
          className,
          styles.ModalPageV2,
          typeof desktopMaxWidth === 'string' && desktopMaxWidthClassName[desktopMaxWidth],
          animationStateClassNames[animationState],
        )}
      >
        <div
          ref={touchableContainerRef}
          className={styles.ModalPageV2__container}
          style={{
            maxWidth: typeof desktopMaxWidth === 'number' ? desktopMaxWidth : undefined,
            // height,
            ...initialStyle,
          }}
          onTouchStart={touchable ? handleTouchStart : undefined}
          onTouchEnd={touchable ? handleTouchEnd : undefined}
        >
          <div className={styles.ModalPageV2__children}>{children}</div>
        </div>
        {closeButton}
      </FocusTrap>
    </div>
  );
};
