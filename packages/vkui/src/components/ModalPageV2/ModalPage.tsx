import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { useVirtualKeyboardState } from '../../hooks/useKeyboard';
import { isSmallTablePlus } from '../../lib/adaptivity';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { BottomSheetController } from '../../lib/bottomSheet';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { ModalPageBackdrop } from '../ModalPageBackdrop/ModalPageBackdrop';
import { ModalPageRoot } from '../ModalPageRoot/ModalPageRoot';
import type { ModalPageProps } from './types';
import styles from './ModalPage.module.css';

const animationStateClassNames = {
  enter: styles['hostStateEnter'],
  entering: styles['hostStateEnter'],
  entered: undefined,
  exit: styles['hostStateExit'],
  exiting: styles['hostStateExit'],
  exited: undefined,
};

const desktopMaxWidthClassName = {
  s: styles['hostMaxWidthS'],
  m: styles['hostMaxWidthM'],
  l: styles['hostMaxWidthL'],
};

export const ModalPage = ({
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
}: ModalPageProps) => {
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

  const { opened: keyboardOpened } = useVirtualKeyboardState(opened);
  const touchable = !keyboardOpened && closable;

  const bsController = React.useRef<BottomSheetController | null>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const touchableContainerRef = React.useRef<HTMLDivElement>(null);

  const initialOffset = 100 - settlingHeight;
  const initialStyle =
    initialOffset !== 0
      ? { '--vkui_internal_ModalPage--transform-default': `translate3d(0, ${initialOffset}%, 0)` }
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
      isSmallTablePlus(event.currentTarget)
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
    <ModalPageRoot hidden={hidden}>
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
          styles.host,
          typeof desktopMaxWidth === 'string' && desktopMaxWidthClassName[desktopMaxWidth],
          animationStateClassNames[animationState],
        )}
      >
        <div
          ref={touchableContainerRef}
          className={styles.container}
          style={{
            maxWidth: typeof desktopMaxWidth === 'number' ? desktopMaxWidth : undefined,
            // height,
            ...initialStyle,
          }}
          onTouchStart={touchable ? handleTouchStart : undefined}
          onTouchEnd={touchable ? handleTouchEnd : undefined}
        >
          <div className={styles.children}>{children}</div>
        </div>
        {closeButton}
      </FocusTrap>
    </ModalPageRoot>
  );
};
