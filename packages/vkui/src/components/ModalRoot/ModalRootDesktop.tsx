import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePrevious } from '../../hooks/usePrevious';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { useDOM } from '../../lib/dom';
import { getNavId } from '../../lib/getNavId';
import { Platform } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalRootContext, ModalRootContextInterface } from './ModalRootContext';
import { ModalRootWithDOMProps, ModalsStateEntry } from './types';
import { useModalManager } from './useModalManager';
import styles from './ModalRoot.module.css';

const warn = warnOnce('ModalRoot');

export const ModalRootDesktop = ({
  activeModal: activeModalProp,
  children,
  noFocusToDialog = false,
  onOpen,
  onOpened,
  onClose,
  onClosed,
}: ModalRootWithDOMProps) => {
  const maskElementRef = React.useRef<HTMLDivElement>(null);
  const maskAnimationFrame = React.useRef<number | undefined>(undefined);
  const restoreFocusTo = React.useRef<HTMLElement | undefined>(undefined);

  const { document } = useDOM();
  const { hasCustomPanelHeaderAfter, platform } = useConfigProvider();
  const {
    activeModal,
    exitingModal,
    onExit,
    getModalState,
    enteringModal,
    onEnter,
    onEntered: onEnteredProp,
    onExited,
    history,
    delayEnter,
  } = useModalManager(activeModalProp, children, onOpen, onOpened, onClose, onClosed, noop);

  const { waitTransitionFinish } = useWaitTransitionFinish();
  const prevProps = usePrevious({
    exitingModal,
    enteringModal,
    activeModal,
  });
  const modalRootContext: ModalRootContextInterface = useObjectMemo({
    updateModalHeight: () => undefined,
    registerModal: ({ id, ...data }) => Object.assign(getModalState(id) ?? {}, data),
    onClose: onExit,
    isInsideModal: true,
  });

  const timeout = platform === Platform.IOS ? 400 : 320;
  const modals = React.Children.toArray(children) as React.ReactElement[];

  /* Анимирует сдвиг модального окна */
  const animateModalOpacity = (modalState: ModalsStateEntry | undefined, display: boolean) => {
    if (modalState?.innerElement) {
      modalState.innerElement.style.transition = '';
      modalState.innerElement.style.transitionDelay = display && delayEnter ? `${timeout}ms` : '';
      modalState.innerElement.style.opacity = display ? '1' : '0';
    }
  };

  /* Устанавливает прозрачность для полупрозрачной подложки */
  const setMaskOpacity = (modalState: ModalsStateEntry, forceOpacity: number | null = null) => {
    if (forceOpacity === null && history?.[0] !== modalState.id) {
      return;
    }

    if (maskAnimationFrame.current) {
      cancelAnimationFrame(maskAnimationFrame.current);
    }
    maskAnimationFrame.current = requestAnimationFrame(() => {
      if (maskElementRef.current) {
        const { translateY = 0, translateYCurrent = 0 } = modalState;

        const opacity =
          forceOpacity === null
            ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0
            : forceOpacity;
        maskElementRef.current.style.opacity = clamp(opacity, 0, 100).toString();
      }
    });
  };

  const onEntered = ({ id, modalElement }: ModalsStateEntry) => {
    if (!noFocusToDialog && modalElement && !modalElement.contains(document!.activeElement)) {
      modalElement.focus();
    }

    onEnteredProp(id);
  };

  const openModal = () => {
    if (!enteringModal || !prevProps) {
      return;
    }

    const enteringState = getModalState(enteringModal);
    onEnter();

    // Анимация открытия модального окна
    if (!prevProps.exitingModal) {
      requestAnimationFrame(() => {
        if (enteringModal === enteringModal && enteringState) {
          waitTransitionFinish(enteringState.innerElement, () => onEntered(enteringState), timeout);
          animateModalOpacity(enteringState, true);
          setMaskOpacity(enteringState, 1);
        }
      });

      return;
    }

    // Переход между модальными окнами без анимации
    requestAnimationFrame(() => {
      if (enteringState?.innerElement) {
        enteringState.innerElement.style.transition = 'none';
        enteringState.innerElement.style.opacity = '1';
        setMaskOpacity(enteringState, 1);
      }
    });

    if (enteringState) {
      onEntered(enteringState);
    }
  };

  const closeModal = (id: string) => {
    const prevModalState = getModalState(id);
    if (!prevModalState) {
      return;
    }

    // Анимация закрытия модального окна
    if (!activeModal) {
      requestAnimationFrame(() => {
        waitTransitionFinish(prevModalState?.innerElement, () => onExited(id), timeout);
        animateModalOpacity(prevModalState, false);
        setMaskOpacity(prevModalState, 0);
      });

      return;
    }

    // Переход между модальными окнами без анимации
    onExited(id);
  };

  React.useEffect(() => {
    if (!prevProps) {
      return;
    }

    // transition phase 2: animate exiting modal
    if (exitingModal && exitingModal !== prevProps.exitingModal) {
      closeModal(exitingModal);
    }

    // transition phase 3: animate entering modal
    if (enteringModal && enteringModal !== prevProps.enteringModal) {
      openModal();
    }

    // focus restoration
    if (activeModal && !prevProps.activeModal) {
      restoreFocusTo.current = (document?.activeElement ?? undefined) as HTMLElement | undefined;
    }
    if (!activeModal && !exitingModal && restoreFocusTo.current) {
      restoreFocusTo.current.focus();
      restoreFocusTo.current = undefined;
    }
  });

  if (!activeModal && !exitingModal) {
    return null;
  }

  return (
    <ModalRootContext.Provider value={modalRootContext}>
      <div
        className={classNames(
          styles['ModalRoot'],
          hasCustomPanelHeaderAfter && styles['ModalRoot--hasCustomPanelHeaderAfterSlot'],
          styles['ModalRoot--desktop'],
        )}
      >
        <div className={styles['ModalRoot__mask']} ref={maskElementRef} onClick={onExit} />
        <div className={styles['ModalRoot__viewport']}>
          {modals.map((Modal: React.ReactElement) => {
            const modalId = getNavId(Modal.props, warn);
            if (modalId !== activeModal && modalId !== exitingModal) {
              return null;
            }

            const key = `modal-${modalId}`;

            return (
              <FocusTrap
                restoreFocus={false}
                onClose={onExit}
                timeout={timeout}
                key={key}
                className={styles['ModalRoot__modal']}
              >
                {Modal}
              </FocusTrap>
            );
          })}
        </div>
      </div>
    </ModalRootContext.Provider>
  );
};
