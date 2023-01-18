import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { transitionEvent } from '../../lib/supportEvents';
import { HasPlatform } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withContext } from '../../hoc/withContext';
import { ModalRootContext, ModalRootContextInterface } from './ModalRootContext';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from '../ConfigProvider/ConfigProviderContext';
import { ModalsStateEntry } from './types';
import { Platform } from '../../lib/platform';
import { DOMProps, withDOM } from '../../lib/dom';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalTransitionProps, withModalManager } from './useModalManager';
import { clamp } from '../../helpers/math';
import styles from './ModalRoot.module.css';

const warn = warnOnce('ModalRoot');

export interface ModalRootProps extends HasPlatform {
  activeModal?: string | null;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;
  children?: React.ReactNode;

  /**
   * Будет вызвано при начале открытия активной модалки с её id
   */
  onOpen?(modalId: string): void;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id
   */
  onOpened?(modalId: string): void;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id
   */
  onClose?(modalId: string): void;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id
   */
  onClosed?(modalId: string): void;
}

class ModalRootDesktopComponent extends React.Component<
  ModalRootProps & DOMProps & ModalTransitionProps
> {
  constructor(props: ModalRootProps & ModalTransitionProps) {
    super(props);

    this.maskElementRef = React.createRef();

    this.modalRootContext = {
      updateModalHeight: () => undefined,
      registerModal: ({ id, ...data }) => Object.assign(this.getModalState(id) ?? {}, data),
      onClose: () => this.props.onExit(),
      isInsideModal: true,
    };
  }

  private readonly maskElementRef: React.RefObject<HTMLDivElement>;
  private maskAnimationFrame: number | undefined = undefined;
  private readonly modalRootContext: ModalRootContextInterface;
  private restoreFocusTo: HTMLElement | undefined = undefined;

  private get timeout() {
    return this.props.platform === Platform.IOS ? 400 : 320;
  }

  private get modals() {
    return React.Children.toArray(this.props.children) as React.ReactElement[];
  }

  getModalState(id: string | null) {
    if (id === null) {
      return undefined;
    }
    return this.props.getModalState(id);
  }

  componentDidUpdate(prevProps: ModalRootProps & ModalTransitionProps) {
    // transition phase 2: animate exiting modal
    if (this.props.exitingModal && this.props.exitingModal !== prevProps.exitingModal) {
      this.closeModal(this.props.exitingModal);
    }

    // transition phase 3: animate entering modal
    if (this.props.enteringModal && this.props.enteringModal !== prevProps.enteringModal) {
      this.openModal(prevProps);
    }

    // focus restoration
    if (this.props.activeModal && !prevProps.activeModal) {
      this.restoreFocusTo = (this.props.document?.activeElement ?? undefined) as
        | HTMLElement
        | undefined;
    }
    if (!this.props.activeModal && !this.props.exitingModal && this.restoreFocusTo) {
      this.restoreFocusTo.focus();
      this.restoreFocusTo = undefined;
    }
  }

  openModal(prevProps: ModalRootProps & ModalTransitionProps) {
    const { enteringModal } = this.props;
    if (!enteringModal) {
      return;
    }

    const enteringState = this.getModalState(enteringModal);
    this.props.onEnter();

    // Анимация открытия модального окна
    if (!prevProps.exitingModal) {
      requestAnimationFrame(() => {
        if (this.props.enteringModal === enteringModal) {
          this.waitTransitionFinish(enteringState, () => this.props.onEntered(enteringModal));
          this.animateModalOpacity(enteringState, true);
        }
      });

      return;
    }

    // Переход между модальными окнами без анимации
    if (enteringState?.innerElement) {
      enteringState.innerElement.style.transition = 'none';
      enteringState.innerElement.style.opacity = '1';
    }

    this.props.onEntered(enteringModal);
  }

  closeModal(id: string) {
    const prevModalState = this.getModalState(id);
    if (!prevModalState) {
      return;
    }

    // Анимация закрытия модального окна
    if (!this.props.activeModal) {
      requestAnimationFrame(() => {
        this.waitTransitionFinish(prevModalState, () => this.props.onExited(id));
        this.animateModalOpacity(prevModalState, false);
        this.setMaskOpacity(prevModalState, 0);
      });

      return;
    }

    // Переход между модальными окнами без анимации
    this.props.onExited(id);
  }

  waitTransitionFinish(modalState: ModalsStateEntry | undefined, eventHandler: () => void) {
    if (transitionEvent.supported) {
      const onceHandler = () => {
        modalState?.innerElement?.removeEventListener(transitionEvent.name as string, onceHandler);
        eventHandler();
      };

      modalState?.innerElement?.addEventListener(transitionEvent.name as string, onceHandler);
    } else {
      setTimeout(eventHandler, this.timeout);
    }
  }

  /* Анимирует сдвиг модалки */
  animateModalOpacity(modalState: ModalsStateEntry | undefined, display: boolean) {
    if (modalState?.innerElement) {
      modalState.innerElement.style.transition = '';
      modalState.innerElement.style.transitionDelay =
        display && this.props.delayEnter ? `${this.timeout}ms` : '';
      modalState.innerElement.style.opacity = display ? '1' : '0';
    }
  }

  /* Устанавливает прозрачность для полупрозрачной подложки */
  setMaskOpacity(modalState: ModalsStateEntry, forceOpacity: number | null = null) {
    if (forceOpacity === null && this.props.history?.[0] !== modalState.id) {
      return;
    }

    if (this.maskAnimationFrame) {
      cancelAnimationFrame(this.maskAnimationFrame);
    }
    this.maskAnimationFrame = requestAnimationFrame(() => {
      if (this.maskElementRef.current) {
        const { translateY = 0, translateYCurrent = 0 } = modalState;

        const opacity =
          forceOpacity === null
            ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0
            : forceOpacity;
        this.maskElementRef.current.style.opacity = clamp(opacity, 0, 100).toString();
      }
    });
  }

  render() {
    const { exitingModal, activeModal } = this.props;

    if (!activeModal && !exitingModal) {
      return null;
    }

    return (
      <ModalRootContext.Provider value={this.modalRootContext}>
        <div
          className={classNames(
            styles['ModalRoot'],
            this.props.configProvider?.webviewType === WebviewType.VKAPPS &&
              styles['ModalRoot--vkapps'],
            styles['ModalRoot--desktop'],
          )}
        >
          <div
            className={styles['ModalRoot__mask']}
            ref={this.maskElementRef}
            onClick={this.props.onExit}
          />
          <div className={styles['ModalRoot__viewport']}>
            {this.modals.map((Modal: React.ReactElement) => {
              const modalId = getNavId(Modal.props, warn);
              if (modalId !== activeModal && modalId !== exitingModal) {
                return null;
              }

              const key = `modal-${modalId}`;

              return (
                <FocusTrap
                  restoreFocus={false}
                  onClose={this.props.onExit}
                  timeout={this.timeout}
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
  }
}

export const ModalRootDesktop = withContext(
  withPlatform(withDOM<ModalRootProps>(withModalManager()(ModalRootDesktopComponent))),
  ConfigProviderContext,
  'configProvider',
);
