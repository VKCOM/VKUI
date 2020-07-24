import React, { Component, ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import { isFunction } from '../../lib/utils';
import { transitionEvent } from '../../lib/supportEvents';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import ModalRootContext, { ModalRootContextInterface } from './ModalRootContext';
import { WebviewType } from '../ConfigProvider/ConfigProviderContext';
import { ModalsStateEntry, ModalType } from './types';
import { ANDROID } from '../../lib/platform';
import getClassName from '../../helpers/getClassName';

export interface ModalRootProps extends HasChildren, HasPlatform {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

interface ModalRootState {
  activeModal?: string;
  prevModal?: string;
  nextModal?: string;
  visibleModals?: string[];
  animated?: boolean;
  switching?: boolean;
  history?: string[];
  isBack?: boolean;
  inited?: boolean;
}

class ModalRootDesktop extends Component<ModalRootProps, ModalRootState> {
  constructor(props: ModalRootProps) {
    super(props);

    const activeModal = props.activeModal;

    this.state = {
      activeModal: null,
      prevModal: null,
      nextModal: activeModal,
      visibleModals: activeModal ? [activeModal] : [],
      animated: !!activeModal,
      switching: false,
      history: activeModal ? [activeModal] : [],
      isBack: false,
      inited: false,
    };

    this.maskElementRef = React.createRef();
    this.activeTransitions = 0;

    this.initModalsState();

    this.modalRootContext = {
      updateModalHeight: this.updateModalHeight,
    };
  }

  private modalsState: { [id: string]: ModalsStateEntry };
  private readonly maskElementRef: React.RefObject<HTMLDivElement>;
  private maskAnimationFrame: number;
  private readonly modalRootContext: ModalRootContextInterface;

  activeTransitions: number;

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
    webviewType: PropTypes.oneOf([WebviewType.VKAPPS, WebviewType.INTERNAL]),
  };

  get document(): Document {
    return this.context.document || document;
  }

  get window(): Window {
    return this.context.window || window;
  }

  get webviewType(): WebviewType {
    return this.context.webviewType || WebviewType.VKAPPS;
  }

  get modals() {
    return [].concat(this.props.children);
  }

  initModalsState() {
    this.modalsState = this.modals.reduce((acc, Modal) => {
      const modalProps = Modal.props;
      const state: ModalsStateEntry = {
        id: Modal.props.id,
        onClose: Modal.props.onClose,
        dynamicContentHeight: !!modalProps.dynamicContentHeight,
      };

      // ModalPage props
      if (typeof modalProps.settlingHeight === 'number') {
        state.settlingHeight = modalProps.settlingHeight;
      }

      acc[state.id] = state;
      return acc;
    }, {});
  }

  handleKeyDownEsc = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.triggerActiveModalClose();
    }
  };

  componentDidMount() {
    this.initActiveModal();
    document.addEventListener('keydown', this.handleKeyDownEsc);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDownEsc);
  };

  componentDidUpdate(prevProps: ModalRootProps, prevState: ModalRootState) {
    if (this.props.activeModal !== prevProps.activeModal) {
      const nextModal = this.props.activeModal;
      const prevModal = prevProps.activeModal;

      if (nextModal !== null && !this.modalsState[nextModal]) {
        return console.warn(`[ModalRoot.componentDidUpdate] nextModal ${nextModal} not found`);
      }

      let history = [...this.state.history];
      let isBack = false;

      if (nextModal === null) {
        history = [];
      } else if (history.includes(nextModal)) {
        history = history.splice(0, history.indexOf(nextModal) + 1);
        isBack = true;
      } else {
        history.push(nextModal);
      }

      return this.setState({
        activeModal: null,
        nextModal,
        prevModal,
        visibleModals: [nextModal, prevModal],
        history,
        isBack,
        animated: true,
        inited: false,
        switching: false,
      }, () => {
        if (nextModal === null) {
          this.closeActiveModal();
        } else {
          this.initActiveModal();
        }
      });
    }

    if (this.state.switching && !prevState.switching) {
      requestAnimationFrame(() => this.switchPrevNext());
    }
  }

  pickModal(modalId: string) {
    return this.document.getElementById('modal-' + modalId);
  }

  /**
   * Инициализирует модалку перед анимацией открытия
   */
  initActiveModal() {
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) {
      return;
    }

    const modalElement = this.pickModal(activeModal);
    const modalState = this.modalsState[activeModal];

    if (modalElement.querySelector('.ModalPage')) {
      modalState.type = ModalType.PAGE;
    } else if (modalElement.querySelector('.ModalCard')) {
      modalState.type = ModalType.CARD;
    }

    switch (modalState.type) {
      case ModalType.PAGE:
        modalState.settlingHeight = modalState.settlingHeight || 75;
        this.initPageModal(modalState, modalElement);
        break;

      case ModalType.CARD:
        this.initCardModal(modalState, modalElement);
        break;

      default:
        console.warn('[ModalRoot.initActiveModal] modalState.type is unknown');
    }

    this.setState({ inited: true, switching: true });
  }

  initPageModal(modalState: ModalsStateEntry, modalElement: HTMLElement) {
    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
    modalState.headerElement = modalElement.querySelector('.ModalPage__header');
    modalState.contentElement = modalElement.querySelector('.ModalPage__content');
    modalState.footerElement = modalElement.querySelector('.ModalPage__footer');
  }

  initCardModal(modalState: ModalsStateEntry, modalElement: HTMLElement) {
    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalCard__in');
  }

  checkPageContentHeight() {
    const activeModal = this.state.activeModal;

    const modalElement = this.pickModal(activeModal);
    if (modalElement) {
      const modalState = this.modalsState[activeModal];

      this.initPageModal(modalState, modalElement);
    }
  }

  updateModalHeight = () => {
    const { activeModal, nextModal } = this.state;

    const modalId = activeModal || nextModal;
    const modalState = modalId ? this.modalsState[modalId] : undefined;

    if (modalState && modalState.type === ModalType.PAGE && modalState.dynamicContentHeight) {
      if (this.state.switching) {
        this.waitTransitionFinish(modalState, () => {
          requestAnimationFrame(() => this.checkPageContentHeight());
        });
      } else {
        requestAnimationFrame(() => this.checkPageContentHeight());
      }
    }
  };

  closeActiveModal() {
    const { prevModal } = this.state;
    if (!prevModal) {
      return console.warn(`[ModalRoot.closeActiveModal] prevModal is ${prevModal}`);
    }

    const prevModalState = this.modalsState[prevModal];

    this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
    this.animateModalOpacity(prevModalState, false);
    this.setMaskOpacity(prevModalState, 0);
  }

  waitTransitionFinish(modalState: ModalsStateEntry, eventHandler: () => void) {
    if (transitionEvent.supported) {
      const onceHandler = () => {
        modalState.innerElement.removeEventListener(transitionEvent.name, onceHandler);
        eventHandler();
      };

      modalState.innerElement.addEventListener(transitionEvent.name, onceHandler);
    } else {
      setTimeout(eventHandler, this.props.platform === ANDROID ? 320 : 400);
    }
  }

  switchPrevNext() {
    const { prevModal, nextModal } = this.state;

    const prevModalState = this.modalsState[prevModal];
    const nextModalState = this.modalsState[nextModal];

    if (!prevModalState && !nextModalState) {
      return console.warn(`[ModalRoot.switchPrevNext] prevModal is ${prevModal}, nextModal is ${nextModal}`);
    }

    const prevIsCard = !!prevModalState && prevModalState.type === ModalType.CARD;

    const nextIsPage = !!nextModalState && nextModalState.type === ModalType.PAGE;
    const nextIsCard = !!nextModalState && nextModalState.type === ModalType.CARD;

    // Ждём полного скрытия предыдущей модалки
    if (prevModalState && (nextIsCard || prevIsCard && nextIsPage)) {
      this.activeTransitions += 1;
      this.waitTransitionFinish(prevModalState, () => {
        this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
        this.animateModalOpacity(nextModalState, true);
      });

      requestAnimationFrame(() => {
        this.animateModalOpacity(prevModalState, false);
      });

      return;
    }

    if (prevModalState && nextIsPage) {
      this.activeTransitions += 1;
      this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
      requestAnimationFrame(() => {
        this.animateModalOpacity(prevModalState, false);
      });
    }

    this.activeTransitions += 1;
    this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
    requestAnimationFrame(() => {
      this.animateModalOpacity(nextModalState, true);
    });
  }

  prevNextSwitchEndHandler = () => {
    this.activeTransitions = Math.max(0, this.activeTransitions - 1);
    if (this.activeTransitions > 0) {
      return;
    }

    const activeModal = this.state.nextModal;

    const newState: ModalRootState = {
      prevModal: null,
      nextModal: null,
      visibleModals: [activeModal],
      activeModal: activeModal,
      animated: false,
      switching: false,
    };

    if (!activeModal) {
      newState.history = [];
    }

    this.setState(newState);
  };

  /* Анимирует сдивг модалки */
  animateModalOpacity(modalState: ModalsStateEntry, display: boolean) {
    modalState.innerElement.style.opacity = display ? '1' : '0';
  }

  /* Анимирует тень шапки */
  animatePageHeader(modalState: ModalsStateEntry, currentPercent: number = null) {
    if (currentPercent === null) {
      currentPercent = modalState.translateY;
    }
    const headerOpenPercent = currentPercent < 15 ? Math.max(0, 15 - currentPercent) / 15 : 0;

    requestAnimationFrame(() => {
      const headerShadow: HTMLElement = modalState.headerElement.querySelector('.ModalPageHeader__shadow');
      if (headerShadow) {
        headerShadow.style.opacity = headerOpenPercent.toString();
      }
    });
  }

  /* Устанавливает прозрачность для полупрозрачной подложки */
  setMaskOpacity(modalState: ModalsStateEntry, forceOpacity: number = null) {
    if (forceOpacity === null && this.state.history[0] !== modalState.id) {
      return;
    }

    cancelAnimationFrame(this.maskAnimationFrame);
    this.maskAnimationFrame = requestAnimationFrame(() => {
      if (this.maskElementRef.current) {
        const { translateY, translateYCurrent } = modalState;

        const opacity = forceOpacity === null ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0 : forceOpacity;
        this.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, opacity)).toString();
      }
    });
  }

  /**
   * Закрывает текущую модалку
   */
  triggerActiveModalClose() {
    const activeModalState = this.modalsState[this.state.activeModal];
    if (activeModalState) {
      this.doCloseModal(activeModalState);
    }
  }

  private readonly doCloseModal = (modalState: ModalsStateEntry) => {
    if (isFunction(modalState.onClose)) {
      modalState.onClose();
    } else if (isFunction(this.props.onClose)) {
      this.props.onClose(modalState.id);
    } else {
      console.error('[ModalRoot] onClose is undefined');
    }
  };

  /**
   * По клику на полупрозрачный черный фон нужно закрыть текущую модалку
   */
  onMaskClick = () => {
    this.triggerActiveModalClose();
  };

  render() {
    const { prevModal, activeModal, nextModal, visibleModals, animated } = this.state;

    if (!activeModal && !prevModal && !nextModal && !animated) {
      return null;
    }

    return (
      <ModalRootContext.Provider value={this.modalRootContext}>
        <div
          className={classNames(getClassName('ModalRoot', this.props.platform), {
            'ModalRoot--vkapps': this.webviewType === 'vkapps',
          })}
        >
          <div
            className="ModalRoot__mask"
            onClick={this.onMaskClick}
            ref={this.maskElementRef}
          />
          <div className="ModalRoot__viewport">
            {this.modals.map((Modal: ReactElement) => {
              const modalId = Modal.props.id;
              if (!visibleModals.includes(Modal.props.id)) {
                return null;
              }

              const key = `modal-${modalId}`;

              return (
                <div
                  key={key}
                  id={key}
                  className={classNames('ModalRoot__modal', {
                    'ModalRoot__modal--active': modalId === activeModal,
                    'ModalRoot__modal--prev': modalId === prevModal,
                    'ModalRoot__modal--next': modalId === nextModal,
                  })}
                >{Modal}</div>
              );
            })}
          </div>
        </div>
      </ModalRootContext.Provider>
    );
  }
}

export default withPlatform(ModalRootDesktop);
