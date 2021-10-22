import * as React from 'react';
import { Touch, TouchEvent } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { setTransformStyle } from '../../lib/styles';
import { rubber } from '../../lib/touch';
import { isFunction } from '../../lib/utils';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { transitionEvent } from '../../lib/supportEvents';
import { HasPlatform } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withContext } from '../../hoc/withContext';
import ModalRootContext, { ModalRootContextInterface } from './ModalRootContext';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from '../ConfigProvider/ConfigProviderContext';
import { ModalsState, ModalsStateEntry, ModalType, TranslateRange } from './types';
import { MODAL_PAGE_DEFAULT_PERCENT_HEIGHT } from './constants';
import { DOMProps, withDOM } from '../../lib/dom';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import './ModalRoot.css';

const warn = warnOnce('ModalRoot');
const IS_DEV = process.env.NODE_ENV === 'development';

function numberInRange(number: number, range: TranslateRange) {
  return number >= range[0] && number <= range[1];
}

function rangeTranslate(number: number) {
  return Math.max(0, Math.min(98, number));
}

export interface ModalRootProps extends HasPlatform {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;
}

interface ModalRootState {
  activeModal?: string;
  enteringModal?: string;
  exitingModal?: string;

  history?: string[];
  isBack?: boolean;
  touchDown?: boolean;
  dragging?: boolean;
}

class ModalRootTouchComponent extends React.Component<ModalRootProps & DOMProps, ModalRootState> {
  constructor(props: ModalRootProps) {
    super(props);

    const activeModal = props.activeModal;

    this.state = {
      activeModal,
      exitingModal: null,
      history: activeModal ? [activeModal] : [],
      isBack: false,
      touchDown: false,
      dragging: false,
    };

    this.maskElementRef = React.createRef();

    this.initModalsState();

    this.modalRootContext = {
      updateModalHeight: this.updateModalHeight,
      registerModal: ({ id, ...data }) => Object.assign(this.modalsState[id], data),
      onClose: this.triggerActiveModalClose,
      isInsideModal: true,
    };

    this.frameIds = {};
  }

  private modalsState: ModalsState;
  private documentScrolling: boolean;
  private readonly maskElementRef: React.RefObject<HTMLDivElement>;
  private readonly viewportRef = React.createRef<HTMLDivElement>();
  private maskAnimationFrame: number;
  private readonly modalRootContext: ModalRootContextInterface;
  private readonly frameIds: {
    [index: string]: number;
  };
  private restoreFocusTo: HTMLElement;

  get timeout(): number {
    return this.props.platform === ANDROID || this.props.platform === VKCOM ? 320 : 400;
  }

  get document(): Document {
    return this.props.document;
  }

  get window(): Window {
    return this.props.window;
  }

  getModals() {
    return React.Children.toArray(this.props.children) as React.ReactElement[];
  }

