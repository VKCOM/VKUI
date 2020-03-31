import React, { Component, ReactElement, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import Touch, { TouchEvent } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { setTransformStyle } from '../../lib/styles';
import { rubber } from '../../lib/touch';
import { isFunction } from '../../lib/utils';
import { ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import ModalRootContext, { ModalRootContextInterface } from './ModalRootContext';
import { WebviewType } from '../ConfigProvider/ConfigProviderContext';

export const TYPE_CARD = 'modal-card';
export const TYPE_PAGE = 'modal-page';

function numberInRange(number: number, range: number[]) {
  return number >= range[0] && number <= range[1];
}

function rangeTranslate(number: number) {
  return Math.max(0, Math.min(98, number));
}

export interface ModalsStateEntry {
  id: string;
  onClose?: () => {};
  type?: 'modal-card' | 'modal-page';

  settlingHeight?: number;
  dynamicContentHeight?: boolean;
  expandable?: boolean;

  modalElement?: HTMLElement;
  innerElement?: HTMLElement;
  headerElement?: HTMLElement;
  contentElement?: HTMLElement;
  footerElement?: HTMLElement;

  translateY?: number;
  translateYFrom?: number;
  translateYCurrent?: number;
  touchStartTime?: Date;
  touchStartContentScrollTop?: number;
  touchMovePositive?: boolean | null;
  touchShiftYPercent?: number;
  expanded?: boolean;
  collapsed?: boolean;
  hidden?: boolean;
  contentScrolled?: boolean;
  expandedRange?: [number, number];
  collapsedRange?: [number, number];
  hiddenRange?: [number, number];
  contentScrollStopTimeout?: number;
}

export interface ModalRootProps extends HasChildren, HasPlatform {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

export interface ModalRootState {
  activeModal?: string;
  prevModal?: string;
  nextModal?: string;
  visibleModals?: string[];
  animated?: boolean;
  switching?: boolean;
  history?: string[];
  isBack?: boolean;
  inited?: boolean;
  touchDown?: boolean;
  dragging?: boolean;
}

class ModalRoot extends Component<ModalRootProps, ModalRootState> {
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
      touchDown: false,
      dragging: false,
    };

    this.activeTransitions = 0;
    this.maskElementRef = React.createRef();

    this.initModalsState();

    this.modalRootContext = {
      updateModalHeight: this.updateModalHeight,
    };

    this.frameIds = {};
  }

  private modalsState: { [id: string]: ModalsStateEntry };
  private documentScrolling: boolean;
  private activeTransitions: number;
  private readonly maskElementRef: React.RefObject<HTMLDivElement>;
  private maskAnimationFrame: number;
  private readonly modalRootContext: ModalRootContextInterface;
  private readonly frameIds: {
    [index: string]: number;
  };

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

  componentDidMount() {
    this.initActiveModal();
  }

  componentWillUnmount() {
    this.toggleDocumentScrolling(true);
  }

  componentDidUpdate(prevProps: ModalRootProps, prevState: ModalRootState) {
    if (this.props.activeModal !== prevProps.activeModal && !this.state.switching) {
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

    if (!this.state.activeModal && !this.state.prevModal && !this.state.nextModal) {
      this.toggleDocumentScrolling(true);
    } else {
      this.toggleDocumentScrolling(false);
    }
  }

  blurActiveElement() {
    if (typeof this.window !== 'undefined' && this.document.activeElement instanceof HTMLElement) {
      this.document.activeElement.blur();
    }
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
      modalState.type = TYPE_PAGE;
    } else if (modalElement.querySelector('.ModalCard')) {
      modalState.type = TYPE_CARD;
    }

    switch (modalState.type) {
      case TYPE_PAGE:
        modalState.settlingHeight = modalState.settlingHeight || 75;
        this.initPageModal(modalState, modalElement);
        break;

      case TYPE_CARD:
        this.initCardModal(modalState, modalElement);
        break;

      default:
        console.warn('[ModalRoot.initActiveModal] modalState.type is unknown');
    }

    this.setState({ inited: true, switching: true });
  }

  initPageModal(modalState: ModalsStateEntry, modalElement: HTMLElement) {
    const contentElement: HTMLElement = modalElement.querySelector('.ModalPage__content');
    const contentHeight = (contentElement.firstElementChild as HTMLElement).offsetHeight;

    let prevTranslateY = modalState.translateY;

    modalState.expandable = contentHeight > contentElement.clientHeight;

    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
    modalState.headerElement = modalElement.querySelector('.ModalPage__header');
    modalState.contentElement = modalElement.querySelector('.ModalPage__content');
    modalState.footerElement = modalElement.querySelector('.ModalPage__footer');

    let collapsed = false;
    let expanded = false;
    let translateYFrom;
    let translateY;
    let expandedRange: [number, number];
    let collapsedRange: [number, number];
    let hiddenRange: [number, number];

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
    if (modalState.expandable && translateY > prevTranslateY) {
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

  initCardModal(modalState: ModalsStateEntry, modalElement: HTMLElement) {
    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalCard__in');

    modalState.translateY = 0;
  }

  checkPageContentHeight() {
    const activeModal = this.state.activeModal;

    const modalElement = this.pickModal(activeModal);
    if (modalElement) {
      const modalState = this.modalsState[activeModal];

      const prevModalState = { ...modalState };
      this.initPageModal(modalState, modalElement);
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
        this.animateTranslate(modalState);
        this.animatePageHeader(modalState);
      }
    }
  }

  updateModalHeight = () => {
    const { activeModal, nextModal } = this.state;

    const modalId = activeModal || nextModal;
    const modalState = modalId ? this.modalsState[modalId] : undefined;

    if (modalState && modalState.type === TYPE_PAGE && modalState.dynamicContentHeight) {
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
    this.animateTranslate(prevModalState, 100);
    this.setMaskOpacity(prevModalState, 0);
  }

  onTouchMove = (e: TouchEvent) => {
    if (this.state.switching) {
      return;
    }
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) {
      return;
    }

    const modalState = this.modalsState[activeModal];

    if (modalState.type === TYPE_PAGE) {
      return this.onPageTouchMove(e, modalState);
    }

    if (modalState.type === TYPE_CARD) {
      return this.onCardTouchMove(e, modalState);
    }
  };

  onPageTouchMove(event: TouchEvent, modalState: ModalsStateEntry) {
    const { shiftY, startT, originalEvent } = event;

    const target = originalEvent.target as HTMLElement;

    if (!event.isY) {
      if (target.closest('.ModalPage')) {
        originalEvent.preventDefault();
      }
      return;
    }

    if (!target.closest('.ModalPage__in')) {
      return originalEvent.preventDefault();
    }

    originalEvent.stopPropagation();

    const { expandable, contentScrolled, collapsed, expanded } = modalState;

    if (!this.state.touchDown) {
      modalState.touchStartTime = startT;
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
      target.closest('.ModalPage__header')
    ) {
      originalEvent.preventDefault();
      if (!expandable && shiftY < 0) {
        return;
      }

      !this.state.dragging && this.setState({ dragging: true });

      const shiftYPercent = shiftY / this.window.innerHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 0.8, this.props.platform === ANDROID);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = rangeTranslate(modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onCardTouchMove(event: TouchEvent, modalState: ModalsStateEntry) {
    const { originalEvent, shiftY, startT } = event;
    const target = originalEvent.target as HTMLElement;
    if (target.closest('.ModalCard__container')) {
      if (!this.state.touchDown) {
        modalState.touchStartTime = startT;
        this.setState({ touchDown: true, dragging: true });
      }

      const shiftYPercent = shiftY / modalState.innerElement.offsetHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 1.2, this.props.platform === ANDROID);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = Math.max(0, modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onTouchEnd = (e: TouchEvent) => {
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) {
      return;
    }
    const modalState = this.modalsState[activeModal];

    if (modalState.type === TYPE_PAGE) {
      return this.onPageTouchEnd(e, modalState);
    }

    if (modalState.type === TYPE_CARD) {
      return this.onCardTouchEnd(modalState);
    }
  };

  onPageTouchEnd(event: TouchEvent, modalState: ModalsStateEntry) {
    const { startY, shiftY } = event;

    modalState.contentScrolled = false;
    modalState.touchMovePositive = null;

    let next;

    if (this.state.dragging) {
      const shiftYEndPercent = (startY + shiftY) / this.window.innerHeight * 100;

      let translateY = modalState.translateYCurrent;
      const expectTranslateY = translateY / (Date.now() - modalState.touchStartTime.getTime()) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
      translateY = rangeTranslate(translateY + expectTranslateY);

      if (numberInRange(translateY, modalState.expandedRange)) {
        translateY = modalState.expandedRange[0];
      } else if (numberInRange(translateY, modalState.collapsedRange)) {
        translateY = modalState.translateYFrom;
      } else if (numberInRange(translateY, modalState.hiddenRange)) {
        translateY = 100;
      } else {
        translateY = modalState.translateYFrom;
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

      next = () => {
        !modalState.hidden && this.animateTranslate(modalState);
        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false,
    }, next);
  }

  onCardTouchEnd(modalState: ModalsStateEntry) {
    let next;

    if (this.state.dragging) {
      let translateY = modalState.translateYCurrent;

      const expectTranslateY = translateY / (Date.now() - modalState.touchStartTime.getTime()) * 240 * 0.6 * (modalState.touchShiftYPercent < 0 ? -1 : 1);
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

      next = () => {
        !modalState.hidden && this.animateTranslate(modalState);
        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false,
    }, next);
  }

  onScroll = (e: SyntheticEvent) => {
    const activeModal = this.state.activeModal;

    const target = e.target as HTMLElement;

    if (activeModal && target.closest('.ModalPage__content')) {
      const modalState = this.modalsState[activeModal];
      modalState.contentScrolled = true;

      clearTimeout(modalState.contentScrollStopTimeout);

      modalState.contentScrollStopTimeout = window.setTimeout(() => {
        if (modalState.contentScrolled) {
          modalState.contentScrolled = false;
        }
      }, 250);
    }
  };

  waitTransitionFinish(modalState: ModalsStateEntry, eventHandler: () => void) {
    const eventName = transitionEvents.transitionEndEventName;

    const onceHandler = () => {
      modalState.innerElement.removeEventListener(eventName, onceHandler);
      eventHandler();
    };

    modalState.innerElement.addEventListener(eventName, onceHandler);
  }

  switchPrevNext() {
    const { prevModal, nextModal } = this.state;

    const prevModalState = this.modalsState[prevModal];
    const nextModalState = this.modalsState[nextModal];

    if (!prevModalState && !nextModalState) {
      return console.warn(`[ModalRoot.switchPrevNext] prevModal is ${prevModal}, nextModal is ${nextModal}`);
    }

    const prevIsPage = !!prevModalState && prevModalState.type === TYPE_PAGE;
    const prevIsCard = !!prevModalState && prevModalState.type === TYPE_CARD;

    const nextIsPage = !!nextModalState && nextModalState.type === TYPE_PAGE;
    const nextIsCard = !!nextModalState && nextModalState.type === TYPE_CARD;

    // Ждём полного скрытия предыдущей модалки
    if (prevModalState && (nextIsCard || prevIsCard && nextIsPage)) {
      this.waitTransitionFinish(prevModalState, () => {
        this.activeTransitions += 1;
        this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
        this.animateTranslate(nextModalState);
      });

      return this.animateTranslate(prevModalState, 100);
    }

    if (prevModalState && nextIsPage) {
      this.activeTransitions += 1;
      this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);

      if (prevIsPage && prevModalState.translateY <= nextModalState.translateYFrom && !this.state.isBack) {
        this.animateTranslate(prevModalState, nextModalState.translateYFrom + 10);
      } else {
        this.animateTranslate(prevModalState, 100);
      }
    }

    this.activeTransitions += 1;
    this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler);
    this.animateTranslate(nextModalState);
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
  animateTranslate(modalState: ModalsStateEntry, currentPercent: number = null) {
    if (currentPercent === null) {
      currentPercent = modalState.translateY;
    }

    const frameId = `animateTranslateFrame${modalState.id}`;

    cancelAnimationFrame(this.frameIds[frameId]);

    this.frameIds[frameId] = requestAnimationFrame(() => {
      setTransformStyle(modalState.innerElement, `translateY(${currentPercent}%)`);

      if (modalState.type === TYPE_PAGE && modalState.footerElement) {
        const footerHeight = modalState.footerElement.offsetHeight;
        const factor = modalState.innerElement.offsetHeight * (currentPercent / 100);

        setTransformStyle(modalState.footerElement, `translateY(calc(${footerHeight}px * -${factor / footerHeight}))`);
      }
    });

    if (modalState.type === TYPE_PAGE && modalState.expandable) {
      this.animatePageHeader(modalState, currentPercent);
    }
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
    if (!this.state.switching) {
      this.triggerActiveModalClose();
    }
  };

  render() {
    const { prevModal, activeModal, nextModal, visibleModals, animated, touchDown, dragging, switching } = this.state;

    if (!activeModal && !prevModal && !nextModal && !animated) {
      return null;
    }

    return (
      <TouchRootContext.Provider value={true}>
        <ModalRootContext.Provider value={this.modalRootContext}>
          <Touch
            className={classNames(getClassName('ModalRoot', this.props.platform), {
              'ModalRoot--vkapps': this.webviewType === 'vkapps',
              'ModalRoot--touched': touchDown,
              'ModalRoot--switching': switching,
            })}
            onMove={this.onTouchMove}
            onEnd={this.onTouchEnd}
            onScroll={this.onScroll}
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
                const modalState = { ...this.modalsState[modalId] };

                const isPage = modalState.type === TYPE_PAGE;
                const key = `modal-${modalId}`;

                return (
                  <div
                    key={key}
                    id={key}
                    className={classNames('ModalRoot__modal', {
                      'ModalRoot__modal--active': modalId === activeModal,
                      'ModalRoot__modal--prev': modalId === prevModal,
                      'ModalRoot__modal--next': modalId === nextModal,

                      'ModalRoot__modal--dragging': dragging,

                      'ModalRoot__modal--expandable': isPage && modalState.expandable,
                      'ModalRoot__modal--expanded': isPage && modalState.expanded,
                      'ModalRoot__modal--collapsed': isPage && modalState.collapsed,
                    })}
                  >{Modal}</div>
                );
              })}
            </div>
          </Touch>
        </ModalRootContext.Provider>
      </TouchRootContext.Provider>
    );
  }
}

export default withPlatform(ModalRoot);
