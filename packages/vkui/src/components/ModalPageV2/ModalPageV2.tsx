import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useKeyboard } from '../../hooks/useKeyboard';
import { isSmallTablePlus } from '../../lib/adaptivity';
import { type AnimationState, useReducedMotion } from '../../lib/animation';
import { BottomSheetController } from '../../lib/bottomSheet';
import { hasSelectionWithRangeType } from '../../lib/dom';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import type { ModalPageV2Props } from './types';
import styles from './ModalPageV2.module.css';

const desktopMaxWidthClassName = {
  s: styles['ModalPageV2--maxWidth-s'],
  m: styles['ModalPageV2--maxWidth-m'],
  l: styles['ModalPageV2--maxWidth-l'],
};

interface ModalPageV2PrivateProps extends Omit<ModalPageV2Props, 'open' | 'onOpen' | 'onOpened'> {
  animationState: AnimationState;
}

/**
 * @private
 */
export const ModalPageV2 = ({
  animationState,
  desktopMaxWidth = 's',
  // height,
  children,
  className,
  disableAutoFocus,
  disableCloseButton,
  closeButtonTestId,
  preventClose,
  settlingHeight = 100,
  onClose = noop,
  ...restProps
}: ModalPageV2PrivateProps) => {
  const { isOpened: disabledTouchForTextfieldFocused } = useKeyboard();

  const bsController = React.useRef<BottomSheetController | null>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const touchableContainerRef = React.useRef<HTMLDivElement>(null);

  const initialOffset = 100 - settlingHeight;
  const initialStyle = initialOffset !== 0 ? { transform: `translateY(${initialOffset}%)` } : {};

  const isReducedMotion = useReducedMotion();
  const hidden = animationState === 'exited';
  const willBeHide = animationState === 'exit' || animationState === 'exiting';

  const handleSwipeDown = () => {
    onClose(undefined, 'swipeDown');
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClose(event, 'clickBackdrop');
  };

  const handleClosesButton = (event: React.MouseEvent<HTMLDivElement>) => {
    onClose(event, 'clickCloseButton');
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (
      preventClose ||
      disabledTouchForTextfieldFocused ||
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

  React.useEffect(function onTouchMoveWithPassiveIsFalseForPreventScrollIfNeeded() {
    const touchableContainerEl = touchableContainerRef.current;

    if (!touchableContainerEl) {
      return;
    }

    const handleTouchMove = function (this: HTMLDivElement, event: TouchEvent) {
      if (hasSelectionWithRangeType(this)) {
        return;
      }

      if (bsController.current) {
        bsController.current.panMove(event);
      }
    };

    touchableContainerEl.addEventListener('touchmove', handleTouchMove, { passive: false });
    return function handleUnmount() {
      if (bsController.current) {
        bsController.current.destroy();
      }
      // @ts-expect-error: TS2769 В интерфейсе EventListenerOptions нет поля passive
      touchableContainerEl.removeEventListener('touchmove', handleTouchMove, { passive: false });
    };
  }, []);

  React.useEffect(
    function handleAnimationExitedForDestroyBottomSheetController() {
      if (animationState === 'exited' && bsController.current) {
        bsController.current.destroy();
      }
    },
    [animationState],
  );

  useScrollLock(!willBeHide);

  return (
    <div
      className={classNames(styles.ModalPageV2Root, hidden && styles['ModalPageV2Root--hidden'])}
      aria-hidden={hidden}
    >
      <div
        ref={backdropRef}
        aria-hidden="true"
        className={classNames(
          styles.ModalPageV2Backdrop,
          willBeHide && styles['ModalPageV2Backdrop--willBeHide'],
        )}
        onClick={preventClose ? undefined : handleBackdropClick}
      />
      <FocusTrap
        {...restProps}
        tabIndex={-1}
        autoFocus={disableAutoFocus}
        role="dialog"
        aria-modal="true"
        className={classNames(
          className,
          styles.ModalPageV2,
          typeof desktopMaxWidth === 'string' && desktopMaxWidthClassName[desktopMaxWidth],
          willBeHide && styles['ModalPageV2--willBeHide'],
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
          onTouchStart={isReducedMotion ? undefined : handleTouchStart}
          onTouchEnd={isReducedMotion ? undefined : handleTouchEnd}
        >
          <div className={styles.ModalPageV2__children}>{children}</div>
        </div>
        {disableCloseButton ? null : (
          <ModalDismissButton
            className={styles.ModalCloseButton}
            data-testid={closeButtonTestId}
            onClick={preventClose ? undefined : handleClosesButton}
          />
        )}
      </FocusTrap>
    </div>
  );
};