  initModalsState() {
    this.modalsState = this.getModals().reduce<ModalsState>((acc, Modal) => {
      const modalProps = Modal.props;
      const state: ModalsStateEntry = {
        id: getNavId(modalProps, warn),
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

  componentDidMount() {
    this.initActiveModal();
  }

  componentWillUnmount() {
    this.toggleDocumentScrolling(true);
    if (this.props.platform === IOS) {
      this.window.removeEventListener('resize', this.updateModalTranslate, false);
    }
  }

  componentDidUpdate(prevProps: ModalRootProps, prevState: ModalRootState) {
    // transition phase 1: map state to props, render activeModal for init
    if (this.props.activeModal !== prevProps.activeModal) {
      const nextModal = this.props.activeModal;
      // preserve exiting modal if switching mid-transition
      const prevModal = prevState.exitingModal || prevState.activeModal;

      if (IS_DEV && nextModal !== null && !this.modalsState[nextModal]) {
        return warn(`[componentDidUpdate] nextModal ${nextModal} not found`);
      }

      let history = [...this.state.history];
      const isBack = history.includes(nextModal);

      if (nextModal === null) {
        history = [];
      } else if (isBack) {
        history = history.splice(0, history.indexOf(nextModal) + 1);
      } else {
        history.push(nextModal);
      }

      this.setState({
        activeModal: nextModal,
        // not entering yet
        exitingModal: prevModal,
        history,
        isBack,
      });
    }

    // transition phase 2: animate exiting modal
    if (this.state.exitingModal && this.state.exitingModal !== prevState.exitingModal) {
      this.closeModal(this.state.exitingModal);
    }

    // transition phase 2: read activeModal data & set enteringModal
    if (this.state.activeModal !== prevState.activeModal) {
      this.initActiveModal();
    }

    // transition phase 3: animate entering modal
    if (this.state.enteringModal) {
      const { enteringModal } = this.state;
      const prevEnteringState = this.modalsState[prevState.enteringModal];
      const enteringState = this.modalsState[enteringModal];
      const prevCanEnter = prevState.enteringModal && (!prevState.exitingModal || prevEnteringState?.type === ModalType.PAGE);
      const canEnter = !this.state.exitingModal || enteringState?.type === ModalType.PAGE;
      if (canEnter && !prevCanEnter) {
        this.waitTransitionFinish(enteringState, () => {
          // maybe we've changed mid-transition
          this.state.enteringModal === enteringModal && this.setState({ enteringModal: null });
        });
        this.animateTranslate(enteringState, enteringState.translateY);
      }
    }

    // focus restoration
    if (this.props.activeModal && !prevProps.activeModal) {
      this.restoreFocusTo = this.document.activeElement as HTMLElement;
    }
    if (!this.state.activeModal && !this.state.exitingModal && this.restoreFocusTo) {
      this.restoreFocusTo.focus();
      this.restoreFocusTo = null;
    }

    this.toggleDocumentScrolling(!this.state.activeModal && !this.state.exitingModal);
  }

  /* Отключает скролл документа */
  toggleDocumentScrolling(enabled: boolean) {
    if (this.documentScrolling === enabled) {
      return;
    }
    this.documentScrolling = enabled;

    if (enabled) {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
      this.window.removeEventListener('touchmove', this.preventTouch, { passive: false });
    } else {
      this.window.addEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }

  preventTouch = (event: any) => {
    if (!event) {
      return false;
    }
    while (event.originalEvent) {
      event = event.originalEvent;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    return false;
  };

  /**
   * Инициализирует модалку перед анимацией открытия
   */
  initActiveModal() {
    const { activeModal } = this.state;
    const modalState = this.modalsState[activeModal];

    if (!modalState) {
      return;
    }

    // Отслеживаем изменение размеров viewport (Необходимо для iOS)
    if (this.props.platform === IOS) {
      this.window.addEventListener('resize', this.updateModalTranslate, false);
    }

    switch (modalState.type) {
      case ModalType.PAGE:
        modalState.settlingHeight = modalState.settlingHeight || MODAL_PAGE_DEFAULT_PERCENT_HEIGHT;
        this.initPageModal(modalState);
        break;

      case ModalType.CARD:
        this.initCardModal(modalState);
        break;

      default:
        if (IS_DEV) {
          warn('[initActiveModal] modalState.type is unknown');
        }
    }

    this.setState({ enteringModal: activeModal });
  }

  updateModalTranslate = () => {
    const modalState = this.modalsState[this.state.activeModal];
    modalState && this.animateTranslate(modalState, modalState.translateY);
  };

  initPageModal(modalState: ModalsStateEntry) {
    const { contentElement } = modalState;
    const contentHeight = (contentElement.firstElementChild as HTMLElement).offsetHeight;

    let prevTranslateY = modalState.translateY;

    modalState.expandable = contentHeight > contentElement.clientHeight || modalState.settlingHeight === 100;

    let collapsed = false;
    let expanded = false;
    let translateYFrom;
    let translateY;
    let expandedRange: TranslateRange;
    let collapsedRange: TranslateRange;
    let hiddenRange: TranslateRange;

    if (modalState.expandable) {
      translateYFrom = 100 - modalState.settlingHeight;

      const shiftHalf = translateYFrom / 2;
      const visiblePart = 100 - translateYFrom;

      expandedRange = [0, shiftHalf];
      collapsedRange = [shiftHalf, translateYFrom + visiblePart / 4];
      hiddenRange = [translateYFrom + visiblePart / 4, 100];

      collapsed = translateYFrom > 0;
      expanded = translateYFrom <= 0;
      translateY = translateYFrom;
    } else {
      const headerHeight = modalState.headerElement.offsetHeight;
      const height = contentHeight + headerHeight;

      translateYFrom = 100 - height / modalState.innerElement.parentElement.offsetHeight * 100;
      translateY = translateYFrom;

      expandedRange = [translateY, translateY + 25];
      collapsedRange = [translateY + 25, translateY + 25];
      hiddenRange = [translateY + 25, translateY + 100];
    }

    // Если модалка может открываться на весь экран, и новый сдвиг больше предыдущего, то откроем её на весь экран
    if (modalState.expandable && translateY > prevTranslateY || modalState.settlingHeight === 100) {
      translateY = 0;
    }

    modalState.expandedRange = expandedRange;
    modalState.collapsedRange = collapsedRange;
    modalState.hiddenRange = hiddenRange;
    modalState.translateY = translateY;
    modalState.translateYFrom = translateYFrom;
    modalState.collapsed = collapsed;
    modalState.expanded = expanded;
  }

  initCardModal(modalState: ModalsStateEntry) {
    modalState.translateY = 0;
  }

  checkPageContentHeight() {
    const modalState = this.modalsState[this.state.activeModal];

    if (modalState?.type === ModalType.PAGE && modalState?.modalElement) {
      const prevModalState = { ...modalState };
      this.initPageModal(modalState);
      const currentModalState = { ...modalState };

      let needAnimate = false;

      if (prevModalState.expandable === currentModalState.expandable) {
        if (prevModalState.translateYFrom !== currentModalState.translateYFrom) {
          needAnimate = true;
        }
      } else {
        needAnimate = true;
      }

      if (needAnimate) {
        this.animateTranslate(modalState, modalState.translateY);
      }
    }
  }

  updateModalHeight = () => {
    const modalState = this.modalsState[this.state.activeModal];

    if (modalState && modalState.type === ModalType.PAGE && modalState.dynamicContentHeight) {
      if (this.state.enteringModal) {
        this.waitTransitionFinish(modalState, () => {
          requestAnimationFrame(() => this.checkPageContentHeight());
        });
      } else {
        requestAnimationFrame(() => this.checkPageContentHeight());
      }
    }
  };

  closeModal(id: string) {
    // Сбрасываем состояния, которые могут помешать закрытию модального окна
    this.setState({ touchDown: false });

    if (this.props.platform === IOS) {
      this.window.removeEventListener('resize', this.updateModalTranslate, false);
    }

    const prevModalState = this.modalsState[id];

    if (!prevModalState) {
      id && warn(`[closeActiveModal] Modal ${id} does not exist - not closing`);
      return;
    }

    const nextModalState = this.modalsState[this.state.activeModal];
    const nextIsPage = !!nextModalState && nextModalState.type === ModalType.PAGE;

    const prevIsPage = !!prevModalState && prevModalState.type === ModalType.PAGE;
    this.waitTransitionFinish(prevModalState, () => {
      // do nothing if exitingModal has changed
      this.state.exitingModal === id && this.setState({ exitingModal: null });
    });
    const exitTranslate = prevIsPage && nextIsPage && prevModalState.translateY <= nextModalState.translateYFrom && !this.state.isBack
      ? nextModalState.translateYFrom + 10
      : 100;
    this.animateTranslate(prevModalState, exitTranslate);

    if (!nextModalState) {
      // NOTE: was only for clean exit
      this.setMaskOpacity(prevModalState, 0);
    }
  }

  onTouchMove = (e: TouchEvent) => {
    if (this.state.exitingModal) {
      return;
    }
    const modalState = this.modalsState[this.state.activeModal];
    if (!modalState) {
      return;
    }

    if (modalState.type === ModalType.PAGE) {
      return this.onPageTouchMove(e, modalState);
    }

    if (modalState.type === ModalType.CARD) {
      return this.onCardTouchMove(e, modalState);
    }
  };

  onPageTouchMove(event: TouchEvent, modalState: ModalsStateEntry) {
    const { shiftY, originalEvent } = event;
    const target = originalEvent.target as HTMLElement;

    if (!event.isY) {
      if (this.viewportRef.current.contains(target)) {
        originalEvent.preventDefault();
      }
      return;
    }

    if (!modalState.innerElement.contains(target)) {
      return originalEvent.preventDefault();
    }

    originalEvent.stopPropagation();

    const { expandable, contentScrolled, collapsed, expanded } = modalState;

    if (!this.state.touchDown) {
      modalState.touchStartContentScrollTop = modalState.contentElement.scrollTop;
      this.setState({ touchDown: true });
    }

    if (contentScrolled) {
      return;
    }

    if (modalState.touchMovePositive === null) {
      modalState.touchMovePositive = shiftY > 0;
    }

    if (
      !modalState.expandable ||
      collapsed ||
      expanded && modalState.touchMovePositive && modalState.touchStartContentScrollTop === 0 ||
      modalState.headerElement.contains(target)
    ) {
      originalEvent.preventDefault();

      if (!expandable && shiftY < 0) {
        return;
      }

      !this.state.dragging && this.setState({ dragging: true });

      const shiftYPercent = shiftY / this.window.innerHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 0.8, this.props.platform === ANDROID || this.props.platform === VKCOM);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = rangeTranslate(modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onCardTouchMove(event: TouchEvent, modalState: ModalsStateEntry) {
    const { originalEvent, shiftY } = event;
    const target = originalEvent.target as HTMLElement;
    if (modalState.innerElement.contains(target)) {
      if (!this.state.touchDown) {
        this.setState({ touchDown: true, dragging: true });
      }

      const shiftYPercent = shiftY / modalState.innerElement.offsetHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 1.2, this.props.platform === ANDROID || this.props.platform === VKCOM);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = Math.max(0, modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onTouchEnd = (e: TouchEvent) => {
    const modalState = this.modalsState[this.state.activeModal];

    if (modalState.type === ModalType.PAGE) {
      return this.onPageTouchEnd(e, modalState);
    }

    if (modalState.type === ModalType.CARD) {
      return this.onCardTouchEnd(e, modalState);
    }
  };

  onPageTouchEnd(event: TouchEvent, modalState: ModalsStateEntry) {
    const { startY, shiftY } = event;

    modalState.contentScrolled = false;
    modalState.touchMovePositive = null;

    let setStateCallback;

    if (this.state.dragging) {
      const shiftYEndPercent = (startY + shiftY) / this.window.innerHeight * 100;

      let translateY = modalState.translateYCurrent;
      const expectTranslateY = translateY / event.duration * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
      translateY = rangeTranslate(translateY + expectTranslateY);

      if (modalState.settlingHeight !== 100) {
        if (numberInRange(translateY, modalState.expandedRange)) {
          translateY = modalState.expandedRange[0];
        } else if (numberInRange(translateY, modalState.collapsedRange)) {
          translateY = modalState.translateYFrom;
        } else if (numberInRange(translateY, modalState.hiddenRange)) {
          translateY = 100;
        } else {
          translateY = modalState.translateYFrom;
        }
      } else {
        if (numberInRange(translateY, [0, 25])) {
          translateY = 0;
        } else {
          translateY = 100;
        }
      }

      if (translateY !== 100 && shiftYEndPercent >= 75) {
        translateY = 100;
      }

      modalState.translateY = translateY;
      modalState.translateYCurrent = translateY;
      modalState.collapsed = translateY > 0 && translateY < shiftYEndPercent;
      modalState.expanded = translateY === 0;
      modalState.hidden = translateY === 100;

      if (modalState.hidden) {
        this.doCloseModal(modalState);
      }

      setStateCallback = () => {
        if (!modalState.hidden) {
          this.animateTranslate(modalState, modalState.translateY);
        }

        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false,
    }, setStateCallback);
  }

  onCardTouchEnd({ duration }: TouchEvent, modalState: ModalsStateEntry) {
    let setStateCallback;

    if (this.state.dragging) {
      let translateY = modalState.translateYCurrent;

      const expectTranslateY = translateY / duration * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
      translateY = Math.max(0, translateY + expectTranslateY);

      if (translateY >= 30) {
        translateY = 100;
      } else {
        translateY = 0;
      }

      modalState.translateY = translateY;
      modalState.hidden = translateY === 100;

      if (modalState.hidden) {
        this.doCloseModal(modalState);
      }

      setStateCallback = () => {
        if (!modalState.hidden) {
          this.animateTranslate(modalState, modalState.translateY);
        }

        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false,
    }, setStateCallback);
  }

  onScroll = (e: React.SyntheticEvent) => {
    const activeModal = this.state.activeModal;

    const target = e.target as HTMLElement;

    if (!activeModal) {
      return;
    }
    const modalState = this.modalsState[activeModal];
    if (modalState.type === ModalType.PAGE && modalState.contentElement.contains(target)) {
      modalState.contentScrolled = true;

      clearTimeout(modalState.contentScrollStopTimeout);

      modalState.contentScrollStopTimeout = setTimeout(() => {
        if (modalState.contentScrolled) {
          modalState.contentScrolled = false;
        }
      }, 250);
    }
  };

  waitTransitionFinish(modalState: ModalsStateEntry, eventHandler: () => void) {
    if (transitionEvent.supported) {
      const onceHandler = () => {
        modalState.innerElement.removeEventListener(transitionEvent.name, onceHandler);
        eventHandler();
      };

      modalState.innerElement.addEventListener(transitionEvent.name, onceHandler);
    } else {
      setTimeout(eventHandler, this.timeout);
    }
  }

  /**
   * Анимирует сдвиг модалки
   *
   * @param {ModalsStateEntry} modalState
   * @param {number} percent Процент сдвига: 0 – полностью открыта, 100 – полностью закрыта
   */
  animateTranslate(modalState: ModalsStateEntry, percent: number) {
    const frameId = `animateTranslateFrame${modalState.id}`;

    cancelAnimationFrame(this.frameIds[frameId]);

    this.frameIds[frameId] = requestAnimationFrame(() => {
      setTransformStyle(modalState.innerElement, `translate3d(0, ${percent}%, 0)`);
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
  triggerActiveModalClose = () => {
    const activeModalState = this.modalsState[this.state.activeModal];
    if (activeModalState) {
      this.doCloseModal(activeModalState);
    }
  };

  private readonly doCloseModal = (modalState: ModalsStateEntry) => {
    // Сбрасываем состояния, которые могут помешать закрытию модального окна
    this.setState({ touchDown: false });

    if (isFunction(modalState.onClose)) {
      modalState.onClose();
    } else if (isFunction(this.props.onClose)) {
      this.props.onClose(modalState.id);
    } else if (IS_DEV) {
      warn('onClose is undefined');
    }
  };

  render() {
    const { activeModal, exitingModal, enteringModal, touchDown, dragging } = this.state;

    if (!activeModal && !exitingModal) {
      return null;
    }

    return (
      <TouchRootContext.Provider value={true}>
        <ModalRootContext.Provider value={this.modalRootContext}>
          <Touch
            vkuiClass={classNames(getClassName('ModalRoot', this.props.platform), {
              'ModalRoot--vkapps': this.props.configProvider.webviewType === WebviewType.VKAPPS,
              'ModalRoot--touched': touchDown,
              'ModalRoot--switching': !!(enteringModal || exitingModal),
            })}
            onMove={this.onTouchMove}
            onEnd={this.onTouchEnd}
            onScroll={this.onScroll}
          >
            <div
              vkuiClass="ModalRoot__mask"
              onClick={this.triggerActiveModalClose}
              ref={this.maskElementRef}
            />
            <div vkuiClass="ModalRoot__viewport" ref={this.viewportRef}>
              {this.getModals().map((Modal) => {
                const modalId = getNavId(Modal.props, warn);
                if (modalId !== activeModal && modalId !== exitingModal) {
                  return null;
                }
                const modalState = { ...this.modalsState[modalId] };

                const isPage = modalState.type === ModalType.PAGE;
                const key = `modal-${modalId}`;

                return (
                  <FocusTrap
                    key={key}
                    getRootRef={(e) => this.modalsState[modalId].modalElement = e}
                    onClose={this.triggerActiveModalClose}
                    timeout={this.timeout}
                    vkuiClass={classNames('ModalRoot__modal', {
                      'ModalRoot__modal--active': modalId === activeModal,
                      'ModalRoot__modal--prev': modalId === exitingModal,
                      'ModalRoot__modal--next': exitingModal && modalId === activeModal || modalId === enteringModal,

                      'ModalRoot__modal--dragging': dragging,

                      'ModalRoot__modal--expandable': isPage && modalState.expandable,
                      'ModalRoot__modal--expanded': isPage && modalState.expanded,
                      'ModalRoot__modal--collapsed': isPage && modalState.collapsed,
                    })}
                    restoreFocus={false}
                  >{Modal}</FocusTrap>
                );
              })}
            </div>
          </Touch>
        </ModalRootContext.Provider>
      </TouchRootContext.Provider>
    );
  }
}

export const ModalRootTouch = withContext(withPlatform(withDOM<ModalRootProps>(ModalRootTouchComponent)), ConfigProviderContext, 'configProvider');
