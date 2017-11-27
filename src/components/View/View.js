import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform';
import Touch from '../Touch/Touch';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

const osname = platform();
const baseClassNames = getClassName('View');

export default class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visiblePanels: [props.activePanel],
      children: [props.children],
      activePanel: props.activePanel,
      scrolls: {},
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null,
      swipeBackHistory: []
    };
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired,
    header: PropTypes.object,
    children: PropTypes.node,
    popout: PropTypes.node,
    onTransition: PropTypes.func,
    onSwipeBack: PropTypes.func,
    externalSwiping: PropTypes.bool
  };
  static defaultProps = {
    style: {},
    children: null,
    popout: undefined,
    header: null,
    externalSwiping: false
  };
  refsStore = {};

  componentWillReceiveProps (nextProps) {
    const { activePanel, nextPanel } = this.state;

    let scrolls, pageYOffset;

    // Popout appearance
    if (!!nextProps.popout && !this.props.popout) {
      pageYOffset = window.pageYOffset;

      this.blurActiveElement();
      scrolls = Object.assign({}, this.state.scrolls, {
        [activePanel]: pageYOffset
      });

      this.setState({ scrolls }, function () {
        this.pickPanel(activePanel).scrollTop = scrolls[activePanel];
      });
    }

    if (nextProps.externalSwiping !== this.props.externalSwiping) {
      this.setState({ swiping: nextProps.externalSwiping });
    }

    // Panel transition
    if (activePanel !== nextProps.activePanel && !this.state.swipingBack) {
      pageYOffset = pageYOffset || window.pageYOffset;

      const firstLayerId = this.props.children.find(panel => {
        return panel.props.id === activePanel || panel.props.id === nextProps.activePanel;
      }).props.id;
      const isBack = firstLayerId === nextProps.activePanel;

      scrolls = scrolls || Object.assign({}, this.state.scrolls, {
        [activePanel]: pageYOffset
      });

      // Blur inputs on panel transition
      this.blurActiveElement();
      // @TODO Lock overscroll on window
      let visiblePanels;
      if (this.state.animated) {
        this.transitionEndHandler();
        visiblePanels = [nextPanel, nextProps.activePanel];
      } else {
        visiblePanels = [activePanel, nextProps.activePanel];
      }
      this.setState({
        visiblePanels,
        animated: false,
        scrolls,
        isBack
      }, function () {
        // document.body.classList.add('locked');

        // Delegate scrollTop from window
        const prevPanelElement = activePanel && this.pickPanel(activePanel);
        const nextPanelElement = nextProps.activePanel && this.pickPanel(nextProps.activePanel);

        if (prevPanelElement) {
          prevPanelElement.scrollTop = scrolls[activePanel] || 0;
        }

        if (isBack && nextPanelElement) {
          this.pickPanel(nextProps.activePanel).scrollTop = scrolls[nextProps.activePanel] || 0;
        }
      });
    }
    // Если панель сменилась из-за свайпа назад в iOS
    if (activePanel !== nextProps.activePanel && this.state.swipingBack) {
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipeBackHistory: this.state.swipeBackHistory.slice(0, -1),
        swipebackStartX: 0,
        swipeBackShift: 0,
        activePanel: nextProps.activePanel,
        visiblePanels: [nextProps.activePanel]
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const scrolls = this.state.scrolls;

    if (this.state.visiblePanels.length === 2 && !this.state.animated && !this.state.swipingBack) {
      const [ prevPanel, nextPanel ] = this.state.visiblePanels;
      requestAnimationFrame(() => {
        this.setState({
          prevPanel: prevPanel,
          nextPanel: nextPanel,
          activePanel: null,
          animated: true
        }, () => {
          this.waitTransitionFinish(this.pickPanel(nextPanel), this.transitionEndHandler);
        });
      });
    }

    // После начала свайпа назад в iOS, определяем текущую панель как swipeBackPrevPanel,
    // предыдущую панель, которую надо показать как swipeBackNextPanel
    if (this.state.swipingBack && !prevState.swipingBack && this.state.swipeBackHistory.length > 0) {
      const swipeBackNextPanel = this.state.swipeBackHistory.slice(-1)[0];
      this.setState({
        swipeBackPrevPanel: this.state.activePanel,
        swipeBackNextPanel
      });
    }

    if (prevState.swipingBack && prevState.swipeBackNextPanel === null && this.state.swipeBackNextPanel) {
      const nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
      nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
    }

    if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
      this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
    }

    // Popout disappearance: restore scroll
    if (prevProps.popout && !this.props.popout && scrolls[this.state.activePanel]) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrolls[this.state.activePanel]);
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

  blurActiveElement () {
    if (typeof window !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  }

  pickPanel (id) {
    const elem = document.querySelector('#' + id);

    if (!elem) {
      console.warn(`Element #${id} not found`);
    }

    return elem && elem.parentNode.parentNode;
  }

  transitionEndHandler = (e = { manual: true }) => {
    if (e.propertyName === 'visibility' || e.manual) {
      const activePanel = this.props.activePanel;
      const isBack = this.state.isBack;
      let swipeBackHistory;
      if (isBack) {
        swipeBackHistory = this.state.swipeBackHistory.slice(0, -1);
      } else {
        swipeBackHistory = [].concat(this.state.swipeBackHistory, this.state.prevPanel);
      }
      this.setState({
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel: activePanel,
        animated: false,
        isBack: undefined,
        swipeBackHistory
      }, function () {
        // document.body.classList.remove('locked');

        // reset scrollTop for all panels
        const panels = document.querySelectorAll('.View__panel');

        Array.prototype.forEach.call(panels, function (panel) {
          if (!panel.classList.contains('View__panel--active')) {
            panel.scrollTop = 0;
          }
        });

        // Restore scroll on window if next panel placed before previous panel
        if (activePanel && isBack) {
          window.scrollTo(0, this.state.scrolls[activePanel] || 0);
        }

        if (this.props.onTransition) {
          this.props.onTransition();
        }
      });
    }
  };

  swipingBackTransitionEndHandler = (e) => {
    if (e.propertyName === 'transform') {
      if (this.state.swipingBackFinish === true) {
        this.props.onSwipeBack && this.props.onSwipeBack();
      } else {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0
        });
      }
      this.setState({ swiping: false });
    }
  };

  onHeaderClick = () => {
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

  onMove = (e) => {
    if (osname === IOS && this.props.onSwipeBack) {
      if (this.state.animated && e.startX <= 70) {
        this.transitionEndHandler();
      }
      if (e.startX <= 70 && !this.state.swipingBack && this.state.swipeBackHistory.length > 0) {
        this.setState({
          swipingBack: true,
          swipebackStartX: e.startX,
          startT: e.startT,
          swiping: true
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
  };

  onEnd = () => {
    if (this.state.swipingBack) {
      this.setState({ swiping: false });
      requestAnimationFrame(() => {
        const speed = this.state.swipeBackShift / (new Date() - this.state.startT) * 1000;
        this.setState({ swipingBackFinish: speed > 250 || this.state.swipebackStartX + this.state.swipeBackShift > window.innerWidth / 2 });
      });
    }
  };

  getRef = (c) => {
    if (c && c.container && c.props.id) {
      let el = c;

      while (el.container) {
        el = el.container;
      }

      this.refsStore[c.props.id] = el;
    }
  };

  calcPanelSwipeStyles (panelId) {
    const isPrev = panelId === this.state.swipeBackPrevPanel;
    const isNext = panelId === this.state.swipeBackNextPanel;

    let prevPanelTranslate = `${this.state.swipeBackShift}px`;
    let nextPanelTranslate = `${-50 + (this.state.swipeBackShift * 100 / window.innerWidth) / 2}%`;
    let prevPanelShadow = 0.3 * (window.innerWidth - this.state.swipeBackShift) / window.innerWidth;

    if (this.state.swipingBackFinish !== null) {
      return isPrev ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` } : {};
    }

    if (isNext) {
      return {
        transform: `translate3d(${nextPanelTranslate}, 0, 0)`
      };
    }
    if (isPrev) {
      return {
        transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
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
        leftIn: {},
        leftIcon: {}
      };
    }

    let opacity = this.state.swipeBackShift / window.innerWidth;
    let titleTransform = this.state.swipeBackShift / window.innerWidth * 30;
    let leftTransform = this.state.swipeBackShift / window.innerWidth * 60;

    if (isNext) {
      return {
        title: { transform: `translate3d(${-30 + titleTransform}%, 0, 0)`, opacity },
        item: { opacity },
        leftIn: { transform: `translate3d(${-60 + leftTransform}%, 0, 0)`, opacity },
        leftIcon: { opacity: 1 }
      };
    }
    if (isPrev) {
      return {
        title: { transform: `translate3d(${titleTransform}%, 0, 0)` },
        item: { opacity: 1 - opacity },
        leftIn: { transform: `translate3d(${leftTransform}%, 0, 0)` }
      };
    }
  }

  render () {
    const { style, popout, header } = this.props;
    const { prevPanel, nextPanel, activePanel } = this.state;
    const hasPopout = !!popout;
    const hasHeader = header !== null;
    const panels = [].concat(this.props.children).filter(panel => {
      return this.state.visiblePanels.indexOf(panel.props.id) > -1 ||
        panel.props.id === this.state.swipeBackPrevPanel ||
        panel.props.id === this.state.swipeBackNextPanel;
    });
    const modifiers = {
      'View--header': hasHeader,
      'View--popout': hasPopout,
      'View--animated': this.state.visiblePanels.length === 2,
      'View--swiping-back': this.state.swipingBack,
      'View--swiping': this.state.swiping
    };

    return (
      <Touch
        component="section"
        className={classnames(baseClassNames, modifiers)}
        style={style}
        onMoveX={this.onMove}
        onEndX={this.onEnd}
      >
        {hasHeader && (
          <div className="View__header" onClick={this.onHeaderClick}>
            <div className="View__header-in">
              {panels.map((panel, i) => (
                <div
                  className={classnames('View__header-item', {
                    'View__header-item--active': panel.props.id === activePanel,
                    'View__header-item--prev': panel.props.id === prevPanel,
                    'View__header-item--next': panel.props.id === nextPanel,
                    'View__header-item--swipe-back-prev': panel.props.id === this.state.swipeBackPrevPanel,
                    'View__header-item--swipe-back-next': panel.props.id === this.state.swipeBackNextPanel,
                    'View__header-item--swipe-back-success': this.state.swipingBackFinish === true,
                    'View__header-item--swipe-back-failed': this.state.swipingBackFinish === false
                  })}
                  style={this.calcHeaderSwipeStyles(panel.props.id).item}
                  key={panel.key || panel.props.id || `panel-header-${i}`}
                >
                  <div className="View__header-left">
                    { panel.props.header.icon &&
                    <div
                      className="View__header-icon"
                      style={this.calcHeaderSwipeStyles(panel.props.id).leftIcon}
                    >
                      {panel.props.header.icon}
                    </div>
                    }
                    { panel.props.header.left &&
                    <div
                      className="View__header-left-in"
                      style={this.calcHeaderSwipeStyles(panel.props.id).leftIn}
                    >
                      {panel.props.header.left}
                    </div>
                    }
                  </div>
                  <div
                    className="View__header-title"
                    style={this.calcHeaderSwipeStyles(panel.props.id).title}
                  >
                    {panel.props.header.title}
                  </div>
                  <div className="View__header-right">
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
                'View__panel--active': panel.props.id === activePanel,
                'View__panel--prev': panel.props.id === prevPanel,
                'View__panel--next': panel.props.id === nextPanel,
                'View__panel--swipe-back-prev': panel.props.id === this.state.swipeBackPrevPanel,
                'View__panel--swipe-back-next': panel.props.id === this.state.swipeBackNextPanel,
                'View__panel--swipe-back-success': this.state.swipingBackFinish === true,
                'View__panel--swipe-back-failed': this.state.swipingBackFinish === false
              })}
              style={this.calcPanelSwipeStyles(panel.props.id)}
              key={panel.key || panel.props.id || `panel-${i}`}
            >
              <div className="View__panel-in">
                {React.cloneElement(panel, { ref: this.getRef, activePanel, nextPanel })}
              </div>
            </div>
          ))}
        </div>
        {hasPopout && <div className="View__mask" />}
        {hasPopout && <div className="View__popout">{popout}</div>}
      </Touch>
    );
  }
}
