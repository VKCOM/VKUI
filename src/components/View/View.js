import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform';
import Touch from '../Touch/Touch';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { baseClassNames as panelHeaderClasses } from '../PanelHeader/PanelHeader';

const osname = platform();
const baseClassNames = getClassName('View');

export const transitionStartEventName = 'VKUI:View:transition-start';
export const transitionEndEventName = 'VKUI:View:transition-end';

export default class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scrolls: {},

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

      browserSwipe: false,

      headerThemes: {}
    };
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    children: PropTypes.node,
    popout: PropTypes.node,
    onTransition: PropTypes.func,
    onSwipeBack: PropTypes.func,
    onSwipeBackStart: PropTypes.func,
    history: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    style: {},
    children: null,
    popout: null,
    header: null,
    history: []
  };

  static contextTypes = {
    isWebView: PropTypes.bool,
    window: PropTypes.any,
    document: PropTypes.any
  };

  static childContextTypes = {
    setHeaderTheme: PropTypes.func
  };

  getChildContext () {
    return {
      setHeaderTheme: (theme) => {
        this.setState({
          headerThemes: { ...this.state.headerThemes, ...theme }
        });
      }
    };
  }

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

  componentWillMount () {
    this.setPanelBg(this.props.activePanel);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.activePanel !== nextProps.activePanel) {
      this.setPanelBg(nextProps.activePanel);
    }

    if (nextProps.popout && !this.props.popout) {
      this.blurActiveElement();
    }

    // Нужен переход
    if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
      const firstLayer = this.panels.find(
        panel => panel.props.id === this.props.activePanel || panel.props.id === nextProps.activePanel
      );
      const isBack = firstLayer && firstLayer.id === nextProps.activePanel;

      this.blurActiveElement();

      this.setState({
        visiblePanels: [this.props.activePanel, nextProps.activePanel],
        prevPanel: this.props.activePanel,
        nextPanel: nextProps.activePanel,
        activePanel: null,
        animated: true,
        scrolls: Object.assign({}, this.state.scrolls, {
          [this.props.activePanel]: this.window.pageYOffset
        }),
        isBack
      });
    }

    // Закончилась анимация свайпа назад
    if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0,
        activePanel: nextProps.activePanel,
        visiblePanels: [nextProps.activePanel],
        scrolls: removeObjectKeys(this.state.scrolls, [this.state.swipeBackPrevPanel])
      }, () => {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionEndEventName));
        window.scrollTo(0, this.state.scrolls[this.state.activePanel]);
        this.props.onTransition && this.props.onTransition();
      });
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
      setTimeout(eventHandler.bind(this), osname === ANDROID ? 300 : 600);
    }
  }

  waitAnimationFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), osname === ANDROID ? 300 : 600);
    }
  }

  blurActiveElement () {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  setPanelBg (panelId) {
    const panel = this.panels.find(panel => panel.props.id === panelId);
    if (panel) {
      this.document.documentElement.setAttribute('theme', panel.props.theme);
    } else {
      this.document.documentElement.removeAttribute('theme');
    }
  }

  pickPanel (id) {
    const elem = this.document.querySelector('#' + id);

    if (!elem) {
      console.warn(`Element #${id} not found`);
    }

    return elem && elem.parentNode.parentNode;
  }

  transitionEndHandler = (e = { manual: true }) => {
    if ([
      'animation-ios-next-forward',
      'animation-ios-next-back',
      'animation-ios-prev-forward',
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
        this.props.onTransition && this.props.onTransition();
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
      const scrollTop = this.document.body.scrollTop || this.document.this.documentElement.scrollTop;

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

  static swipeBackPrevented (target) {
    return target && target.closest('.Gallery, .Slider') !== null;
  }

  onMove = (e) => {
    if (osname === IOS && !this.context.isWebView && (e.startX <= 70 || e.startX >= this.window.innerWidth - 70) && !this.state.browserSwipe) {
      this.setState({ browserSwipe: true });
    }

    if (osname === IOS && this.context.isWebView && this.props.onSwipeBack && !View.swipeBackPrevented(e.originalEvent.target)) {
      if (this.state.animated && e.startX <= 70) {
        e.originalEvent.preventDefault();
        return false;
      }

      if (e.startX <= 70 && !this.state.swipingBack && this.props.history.length > 1) {
        this.setState({
          swipingBack: true,
          swipebackStartX: e.startX,
          startT: e.startT,
          swipeBackPrevPanel: this.state.activePanel,
          swipeBackNextPanel: this.props.history.slice(-2)[0],
          scrolls: Object.assign({}, this.state.scrolls, {
            [this.state.activePanel]: this.window.pageYOffset
          })
        }, () => {
          this.props.onSwipeBackStart && this.props.onSwipeBackStart();
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
        item: {},
        left: {},
        icon: {},
        right: {}
      };
    }

    let opacity = this.state.swipeBackShift / this.window.innerWidth;
    let titleTransform = this.state.swipeBackShift / this.window.innerWidth * 60;
    let leftTransform = this.state.swipeBackShift / this.window.innerWidth * 60;

    if (isNext) {
      return {
        title: {
          transform: `translate3d(${-60 + titleTransform}%, 0, 0)`,
          WebkitTransform: `translate3d(${-60 + titleTransform}%, 0, 0)`,
          opacity
        },
        item: { opacity },
        left: {
          transform: `translate3d(${-60 + leftTransform}%, 0, 0)`,
          WebkitTransform: `translate3d(${-60 + leftTransform}%, 0, 0)`,
          opacity
        },
        icon: { opacity: 1 },
        right: { opacity: 1 }
      };
    }
    if (isPrev) {
      return {
        title: {
          transform: `translate3d(${titleTransform}%, 0, 0)`,
          WebkitTransform: `translate3d(${titleTransform}%, 0, 0)`
        },
        item: { opacity: 1 - opacity },
        left: {
          transform: `translate3d(${leftTransform}%, 0, 0)`,
          WebkitTransform: `translate3d(${leftTransform}%, 0, 0)`
        }
      };
    }
  }

  render () {
    const { style, popout, header } = this.props;
    const { prevPanel, nextPanel, activePanel, swipeBackPrevPanel, swipeBackNextPanel, headerThemes } = this.state;
    const hasPopout = !!popout;
    const hasHeader = header !== null;
    const panels = this.panels.filter(panel => {
      return this.state.visiblePanels.indexOf(panel.props.id) > -1 ||
        panel.props.id === this.state.swipeBackPrevPanel ||
        panel.props.id === this.state.swipeBackNextPanel;
    });

    const activePanelHeaderTheme = headerThemes[activePanel || nextPanel];

    const modifiers = {
      'View--header': hasHeader,
      'View--animated': this.state.animated,
      'View--swiping-back': this.state.swipingBack
    };

    return (
      <Touch
        component="section"
        className={classnames(baseClassNames, modifiers)}
        style={style}
        onMoveX={this.onMove}
        onEnd={this.onEnd}
      >
        {hasHeader && (
          <div className="View__header">
            { osname === IOS && <div className="View__header-scrolltop" onClick={this.onScrollTop} /> }
            <div className={classnames(panelHeaderClasses, {
              [`PanelHeader--${activePanelHeaderTheme}`]: true
            })}>
              {panels.map(panel => (
                <div
                  className={classnames('PanelHeader__in', {
                    [`PanelHeader__in--${headerThemes[panel.props.id]}`]: true,
                    'PanelHeader__in--active': panel.props.id === activePanel,
                    'PanelHeader__in--prev': panel.props.id === prevPanel,
                    'PanelHeader__in--next': panel.props.id === nextPanel,
                    'PanelHeader__in--swipe-back-prev': panel.props.id === this.state.swipeBackPrevPanel,
                    'PanelHeader__in--swipe-back-next': panel.props.id === this.state.swipeBackNextPanel,
                    'PanelHeader__in--swipe-back-success': this.state.swipingBackFinish === true,
                    'PanelHeader__in--swipe-back-failed': this.state.swipingBackFinish === false
                  })}
                  style={this.calcHeaderSwipeStyles(panel.props.id).item}
                  key={panel.props.id}
                >
                  <div className="PanelHeader__left">
                    {osname === IOS &&
                    <div
                      className="PanelHeader__icon"
                      id={`header-icon-${panel.props.id}`}
                      style={this.calcHeaderSwipeStyles(panel.props.id).icon}
                    />
                    }
                    <div
                      className="PanelHeader__left-in"
                      id={`header-left-${panel.props.id}`}
                      style={this.calcHeaderSwipeStyles(panel.props.id).left}
                    />
                  </div>
                  <div
                    className="PanelHeader__content"
                    style={this.calcHeaderSwipeStyles(panel.props.id).title}
                    id={`header-title-${panel.props.id}`}
                  />
                  <div
                    className="PanelHeader__right"
                    id={`header-right-${panel.props.id}`}
                    style={this.calcHeaderSwipeStyles(panel.props.id).right}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="View__panels">
          {panels.map(panel => (
            <div
              className={classnames('View__panel', {
                'View__panel--active': panel.props.id === activePanel,
                'View__panel--prev': panel.props.id === prevPanel,
                'View__panel--next': panel.props.id === nextPanel,
                'View__panel--swipe-back-prev': panel.props.id === this.state.swipeBackPrevPanel,
                'View__panel--swipe-back-next': panel.props.id === this.state.swipeBackNextPanel,
                'View__panel--swipe-back-success': this.state.swipingBackFinish === true,
                'View__panel--swipe-back-failed': this.state.swipingBackFinish === false,
                [`View__panel--theme-${panel.props.theme}`]: true
              })}
              style={this.calcPanelSwipeStyles(panel.props.id)}
              key={panel.props.id}
            >
              <div className="View__panel-in">
                {React.cloneElement(panel, {
                  isNext: panel.props.id === nextPanel || panel.props.id === swipeBackNextPanel,
                  isPrev: panel.props.id === prevPanel || panel.props.id === swipeBackPrevPanel
                })}
              </div>
            </div>
          ))}
        </div>
        {hasPopout && <div className="View__popout">{popout}</div>}
      </Touch>
    );
  }
}
