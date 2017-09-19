import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform';
import Touch from '../Touch/Touch';
import Spinner from '../Spinner/Spinner';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

const osname = platform();
const baseClassNames = getClassName('View');
const MAXPULL = 60;

// @TODO
// 2. Pull to refresh
// 3. Infinite scroll

export default class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visiblePanels: [props.activePanel],
      children: [props.children],
      activePanel: props.activePanel,
      scrolls: {},
      on: false
    };
    this.panels = this.getPanels(props.children);
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired,
    header: PropTypes.object,
    children: PropTypes.node,
    popout: PropTypes.node,
    onTransition: PropTypes.func,
    onPull: PropTypes.func
  };
  static defaultProps = {
    style: {},
    children: null,
    popout: undefined,
    header: null
  };
  refsStore = {};
  prevScrollTopValue = 0;
  startShift = null;
  pulled = false;
  started = false;

  componentDidMount () {
    if (this.props.onPull) {
      window.addEventListener('scroll', this.onScroll);
      this.scrollListener = true;
    }
  }

  componentWillReceiveProps (nextProps) {
    const activePanel = this.state.activePanel;

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

    if (this.props.children !== nextProps.children) {
      this.panels = this.getPanels(nextProps.children);
    }

    // Panel transition
    if (activePanel !== nextProps.activePanel) {
      pageYOffset = pageYOffset || window.pageYOffset;

      const firstLayer = this.panels.filter(panel => {
        return panel.id === activePanel || panel.id === nextProps.activePanel;
      })[0];
      const isBack = firstLayer && firstLayer.id === nextProps.activePanel;

      scrolls = scrolls || Object.assign({}, this.state.scrolls, {
        [activePanel]: pageYOffset
      });

      // Blur inputs on panel transition
      this.blurActiveElement();

      // @TODO Lock overscroll on window
      this.setState({
        visiblePanels: [activePanel, nextProps.activePanel],
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
  }

  componentDidUpdate () {
    const scrolls = this.state.scrolls;

    if (this.state.visiblePanels.length === 2 && !this.state.animated) {
      const [ prevPanel, nextPanel ] = this.state.visiblePanels;

      requestAnimationFrame(() => {
        this.setState({
          prevPanel: prevPanel,
          nextPanel: nextPanel,
          activePanel: null,
          animated: true
        });
      });
    }

    // Popout disappearance: restore scroll
    if (!this.props.popout && scrolls[this.state.activePanel]) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrolls[this.state.activePanel]);
      });
    }

    if (this.props.onPull && !this.scrollListener) {
      window.addEventListener('scroll', this.onScroll);
      this.scrollListener = true;
    }

    if (!this.props.onPull && this.scrollListener) {
      window.removeEventListener('scroll', this.onScroll);
      this.scrollListener = false;
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

  transitionEndHandler = (e) => {
    if (osname !== ANDROID || e.propertyName === 'visibility') {
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
  }

  onMove = (e) => {
    const { onPull } = this.props;

    if (!onPull || this.pulled) {
      return;
    }

    const scroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (this.prevScrollTopValue >= 0 && scroll <= 0 && this.startShift !== null) {
      this.startShift = e.shiftY;
    }

    if (scroll <= 0 && e.shiftY >= 0) {
      this.started = true;

      const progress = Math.abs(this.startShift - e.shiftY) / MAXPULL;
      let shift = progress * MAXPULL;

      if (progress >= 1) {
        shift = Math.min(MAXPULL + (0.2 * MAXPULL * (progress - 1)), 2 * MAXPULL);
      }

      const state = {
        shift: shift,
        progress: Math.min(Math.round(progress * 100), 100),
        pullStyles: {
          transform: `translate3d(0, ${shift}px, 0)`,
          transition: 'none'
        },
        styles: osname === IOS ? {
          transform: `translate3d(0, ${shift}px, 0)`,
          transition: 'none'
        } : {}
      };

      this.setState(state);
      this.prevScrollTopValue = scroll;
      e.originalEvent.preventDefault();
    }
  }

  onEnd = (e) => {
    if (this.started) {
      const initialState = {
        on: false,
        shift: undefined,
        progress: null,
        pullStyles: {
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        },
        styles: osname === IOS ? {
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        } : {}
      };

      const progress = Math.abs(this.startShift - e.shiftY) / MAXPULL;
      const on = progress >= 1;

      this.startShift = null;

      this.setState({
        on: on,
        progress: !on ? Math.min(Math.round(progress * 100), 100) : null,
        pullStyles: {
          transform: `translate3d(0, ${on ? MAXPULL : 0}px, 0)`,
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        },
        styles: osname === IOS ? {
          transform: `translate3d(0, ${on ? MAXPULL : 0}px, 0)`,
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        } : {}
      });

      if (on) {
        this.pulled = true;
        this.props.onPull().then(() => {
          this.setState(initialState);
          this.pulled = false;
        });
      }

      this.started = false;
    }
  }

  onScroll = () => {
    // this.setState({ over: scroll });

    // if (this.props.onPull && !this.pressed && this.pulled) {
    //   const scroll = document.body.scrollTop || document.documentElement.scrollTop;

    //   if (scroll <= 0 && Math.abs(scroll) <= MAXPULL && !this.state.fixed) {
    //     console.time('qwe');
    //     this.setState({
    //       fixed: true
    //     });
    //     window.scrollTo(0, 0);
    //     console.timeEnd('qwe');
    //   }
    // }

    // если отпустили (нет жеста и отрицательный скролл), то смотрим на координату
    // если уже не вставили в DOM и abs(координата) <= maxpull фиксируем спиннер, вставляем заглушку, скроллим мгновенно до нуля
  }

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
  }

  getRef = (c) => {
    if (c && c.container && c.id) {
      let el = c;

      while (el.container) {
        el = el.container;
      }

      this.refsStore[c.id] = el;
    }
  };

  getPanels = (panels) => {
    return []
      .concat(panels)
      .reduce((acc, item) => acc.concat(item), [])
      .map((item) => Object.assign({}, item, {
          id: item.props.id || item.key
      }));
  };

  render () {
    const { style, popout, header, onPull } = this.props;
    const { prevPanel, nextPanel, activePanel } = this.state;
    const hasPopout = !!popout;
    const hasHeader = header !== null;
    const panels = this.panels.filter(panel => this.state.visiblePanels.indexOf(panel.id) > -1);
    const modifiers = {
      'View--header': hasHeader,
      'View--popout': hasPopout,
      'View--animated': this.state.visiblePanels.length === 2
    };
    const panelActive = panels.filter(panel => panel.id === activePanel)[0];
    const headerClassName = panelActive &&
      panelActive.props &&
      panelActive.props.header &&
      panelActive.props.header.className;
    let Component = 'section';
    let componentProps = {};
    // let spinnerStyles = {};
    // let spinnerProgress = 0;

    if (onPull) {
      Component = Touch;
      componentProps = {
        onMove: this.onMove,
        onEnd: this.onEnd,
        component: 'section'
      };
      // spinnerProgress = !pullSpinner.on ? pullSpinner.progress : null;
      // spinnerStyles = {
      //   opacity: !pullSpinner.on ? (pullSpinner.progress || 0) / 100 : 1
      // }
    }

    return (
      <Component
        className={classnames(baseClassNames, modifiers)}
        style={style}
        {...componentProps}
      >
        {hasHeader && (
          <div className={classnames('View__header', headerClassName)} onClick={this.onHeaderClick}>
            <div className="View__header-in">
              {panels.map((panel, i) => (
                <div
                  className={classnames('View__header-item', {
                    'View__header-item--active': panel.id === activePanel,
                    'View__header-item--prev': panel.id === prevPanel,
                    'View__header-item--next': panel.id === nextPanel
                  })}
                  key={panel.key || panel.id || `panel-header-${i}`}
                >
                  <div className="View__header-left">
                    <div className="View__header-icon">{panel.props.header.icon}</div>
                    <div className="View__header-left-in">{panel.props.header.left}</div>
                  </div>
                  <div className="View__header-title">
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
                'View__panel--active': panel.id === activePanel,
                'View__panel--prev': panel.id === prevPanel,
                'View__panel--next': panel.id === nextPanel
              })}
              onTransitionEnd={panel.id === nextPanel ? this.transitionEndHandler : null}
              key={panel.key || panel.id || `panel-${i}`}
            >
              {onPull && (
                <div className={'View__top'} style={this.state.pullStyles || {}}>
                  <Spinner
                    size={osname === IOS ? 27 : 25}
                    strokeWidth={3}
                    on={this.state.on}
                    progress={!this.state.on ? this.state.progress : null}
                  />
                </div>
              )}
              <div className="View__panel-in" style={this.state.pullStyles}>
                {React.cloneElement(panel, { ref: this.getRef, activePanel, nextPanel })}
              </div>
            </div>
          ))}
        </div>
        {hasPopout && <div className="View__mask" />}
        {hasPopout && <div className="View__popout">{popout}</div>}
      </Component>
    );
  }
}
