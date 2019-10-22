import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch, { TouchRootContext } from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { setTransformStyle } from '../../lib/styles';
import { rubber } from '../../lib/touch';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import { HasChildren, HasPlatform } from '../../types/props';
import withPlatform from '../../hoc/withPlatform';

export const TYPE_CARD = 'modal-card';
export const TYPE_PAGE = 'modal-page';

function numberInRange (number, range) {
  return number >= range[0] && number <= range[1];
}

function rangeTranslate (number) {
  return Math.max(0, Math.min(98, number));
}

export interface ModalsStateEntry {
  id: string;
  onClose: () => {};
  type?: 'modal-card' | 'modal-page';

  settlingHeight?: number;
  dynamicContentHeight?: boolean;
  expandable?: boolean;

  modalElement?: HTMLDivElement;
  innerElement?: HTMLDivElement;
  headerElement?: HTMLDivElement;
  contentElement?: HTMLDivElement;
  footerElement?: HTMLDivElement;

  translateY?: number;
  translateYFrom?: number;
  translateYCurrent?: number;
  touchStartTime?: number;
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
  activeModal?: string;

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
  constructor (props) {
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
      dragging: false
    };

    this.activeTransitions = 0;
    this.maskElementRef = React.createRef();

    this.initModalsState();
  }

  private modalsState: { [id: string]: ModalsStateEntry };
  private documentScrolling: boolean;
  private activeTransitions: number;
  private maskElementRef: React.RefObject<HTMLDivElement>;
  private maskAnimationFrame: number;

  static propTypes = {
    activeModal: PropTypes.string,
    children: PropTypes.node
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  get document () {
    return this.context.document || document;
  }

  get window () {
    return this.context.window || window;
  }

  get webviewType () {
    return this.context.webviewType || 'vkapps';
  }

  get modals () {
    return [].concat(this.props.children);
  }

  initModalsState () {
    this.modalsState = this.modals.reduce((acc, Modal) => {
      const modalProps = Modal.props;
      const state: ModalsStateEntry = {
        id: Modal.props.id,
        onClose: Modal.props.onClose,
        dynamicContentHeight: !!modalProps.dynamicContentHeight
      };

      // ModalPage props
      if (typeof modalProps.settlingHeight === 'number') {
        state.settlingHeight = modalProps.settlingHeight;
      }

      acc[state.id] = state;
      return acc;
    }, {});
  }

  componentDidMount () {
    this.initActiveModal();
  }

  componentWillUnmount () {
    this.toggleDocumentScrolling(true);
  }

  componentDidUpdate (prevProps, prevState) {
    const { activeModal, switching } = this.state;

    if (activeModal && this.modalsState[activeModal] && !switching && this.props.children !== prevProps.children) {
      const modalState = this.modalsState[activeModal];
      if (modalState && modalState.type === TYPE_PAGE && modalState.dynamicContentHeight) {
        requestAnimationFrame(() => this.checkPageContentHeight());
      }
    }

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
      } else if (history.indexOf(nextModal) !== -1) {
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
        switching: false
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

  blurActiveElement () {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  /**
   * Отключает скролл документа
   */
  toggleDocumentScrolling (enabled: boolean) {
    if (this.documentScrolling === enabled) return;
    this.documentScrolling = enabled;

    if (enabled) {
      this.window.removeEventListener('touchmove', this.preventTouch);
    } else {
      this.window.addEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }

  preventTouch = (event) => {
    if (event) {
      while (event.originalEvent) event = event.originalEvent;
      event.preventDefault();
    }
  };

  pickModal (modalId) {
    return this.document.getElementById('modal-' + modalId);
  }

  /**
   * Инициализирует модалку перед анимацией открытия
   */
  initActiveModal () {
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) return;

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
        console.warn(`[ModalRoot.initActiveModal] modalState.type is unknown`);
    }

    this.setState({ inited: true, switching: true });
  }

  initPageModal (modalState: ModalsStateEntry, modalElement: HTMLDivElement) {
    const contentElement: HTMLElement = modalElement.querySelector('.ModalPage__content');
    const contentHeight = (contentElement.firstElementChild as HTMLElement).offsetHeight;

    modalState.expandable = contentHeight > contentElement.clientHeight;

    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalPage__in-wrap');
    modalState.headerElement = modalElement.querySelector('.ModalPage__header');
    modalState.contentElement = modalElement.querySelector('.ModalPage__content');
    modalState.footerElement = modalElement.querySelector('.ModalPage__footer');

    let collapsed;
    let translateYFrom;
    let translateY;
    let expandedRange;
    let collapsedRange;
    let hiddenRange;

    if (modalState.expandable) {
      translateYFrom = 100 - modalState.settlingHeight;

      const shiftHalf = translateYFrom / 2;
      const visiblePart = 100 - translateYFrom;

      expandedRange = [0, shiftHalf];
      collapsedRange = [shiftHalf, translateYFrom + visiblePart / 4];
      hiddenRange = [translateYFrom + visiblePart / 4, 100];

      collapsed = true;
      translateY = translateYFrom;
    } else {
      const headerHeight = modalState.headerElement.offsetHeight;
      const height = contentHeight + headerHeight;

      translateYFrom = 100 - (height / modalState.innerElement.parentElement.offsetHeight * 100);
      translateY = translateYFrom;

      expandedRange = [translateY, translateY + 25];
      collapsedRange = [translateY + 25, translateY + 25];
      hiddenRange = [translateY + 25, translateY + 100];

      collapsed = false;
    }

    modalState.expandedRange = expandedRange;
    modalState.collapsedRange = collapsedRange;
    modalState.hiddenRange = hiddenRange;
    modalState.translateY = translateY;
    modalState.translateYFrom = translateYFrom;
    modalState.collapsed = collapsed;
  }

  initCardModal (modalState: ModalsStateEntry, modalElement: HTMLDivElement) {
    modalState.modalElement = modalElement;
    modalState.innerElement = modalElement.querySelector('.ModalCard__in');

    modalState.translateY = 0;
  }

  checkPageContentHeight () {
    const activeModal = this.state.activeModal;

    const modalElement = this.pickModal(activeModal);
    if (modalElement) {
      const modalState = this.modalsState[activeModal];

      const prevModalState = { ...modalState };
      this.initPageModal(modalState, modalElement);
      const currentModalState = { ...modalState };

      const diff = Object.keys(currentModalState).reduce((acc, key) => {
        if (prevModalState[key] !== currentModalState[key]) {
          acc[key] = currentModalState[key];
        }

        return acc;
      }, {});

      if (Object.keys(diff).length) {
        this.animateTranslate(modalState);
        this.animatePageHeader(modalState);
      }
    }
  }

  closeActiveModal () {
    const { prevModal } = this.state;
    if (!prevModal) return console.warn(`[ModalRoot.closeActiveModal] prevModal is ${prevModal}`);

    const prevModalState = this.modalsState[prevModal];

    this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler);
    this.animateTranslate(prevModalState, 100);
    this.setMaskOpacity(prevModalState, 0);
  }

  onTouchMove = (e) => {
    if (this.state.switching) return;
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) return;

    const modalState = this.modalsState[activeModal];

    if (modalState.type === TYPE_PAGE) {
      return this.onPageTouchMove(e, modalState);
    }

    if (modalState.type === TYPE_CARD) {
      return this.onCardTouchMove(e, modalState);
    }
  };

  onPageTouchMove (event, modalState: ModalsStateEntry) {
    const { shiftY, startT, originalEvent } = event;

    if (!event.isY) {
      if (originalEvent.target.closest('.ModalPage')) {
        originalEvent.preventDefault();
      }
      return;
    }

    if (!originalEvent.target.closest('.ModalPage__in')) {
      return originalEvent.preventDefault();
    }

    originalEvent.stopPropagation();

    const { expandable, contentScrolled, collapsed, expanded } = modalState;

    if (!this.state.touchDown) {
      modalState.touchStartTime = startT;
      modalState.touchStartContentScrollTop = modalState.contentElement.scrollTop;
      this.setState({ touchDown: true });
    }

    if (contentScrolled) return;

    if (modalState.touchMovePositive === null) {
      modalState.touchMovePositive = shiftY > 0;
    }

    if (
      !modalState.expandable ||
      collapsed ||
      (expanded && modalState.touchMovePositive && (modalState.touchStartContentScrollTop === 0)) ||
      originalEvent.target.closest('.ModalPage__header')
    ) {
      originalEvent.preventDefault();
      if (!expandable && shiftY < 0) return;

      !this.state.dragging && this.setState({ dragging: true });

      const shiftYPercent = shiftY / this.window.innerHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 0.8, IS_PLATFORM_ANDROID);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = rangeTranslate(modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onCardTouchMove (event, modalState: ModalsStateEntry) {
    const { originalEvent, shiftY, startT } = event;
    if (originalEvent.target.closest('.ModalCard__container')) {
      if (!this.state.touchDown) {
        modalState.touchStartTime = startT;
        this.setState({ touchDown: true, dragging: true });
      }

      const shiftYPercent = shiftY / modalState.innerElement.offsetHeight * 100;
      const shiftYCurrent = rubber(shiftYPercent, 72, 1.2, IS_PLATFORM_ANDROID);

      modalState.touchShiftYPercent = shiftYPercent;
      modalState.translateYCurrent = Math.max(0, modalState.translateY + shiftYCurrent);

      this.animateTranslate(modalState, modalState.translateYCurrent);
      this.setMaskOpacity(modalState);
    }
  }

  onTouchEnd = (e) => {
    const activeModal = this.state.activeModal || this.state.nextModal;
    if (!activeModal) return;
    const modalState = this.modalsState[activeModal];

    if (modalState.type === TYPE_PAGE) {
      return this.onPageTouchEnd(e, modalState);
    }

    if (modalState.type === TYPE_CARD) {
      return this.onCardTouchEnd(modalState);
    }
  };

  onPageTouchEnd (event, modalState: ModalsStateEntry) {
    const { startY, shiftY } = event;

    modalState.contentScrolled = false;
    modalState.touchMovePositive = null;

    let next;

    if (this.state.dragging) {
      const shiftYEndPercent = (startY + shiftY) / this.window.innerHeight * 100;

      let translateY = modalState.translateYCurrent;
      const expectTranslateY = (translateY / (Date.now() - modalState.touchStartTime) * 240 * 0.6) * (modalState.touchShiftYPercent < 0 ? -1 : 1);
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
        modalState.onClose();
      }

      next = () => {
        !modalState.hidden && this.animateTranslate(modalState);
        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false
    }, next);
  }

  onCardTouchEnd (modalState: ModalsStateEntry) {
    let next;

    if (this.state.dragging) {
      let translateY = modalState.translateYCurrent;

      const expectTranslateY = (translateY / (Date.now() - modalState.touchStartTime) * 240 * 0.6) * (modalState.touchShiftYPercent < 0 ? -1 : 1);
      translateY = Math.max(0, translateY + expectTranslateY);

      if (translateY >= 30) {
        translateY = 100;
      } else {
        translateY = 0;
      }

      modalState.translateY = translateY;
      modalState.hidden = translateY === 100;

      if (modalState.hidden) {
        modalState.onClose();
      }

      next = () => {
        !modalState.hidden && this.animateTranslate(modalState);
        this.setMaskOpacity(modalState);
      };
    }

    this.setState({
      touchDown: false,
      dragging: false
    }, next);
  }

  onScroll = (e) => {
    const activeModal = this.state.activeModal;

    if (activeModal && e.target.closest('.ModalPage__content')) {
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

  waitTransitionFinish (modalState: ModalsStateEntry, eventHandler: () => void) {
    const eventName = transitionEvents.transitionEndEventName;

    const onceHandler = () => {
      modalState.innerElement.removeEventListener(eventName, onceHandler);
      eventHandler();
    };

    modalState.innerElement.addEventListener(eventName, onceHandler);
  }

  switchPrevNext () {
    const { prevModal, nextModal } = this.state;

    const prevModalState = this.modalsState[prevModal];
    const nextModalState = this.modalsState[nextModal];

    if (!prevModalState && !nextModalState) {
      return console.warn(`[ModalRoot.switchPrevNext] prevModal is ${prevModal}, nextModal is ${nextModal}`);
    }

    const prevIsPage = !!prevModalState && (prevModalState.type === TYPE_PAGE);
    const prevIsCard = !!prevModalState && (prevModalState.type === TYPE_CARD);

    const nextIsPage = !!nextModalState && (nextModalState.type === TYPE_PAGE);
    const nextIsCard = !!nextModalState && (nextModalState.type === TYPE_CARD);

    // Ждём полного скрытия предыдущей модалки
    if (prevModalState && (nextIsCard || (prevIsCard && nextIsPage))) {
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
    if (this.activeTransitions > 0) return;

    const activeModal = this.state.nextModal;

    const newState: ModalRootState = {
      prevModal: null,
      nextModal: null,
      visibleModals: [activeModal],
      activeModal: activeModal,
      animated: false,
      switching: false
    };

    if (!activeModal) {
      newState.history = [];
    }

    this.setState(newState);
  };

  /**
   * Анимирует сдивг модалки
   */
  animateTranslate (modalState: ModalsStateEntry, currentPercent: number = null) {
    if (currentPercent === null) {
      currentPercent = modalState.translateY;
    }

    const frameId = `animateTranslateFrame${modalState.id}`;

    cancelAnimationFrame(this[frameId]);
    this[frameId] = requestAnimationFrame(() => {
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

  /**
   * Анимирует тень шапки
   */
  animatePageHeader (modalState: ModalsStateEntry, currentPercent: number = null) {
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

  /**
   * Устанавливает прозрачность для полупрозрачной подложки
   */
  setMaskOpacity (modalState: ModalsStateEntry, forceOpacity: number = null) {
    if (forceOpacity === null && this.state.history[0] !== modalState.id) return;

    cancelAnimationFrame(this.maskAnimationFrame);
    this.maskAnimationFrame = requestAnimationFrame(() => {
      if (this.maskElementRef.current) {
        const { translateY, translateYCurrent } = modalState;

        const opacity = forceOpacity === null ? 1 - ((translateYCurrent - translateY) / (100 - translateY)) || 0 : forceOpacity;
        this.maskElementRef.current.style.opacity = Math.max(0, Math.min(100, opacity)).toString();
      }
    });
  }

  /**
   * Закрывает текущую модалку
   */
  triggerActiveModalClose () {
    const activeModalState = this.modalsState[this.state.activeModal];
    if (activeModalState) {
      activeModalState.onClose();
    }
  }

  /**
   * По клику на полупрозрачный черный фон нужно закрыть текущую модалку
   */
  onMaskClick = () => {
    if (!this.state.switching) {
      this.triggerActiveModalClose();
    }
  };

  render () {
    const { prevModal, activeModal, nextModal, visibleModals, animated, touchDown, dragging, switching } = this.state;

    if (!activeModal && !prevModal && !nextModal && !animated) return null;

    return (
      <TouchRootContext.Provider value={true}>
        <Touch
          className={classNames(getClassName('ModalRoot', this.props.platform), {
            'ModalRoot--vkapps': this.webviewType === 'vkapps',
            'ModalRoot--touched': touchDown,
            'ModalRoot--switching': switching
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
            {this.modals.map((Modal) => {
              const modalId = Modal.props.id;
              if (visibleModals.indexOf(Modal.props.id) === -1) return null;
              const modalState = this.modalsState[modalId];

              const isPage = modalState.type === TYPE_PAGE;
              const key = 'modal-' + modalId;

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
                    'ModalRoot__modal--collapsed': isPage && modalState.collapsed
                  })}
                >{Modal}</div>
              );
            })}
          </div>
        </Touch>
      </TouchRootContext.Provider>
    );
  }
}

export default withPlatform(ModalRoot);
