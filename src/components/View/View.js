import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform';
import Touch from '../Touch/Touch';
import prefixCSS from 'react-prefixer';
import removeObjectKeys from '../../lib/removeObjectKeys';

const osname = platform();
const baseClassNames = getClassName('View');

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

      browserSwipe: false
    };
    this.panels = this.getPanels(props.children);
    osname === IOS && this.setPanelBg(props.activePanel);
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired,
    header: PropTypes.object,
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
    popout: undefined,
    header: null,
    history: []
  };

  static contextTypes = {
    isWebView: PropTypes.bool
  };

  refsStore = {};

  componentWillReceiveProps (nextProps) {
    if (this.props.children !== nextProps.children) {
      this.panels = this.getPanels(nextProps.children);
    }

    if (this.props.activePanel !== nextProps.activePanel && osname === IOS) {
      this.setPanelBg(nextProps.activePanel);
    }

    if (nextProps.popout && !this.props.popout) {
      View.blurActiveElement();
    }

    // Нужен переход
    if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
      const firstLayer = this.panels.find(panel => panel.id === this.props.activePanel || panel.id === nextProps.activePanel);
      const isBack = firstLayer && firstLayer.id === nextProps.activePanel;

      View.blurActiveElement();

      this.setState({
        visiblePanels: [this.props.activePanel, nextProps.activePanel],
        prevPanel: this.props.activePanel,
        nextPanel: nextProps.activePanel,
        activePanel: null,
        animated: true,
        scrolls: Object.assign({}, this.state.scrolls, {
          [this.props.activePanel]: window.pageYOffset
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
        visiblePanels: [nextProps.activePanel]
      }, () => this.props.onTransition && this.props.onTransition());
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const scrolls = this.state.scrolls;

    // Начался переход
    if (!prevState.animated && this.state.animated) {
      const nextPanelElement = View.pickPanel(this.state.nextPanel);
      const prevPanelElement = View.pickPanel(this.state.prevPanel);

      prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
      if (this.state.isBack) {
        nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
      }

      this.waitAnimationFinish(View.pickPanel(this.state.nextPanel), this.transitionEndHandler);
    }

    // Начался свайп назад
    if (!prevState.swipingBack && this.state.swipingBack) {
      const nextPanelElement = View.pickPanel(this.state.swipeBackNextPanel);
      const prevPanelElement = View.pickPanel(this.state.swipeBackPrevPanel);

      nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
      prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
    }

    // Началась анимация завершения свайпа назад.
    if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
      this.waitTransitionFinish(View.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
      window.scrollTo(0, scrolls[this.state.activePanel]);
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

  static blurActiveElement () {
    if (typeof window !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  }

  setPanelBg (panelId) {
    const panel = this.panels.find(panel => panel.id === panelId);
    if (panel) {
      document.documentElement.setAttribute('theme', panel.props.theme);
    } else {
      document.documentElement.removeAttribute('theme');
    }
  }

  static pickPanel (id) {
    const elem = document.querySelector('#' + id);

    if (!elem) {
      console.warn(`Element #${id} not found`);
    }

    return elem && elem.parentNode.parentNode;
  }

  transitionEndHandler = (e = { manual: true }) => {
    if (['animation-ios-next-forward', 'animation-ios-next-back', 'animation-android-next-forward', 'animation-android-prev-back'].indexOf(e.animationName) > -1 || e.manual) {
      const activePanel = this.props.activePanel;
      const isBack = this.state.isBack;
      this.setState({
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel: activePanel,
        animated: false,
        isBack: undefined
      }, function () {
        isBack && window.scrollTo(0, this.state.scrolls[activePanel]);
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
    });
  }

  onScrollTop = () => {
    const { activePanel } = this.state;

    if (activePanel) {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop) {
        animate({
          duration: 200,
          timing: n => Math.sqrt(n),
          draw: (val) => {
            window.scrollTo(0, scrollTop - val * scrollTop);
          }
        });
      }
    }
  };

  static swipeBackPrevented (target) {
    return target && target.closest('.Gallery, .Slider') !== null;
  }

  onMove = (e) => {
    if (osname === IOS && !this.context.isWebView && (e.startX <= 70 || e.startX >= window.innerWidth - 70) && !this.state.browserSwipe) {
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
            [this.state.activePanel]: window.pageYOffset
          })
        }, () => {
          this.props.onSwipeBackStart && this.props.onSwipeBackStart();
        });
      }
      if (this.state.swipingBack) {
        let swipeBackShift;
        if (e.shiftX < 0) {
          swipeBackShift = 0;
        } else if (e.shiftX > window.innerWidth - this.state.swipebackStartX) {
          swipeBackShift = window.innerWidth;
        } else {
          swipeBackShift = e.shiftX;
        }
        this.setState({ swipeBackShift });
      }
    }
    e.originalEvent.preventDefault();
  };

  onEnd = () => {
    if (this.state.swipingBack) {
      const speed = this.state.swipeBackShift / (new Date() - this.state.startT) * 1000;
      if (this.state.swipeBackShift === 0) {
        this.onSwipeBackCancel();
      } else if (this.state.swipeBackShift >= window.innerWidth) {
        this.onSwipeBackSuccess();
      } else {
        this.setState({ swipingBackFinish: speed > 250 || this.state.swipebackStartX + this.state.swipeBackShift > window.innerWidth / 2 });
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
    let nextPanelTranslate = `${-50 + (this.state.swipeBackShift * 100 / window.innerWidth) / 2}%`;
    let prevPanelShadow = 0.3 * (window.innerWidth - this.state.swipeBackShift) / window.innerWidth;

    if (this.state.swipingBackFinish !== null) {
      return isPrev ? prefixCSS({ boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` }) : {};
    }

    if (isNext) {
      return prefixCSS({
        transform: `translate3d(${nextPanelTranslate}, 0, 0)`
      });
    }
    if (isPrev) {
      return prefixCSS({
        transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})`
      });
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
        leftIn: {},
        leftIcon: {},
        right: {}
      };
    }

    let opacity = this.state.swipeBackShift / window.innerWidth;
    let titleTransform = this.state.swipeBackShift / window.innerWidth * 60;
    let leftTransform = this.state.swipeBackShift / window.innerWidth * 60;

    if (isNext) {
      return prefixCSS({
        title: { transform: `translate3d(${-60 + titleTransform}%, 0, 0)`, opacity },
        item: { opacity },
        leftIn: { transform: `translate3d(${-60 + leftTransform}%, 0, 0)`, opacity },
        leftIcon: { opacity: 1 },
        right: { opacity: 1 }
      });
    }
    if (isPrev) {
      return prefixCSS({
        title: { transform: `translate3d(${titleTransform}%, 0, 0)` },
        item: { opacity: 1 - opacity },
        leftIn: { transform: `translate3d(${leftTransform}%, 0, 0)` }
      });
    }
  }

  getPanels = (panels) => {
    return []
      .concat(panels)
      .map((item) => Object.assign({}, item, {
        id: item.props.id || item.key
      }));
  };

  render () {
    const { style, popout, header } = this.props;
    const { prevPanel, nextPanel, activePanel } = this.state;
    const hasPopout = !!popout;
    const hasHeader = header !== null;
    const panels = this.panels.filter(panel => {
      return this.state.visiblePanels.indexOf(panel.id) > -1 ||
        panel.id === this.state.swipeBackPrevPanel ||
        panel.id === this.state.swipeBackNextPanel;
    });

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
          <div className="View__header" style={{ zIndex: this.props.children.length + 1 }}>
            { osname === IOS && <div className="View__header-scrolltop" onClick={this.onScrollTop} /> }
            <div className="View__header-in">
              {panels.map((panel, i) => (
                <div
                  className={classnames('View__header-item', {
                    'View__header-item--active': panel.id === activePanel,
                    'View__header-item--prev': panel.id === prevPanel,
                    'View__header-item--next': panel.id === nextPanel,
                    'View__header-item--swipe-back-prev': panel.id === this.state.swipeBackPrevPanel,
                    'View__header-item--swipe-back-next': panel.id === this.state.swipeBackNextPanel,
                    'View__header-item--swipe-back-success': this.state.swipingBackFinish === true,
                    'View__header-item--swipe-back-failed': this.state.swipingBackFinish === false
                  }, panel.props.header.className)}
                  style={this.calcHeaderSwipeStyles(panel.id).item}
                  key={panel.key || panel.id || `panel-header-${i}`}
                >
                  <div className="View__header-left">
                    { panel.props.header.icon &&
                    <div
                      className="View__header-icon"
                      style={this.calcHeaderSwipeStyles(panel.id).leftIcon}
                    >
                      {panel.props.header.icon}
                    </div>
                    }
                    { panel.props.header.left &&
                    <div
                      className="View__header-left-in"
                      style={this.calcHeaderSwipeStyles(panel.id).leftIn}
                    >
                      {panel.props.header.left}
                    </div>
                    }
                  </div>
                  <div
                    className="View__header-title"
                    style={this.calcHeaderSwipeStyles(panel.id).title}
                  >
                    {panel.props.header.title}
                  </div>
                  <div
                    className="View__header-right"
                    style={this.calcHeaderSwipeStyles(panel.id).right}
                  >
                    {panel.props.header.right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="View__panels">
          {panels.map((panel, i) => (
            <div
              className={classnames('View__panel', {
                'View__panel--active': panel.id === activePanel,
                'View__panel--prev': panel.id === prevPanel,
                'View__panel--next': panel.id === nextPanel,
                'View__panel--swipe-back-prev': panel.id === this.state.swipeBackPrevPanel,
                'View__panel--swipe-back-next': panel.id === this.state.swipeBackNextPanel,
                'View__panel--swipe-back-success': this.state.swipingBackFinish === true,
                'View__panel--swipe-back-failed': this.state.swipingBackFinish === false,
                [`View__panel--theme-${panel.props.theme}`]: true
              })}
              style={Object.assign(this.calcPanelSwipeStyles(panel.id), { zIndex: i + 1 })}
              key={panel.key || panel.id || `panel-${i}`}
            >
              <div className="View__panel-in">
                {React.cloneElement(panel, { ref: this.getRef, activePanel, nextPanel })}
              </div>
            </div>
          ))}
          {panels.filter(panel => panel.props.fixedLayout).map((panel, i) => (
            React.cloneElement(panel.props.fixedLayout, {
              key: panel.key || panel.id || `panel-${i}`,
              style: Object.assign({}, panel.props.fixedLayout.props.style, removeObjectKeys(this.calcPanelSwipeStyles(panel.id), ['boxShadow']), { zIndex: i + 1 }),
              isActive: panel.id === activePanel,
              isPrev: panel.id === prevPanel,
              isNext: panel.id === nextPanel
            })
          ))}
        </div>
        {hasPopout && <div className="View__popout">{popout}</div>}
      </Touch>
    );
  }
}
