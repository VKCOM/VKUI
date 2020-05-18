import React, { Component, CSSProperties, HTMLAttributes, ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { IOS, ANDROID } from '../../lib/platform';
import Touch, { TouchEvent } from '../Touch/Touch';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';

export const transitionStartEventName = 'VKUI:View:transition-start';
export const transitionEndEventName = 'VKUI:View:transition-end';

enum SwipeBackResults { fail = 1, success}

interface Scrolls {
  [index: string]: number;
}

export type TransitionStartEventDetail = {
  scrolls: Scrolls;
};

interface ViewsScrolls {
  [index: string]: Scrolls;
}

type AnimationEventHandler = (e?: AnimationEvent) => void;

type TransitionEventHandler = (e?: TransitionEvent) => void;

let scrollsCache: ViewsScrolls = {};

const swipeBackExcludedTags = ['input', 'textarea'];

export interface ViewProps extends HTMLAttributes<HTMLElement>, HasChildren, HasPlatform {
  activePanel: string;
  popout?: ReactNode;
  modal?: ReactNode;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  onSwipeBack?(): void;
  onSwipeBackStart?(): void;
  history?: string[];
  id?: string;
  /**
   * @ignore
   * @deprecated будет удалено в 4-й версии.
   */
  header?: boolean;
}

export interface ViewState {
  scrolls: Scrolls;
  animated: boolean;
  startT?: Date;

  visiblePanels: string[];
  activePanel: string;
  isBack: boolean;
  prevPanel: string;
  nextPanel: string;

  swipingBack: boolean;
  swipebackStartX: number;
  swipeBackShift: number;
  swipeBackNextPanel: string;
  swipeBackPrevPanel: string;
  swipeBackResult: SwipeBackResults;

  browserSwipe: boolean;
}

class View extends Component<ViewProps, ViewState> {
  constructor(props: ViewProps) {
    super(props);

    this.state = {
      scrolls: scrollsCache[props.id] || {},
      animated: false,

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,

      browserSwipe: false,
    };
  }

  static defaultProps: Partial<ViewProps> = {
    history: [],
  };

  static contextTypes = {
    isWebView: PropTypes.bool,
    window: PropTypes.any,
    document: PropTypes.any,
    transitionMotionEnabled: PropTypes.bool,
  };

  get document() {
    return this.context.document || document;
  }

  get window() {
    return this.context.window || window;
  }

  get panels(): ReactElement[] {
    return [].concat(this.props.children);
  }

  componentWillUnmount() {
    if (this.props.id) {
      scrollsCache[this.props.id] = this.state.scrolls;
    }
  }

  componentDidUpdate(prevProps: ViewProps, prevState: ViewState) {
    this.props.popout && !prevProps.popout && this.blurActiveElement();
    this.props.modal && !prevProps.modal && this.blurActiveElement();

    // Нужен переход
    if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
      const firstLayer = this.panels.find(
        (panel) => panel.props.id === prevProps.activePanel || panel.props.id === this.props.activePanel,
      );

      const isBack = firstLayer && firstLayer.props.id === this.props.activePanel;

      this.blurActiveElement();

      this.setState({
        visiblePanels: [prevProps.activePanel, this.props.activePanel],
        prevPanel: prevProps.activePanel,
        nextPanel: this.props.activePanel,
        activePanel: null,
        animated: true,
        scrolls: {
          ...prevState.scrolls,
          [prevProps.activePanel]: this.window.pageYOffset,
        },
        isBack,
      });
    }

    // Закончилась анимация свайпа назад
    if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
      const nextPanel = this.props.activePanel;
      const prevPanel = prevProps.activePanel;
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0,
        activePanel: nextPanel,
        visiblePanels: [nextPanel],
        scrolls: removeObjectKeys(prevState.scrolls, [prevState.swipeBackPrevPanel]),
      }, () => {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
        window.scrollTo(0, prevState.scrolls[this.state.activePanel]);
        prevProps.onTransition && prevProps.onTransition({ isBack: true, from: prevPanel, to: nextPanel });
      });
    }

    const scrolls = this.state.scrolls;

    // Начался переход
    if (!prevState.animated && this.state.animated) {
      this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls } }));
      const nextPanelElement = this.pickPanel(this.state.nextPanel);
      const prevPanelElement = this.pickPanel(this.state.prevPanel);

      prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
      if (this.state.isBack) {
        nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
      }
      this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
    }

    // Начался свайп назад
    if (!prevState.swipingBack && this.state.swipingBack) {
      this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls } }));
      this.props.onSwipeBackStart && this.props.onSwipeBackStart();
      const nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
      const prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

      nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
      prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
    }

    // Началась анимация завершения свайпа назад.
    if (!prevState.swipeBackResult && this.state.swipeBackResult) {
      this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
      this.window.scrollTo(0, scrolls[this.state.activePanel]);
    }

    // Закончился Safari свайп
    if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
      this.setState({
        browserSwipe: false,
        nextPanel: null,
        prevPanel: null,
        animated: false,
        visiblePanels: [this.props.activePanel],
        activePanel: this.props.activePanel,
      });
    }
  }

  shouldDisableTransitionMotion(): boolean {
    return this.context.transitionMotionEnabled === false;
  }

  waitTransitionFinish(elem: HTMLElement, eventHandler: TransitionEventHandler): void {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(() => eventHandler(), this.props.platform === ANDROID ? 300 : 600);
    }
  }

  waitAnimationFinish(elem: HTMLElement, eventHandler: AnimationEventHandler): void {
    if (this.shouldDisableTransitionMotion()) {
      eventHandler();
      return;
    }

    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(() => eventHandler(), this.props.platform === ANDROID ? 300 : 600);
    }
  }

  blurActiveElement(): void {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  pickPanel(id: string): HTMLElement {
    const elem = this.document.getElementById(id);

    if (!elem) {
      console.warn(`Element #${id} not found`);
    }

    return elem && elem.parentNode.parentNode;
  }

  transitionEndHandler = (e?: AnimationEvent): void => {
    if (!e || [
      'animation-ios-next-forward',
      'animation-ios-prev-back',
      'animation-android-next-forward',
      'animation-android-prev-back',
    ].includes(e.animationName)) {
      const activePanel = this.props.activePanel;
      const isBack = this.state.isBack;
      const prevPanel = this.state.prevPanel;
      this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
      this.setState({
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel: activePanel,
        animated: false,
        isBack: undefined,
        scrolls: isBack ? removeObjectKeys(this.state.scrolls, [prevPanel]) : this.state.scrolls,
      }, () => {
        isBack && this.window.scrollTo(0, this.state.scrolls[activePanel]);
        this.props.onTransition && this.props.onTransition({ isBack, from: prevPanel, to: activePanel });
      });
    }
  };

  swipingBackTransitionEndHandler = (e?: TransitionEvent): void => {
    // indexOf because of vendor prefixes in old browsers
    const target = e.target as HTMLElement;
    if (e.propertyName.includes('transform') && target.classList.contains('View__panel--swipe-back-next')) {
      switch (this.state.swipeBackResult) {
        case SwipeBackResults.fail:
          this.onSwipeBackCancel();
          break;
        case SwipeBackResults.success:
          this.onSwipeBackSuccess();
      }
    }
  };

  onSwipeBackSuccess(): void {
    this.props.onSwipeBack && this.props.onSwipeBack();
  }

  onSwipeBackCancel(): void {
    this.setState({
      swipeBackPrevPanel: null,
      swipeBackNextPanel: null,
      swipingBack: false,
      swipeBackResult: null,
      swipebackStartX: 0,
      swipeBackShift: 0,
    }, () => {
      this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
    });
  }

  onScrollTop = (): void => {
    const { activePanel } = this.state;

    if (activePanel) {
      const scrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;

      if (scrollTop) {
        animate({
          duration: 200,
          timing: (n: number) => Math.sqrt(n),
          draw: (val: number) => {
            this.window.scrollTo(0, scrollTop - val * scrollTop);
          },
        });
      }
    }
  };

  onMoveX = (e: TouchEvent): void => {
    const target = e.originalEvent.target as HTMLElement;
    if (
      target &&
      typeof target.tagName === 'string' &&
      swipeBackExcludedTags.includes(target.tagName.toLowerCase())
    ) {
      return;
    }

    const { platform } = this.props;

    if (platform === IOS && !this.context.isWebView && (e.startX <= 70 || e.startX >= this.window.innerWidth - 70) && !this.state.browserSwipe) {
      this.setState({ browserSwipe: true });
    }

    if (platform === IOS && this.context.isWebView && this.props.onSwipeBack) {
      if (this.state.animated && e.startX <= 70) {
        return;
      }

      if (e.startX <= 70 && !this.state.swipingBack && this.props.history.length > 1) {
        this.setState({
          swipingBack: true,
          swipebackStartX: e.startX,
          startT: e.startT,
          swipeBackPrevPanel: this.state.activePanel,
          swipeBackNextPanel: this.props.history.slice(-2)[0],
          scrolls: {
            ...this.state.scrolls,
            [this.state.activePanel]: this.window.pageYOffset,
          },
        });
      }
      if (this.state.swipingBack) {
        let swipeBackShift;
        if (e.shiftX < 0) {
          swipeBackShift = 0;
        } else if (e.shiftX > this.window.innerWidth - this.state.swipebackStartX) {
          swipeBackShift = this.window.innerWidth;
        } else {
          swipeBackShift = e.shiftX;
        }
        this.setState({ swipeBackShift });
      }
    }
  };

  onEnd = (): void => {
    if (this.state.swipingBack) {
      const speed = this.state.swipeBackShift / (Date.now() - this.state.startT.getTime()) * 1000;
      if (this.state.swipeBackShift === 0) {
        this.onSwipeBackCancel();
      } else if (this.state.swipeBackShift >= this.window.innerWidth) {
        this.onSwipeBackSuccess();
      } else if (speed > 250 || this.state.swipebackStartX + this.state.swipeBackShift > this.window.innerWidth / 2) {
        this.setState({ swipeBackResult: SwipeBackResults.success });
      } else {
        this.setState({ swipeBackResult: SwipeBackResults.fail });
      }
    }
  };

  calcPanelSwipeStyles(panelId: string): CSSProperties {
    const isPrev = panelId === this.state.swipeBackPrevPanel;
    const isNext = panelId === this.state.swipeBackNextPanel;

    if (!isPrev && !isNext || this.state.swipeBackResult) {
      return {};
    }

    let prevPanelTranslate = `${this.state.swipeBackShift}px`;
    let nextPanelTranslate = `${-50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2}%`;
    let prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

    if (this.state.swipeBackResult) {
      return isPrev ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` } : {};
    }

    if (isNext) {
      return {
        transform: `translate3d(${nextPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${nextPanelTranslate}, 0, 0)`,
      };
    }
    if (isPrev) {
      return {
        transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})`,
      };
    }

    return {};
  }

  render() {
    const { style, popout, modal, platform } = this.props;
    const { prevPanel, nextPanel, activePanel, swipeBackPrevPanel, swipeBackNextPanel, swipeBackResult } = this.state;

    const hasPopout = !!popout;
    const hasModal = !!modal;

    const panels = this.panels.filter((panel: React.ReactElement) => {
      const panelId = panel.props.id;

      return this.state.visiblePanels.includes(panelId) ||
        panelId === swipeBackPrevPanel ||
        panelId === swipeBackNextPanel;
    });

    const modifiers = {
      'View--animated': this.state.animated,
      'View--swiping-back': this.state.swipingBack,
      'View--no-motion': this.shouldDisableTransitionMotion(),
    };

    return (
      <Touch
        Component="section"
        className={classNames(getClassName('View', platform), this.props.className, modifiers)}
        style={style}
        onMoveX={this.onMoveX}
        onEnd={this.onEnd}
      >
        <div className="View__panels">
          {panels.map((panel: React.ReactElement) => {
            const panelId = panel.props.id;

            return (
              <div
                className={classNames('View__panel', {
                  'View__panel--active': panelId === activePanel,
                  'View__panel--prev': panelId === prevPanel,
                  'View__panel--next': panelId === nextPanel,
                  'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
                  'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
                  'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail,
                })}
                style={this.calcPanelSwipeStyles(panelId)}
                key={panelId}
              >
                <div className="View__panel-in">
                  {panel}
                </div>
              </div>
            );
          })}
        </div>
        {hasPopout && <div className="View__popout">{popout}</div>}
        {hasModal && <div className="View__modal">{modal}</div>}
      </Touch>
    );
  }
}

export default withPlatform(View);
