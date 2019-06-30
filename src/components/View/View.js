
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../../lib/platform';
import Touch from '../Touch/Touch';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { baseClassNames as panelHeaderClasses } from '../PanelHeader/PanelHeader';

const baseClassNames = getClassName('View');

export const transitionStartEventName = 'VKUI:View:transition-start';
export const transitionEndEventName = 'VKUI:View:transition-end';

let scrollsCache = {};

const swipeBackExcludedTags = ['input', 'textarea'];

export default class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scrolls: scrollsCache[props.id] || {},

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
      swipingBackFinish: null,

      browserSwipe: false
    };
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    children: PropTypes.node,
    popout: PropTypes.node,
    modal: PropTypes.node,
    onTransition: PropTypes.func,
    /**
     * @ignore
     */
    onSwipeBack: PropTypes.func,
    /**
     * @ignore
     */
    onSwipeBackStart: PropTypes.func,
    /**
     * @ignore
     */
    history: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string
  };

  static defaultProps = {
    style: {},
    children: null,
    popout: null,
    header: true,
    history: []
  };

  static contextTypes = {
    isWebView: PropTypes.bool,
    window: PropTypes.any,
    document: PropTypes.any
  };

  get document () {
    return this.context.document || document;
  }

  get window () {
    return this.context.window || window;
  }

  get panels () {
    return [].concat(this.props.children);
  }

  refsStore = {};

  componentWillReceiveProps (nextProps) {
    nextProps.popout && !this.props.popout && this.blurActiveElement();
    nextProps.modal && !this.props.modal && this.blurActiveElement();

    // Нужен переход
    if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
      const firstLayer = this.panels.find(
        panel => panel.props.id === this.props.activePanel || panel.props.id === nextProps.activePanel
      );

      const isBack = firstLayer && firstLayer.props.id === nextProps.activePanel;

      this.blurActiveElement();

      this.setState({
        visiblePanels: [this.props.activePanel, nextProps.activePanel],
        prevPanel: this.props.activePanel,
        nextPanel: nextProps.activePanel,
        activePanel: null,
        animated: true,
        scrolls: {
          ...this.state.scrolls,
          [this.props.activePanel]: this.window.pageYOffset
        },
        isBack
      });
    }

    // Закончилась анимация свайпа назад
    if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
      const nextPanel = nextProps.activePanel;
      const prevPanel = this.props.activePanel;
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0,
        activePanel: nextPanel,
        visiblePanels: [nextPanel],
        scrolls: removeObjectKeys(this.state.scrolls, [this.state.swipeBackPrevPanel])
      }, () => {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
        window.scrollTo(0, this.state.scrolls[this.state.activePanel]);
        this.props.onTransition && this.props.onTransition({ isBack: true, from: prevPanel, to: nextPanel });
      });
    }
  }

  componentWillUnmount () {
    if (this.props.id) {
      scrollsCache[this.props.id] = this.state.scrolls;
    }
  }

  componentDidUpdate (prevProps, prevState) {
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
    if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
      this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
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
        activePanel: this.props.activePanel
      });
    }
  }

  waitTransitionFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 300 : 600);
    }
  }

  waitAnimationFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 300 : 600);
    }
  }

  blurActiveElement () {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  pickPanel (id) {
    const elem = this.document.getElementById(id);

    if (!elem) {
      console.warn(`Element #${id} not found`);
    }

    return elem && elem.parentNode.parentNode;
  }

  transitionEndHandler = (e = { manual: true }) => {
    if ([
      'animation-ios-next-forward',
      'animation-ios-prev-back',
      'animation-android-next-forward',
      'animation-android-prev-back'
    ].indexOf(e.animationName) > -1 || e.manual) {
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
        scrolls: isBack ? removeObjectKeys(this.state.scrolls, [prevPanel]) : this.state.scrolls
      }, function () {
        isBack && this.window.scrollTo(0, this.state.scrolls[activePanel]);
        this.props.onTransition && this.props.onTransition({ isBack, from: prevPanel, to: activePanel });
      });
    }
  };

  swipingBackTransitionEndHandler = (e) => {
    // indexOf because of vendor prefixes in old browsers
    if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
      this.state.swipingBackFinish ? this.onSwipeBackSuccess() : this.onSwipeBackCancel();
    }
  };

  onSwipeBackSuccess () {
    this.props.onSwipeBack && this.props.onSwipeBack();
  }

  onSwipeBackCancel () {
    this.setState({
      swipeBackPrevPanel: null,
      swipeBackNextPanel: null,
      swipingBack: false,
      swipingBackFinish: null,
      swipebackStartX: 0,
      swipeBackShift: 0
    }, () => {
      this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
    });
  }

  onScrollTop = () => {
    const { activePanel } = this.state;

    if (activePanel) {
      const scrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;

      if (scrollTop) {
        animate({
          duration: 200,
          timing: n => Math.sqrt(n),
          draw: (val) => {
            this.window.scrollTo(0, scrollTop - val * scrollTop);
          }
        });
      }
    }
  };

  onMoveX = (e) => {
    if (swipeBackExcludedTags.indexOf(e.originalEvent.target.tagName.toLowerCase()) > -1) {
      return;
    }

    if (IS_PLATFORM_IOS && !this.context.isWebView && (e.startX <= 70 || e.startX >= this.window.innerWidth - 70) && !this.state.browserSwipe) {
      this.setState({ browserSwipe: true });
    }

    if (IS_PLATFORM_IOS && this.context.isWebView && this.props.onSwipeBack) {
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
            [this.state.activePanel]: this.window.pageYOffset
          }
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

  onEnd = () => {
    if (this.state.swipingBack) {
      const speed = this.state.swipeBackShift / (new Date() - this.state.startT) * 1000;
      if (this.state.swipeBackShift === 0) {
        this.onSwipeBackCancel();
      } else if (this.state.swipeBackShift >= this.window.innerWidth) {
        this.onSwipeBackSuccess();
      } else {
        this.setState({ swipingBackFinish: speed > 250 || this.state.swipebackStartX + this.state.swipeBackShift > this.window.innerWidth / 2 });
      }
    }
  };

  getRef = (c) => {
    if (c && c.container && c.id) {
      let el = c;

      while (el.container) {
        el = el.container;
      }

      this.refsStore[c.id] = el;
    }
  };

  calcPanelSwipeStyles (panelId) {
    const isPrev = panelId === this.state.swipeBackPrevPanel;
    const isNext = panelId === this.state.swipeBackNextPanel;

    if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
      return {};
    }

    let prevPanelTranslate = `${this.state.swipeBackShift}px`;
    let nextPanelTranslate = `${-50 + (this.state.swipeBackShift * 100 / this.window.innerWidth) / 2}%`;
    let prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

    if (this.state.swipingBackFinish !== null) {
      return isPrev ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` } : {};
    }

    if (isNext) {
      return {
        transform: `translate3d(${nextPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${nextPanelTranslate}, 0, 0)`
      };
    }
    if (isPrev) {
      return {
        transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})`
      };
    }

    return {};
  }

  calcHeaderSwipeStyles (panelId) {
    const isPrev = panelId === this.state.swipeBackPrevPanel;
    const isNext = panelId === this.state.swipeBackNextPanel;

    if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
      return {
        title: {},
        bg: {},
        left: {},
        addon: {},
        right: {}
      };
    }

    let opacity = this.state.swipeBackShift / this.window.innerWidth;
    let titleTransform = this.state.swipeBackShift / this.window.innerWidth * 30;
    let leftTransform = this.state.swipeBackShift / this.window.innerWidth * 30;

    if (isNext) {
      return {
        title: {
          transform: `translate3d(${-30 + titleTransform}vw, 0, 0)`,
          WebkitTransform: `translate3d(${-30 + titleTransform}vw, 0, 0)`,
          opacity
        },
        left: { opacity },
        addon: {
          opacity: 1,
          transform: `translate3d(${-30 + leftTransform}vw, 0, 0)`,
          WebkitTransform: `translate3d(${-30 + leftTransform}vw, 0, 0)`
        },
        right: { opacity }
      };
    }
    if (isPrev) {
      return {
        title: {
          transform: `translate3d(${titleTransform}vw, 0, 0)`,
          WebkitTransform: `translate3d(${titleTransform}vw, 0, 0)`,
          opacity: 1 - opacity
        },
        bg: { opacity: 1 - opacity },
        left: { opacity: 1 - opacity },
        addon: {
          transform: `translate3d(${leftTransform}vw, 0, 0)`,
          WebkitTransform: `translate3d(${leftTransform}vw, 0, 0)`,
          opacity: 1 - opacity
        }
      };
    }
  }

  render () {
    const { style, popout, modal, header } = this.props;
    const { prevPanel, nextPanel, activePanel, swipeBackPrevPanel, swipeBackNextPanel, swipingBackFinish } = this.state;

    const hasPopout = !!popout;
    const hasModal = !!modal;

    const panels = this.panels.filter(panel => {
      const panelId = panel.props.id;

      return this.state.visiblePanels.indexOf(panelId) > -1 ||
        panelId === swipeBackPrevPanel ||
        panelId === swipeBackNextPanel;
    });

    const modifiers = {
      'View--header': header,
      'View--animated': this.state.animated,
      'View--swiping-back': this.state.swipingBack
    };

    return (
      <Touch
        component="section"
        className={classNames(baseClassNames, modifiers)}
        style={style}
        onMoveX={this.onMoveX}
        onEnd={this.onEnd}
      >
        {header && (
          <div className="View__header">
            { IS_PLATFORM_IOS && <div className="View__header-scrolltop" onClick={this.onScrollTop} /> }
            <div className={classNames(panelHeaderClasses)}>
              {panels.map(panel => {
                const panelId = panel.props.id;
                const headerSwipeStyles = this.calcHeaderSwipeStyles(panelId);

                return (
                  <div
                    className={classNames('PanelHeader__in', {
                      'PanelHeader__in--active': panelId === activePanel,
                      'PanelHeader__in--prev': panelId === prevPanel,
                      'PanelHeader__in--next': panelId === nextPanel,
                      'PanelHeader__in--swipe-back-prev': panelId === swipeBackPrevPanel,
                      'PanelHeader__in--swipe-back-next': panelId === swipeBackNextPanel,
                      'PanelHeader__in--swipe-back-success': swipingBackFinish === true,
                      'PanelHeader__in--swipe-back-failed': swipingBackFinish === false
                    })}
                    key={panelId}
                    id={`panel-header-${panelId}`}
                  >
                    <div
                      className="PanelHeader__bg"
                      key={panelId}
                      id={`header-bg-${panelId}`}
                      style={headerSwipeStyles.bg}
                    />
                    <div className="PanelHeader__container">
                      <div className="PanelHeader__left">
                        <div
                          className="PanelHeader__left-in"
                          id={`header-left-${panelId}`}
                          style={headerSwipeStyles.left}
                        />
                        {IS_PLATFORM_IOS &&
                        <div
                          className="PanelHeader__addon"
                          id={`header-addon-${panelId}`}
                          style={headerSwipeStyles.icon}
                        />
                        }
                      </div>
                      <div
                        className="PanelHeader__content"
                        style={headerSwipeStyles.title}
                        id={`header-title-${panelId}`}
                      />
                      <div
                        className="PanelHeader__right"
                        id={`header-right-${panelId}`}
                        style={headerSwipeStyles.right}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="View__panels">
          {panels.map(panel => {
            const panelId = panel.props.id;

            return (
              <div
                className={classNames('View__panel', {
                  'View__panel--active': panelId === activePanel,
                  'View__panel--prev': panelId === prevPanel,
                  'View__panel--next': panelId === nextPanel,
                  'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
                  'View__panel--swipe-back-success': swipingBackFinish === true,
                  'View__panel--swipe-back-failed': swipingBackFinish === false
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
