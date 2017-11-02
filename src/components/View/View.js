import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import transitionEvents from '../../lib/transitionEvents';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID } from '../../lib/platform';
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
      scrolls: {}
    };
  }

  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired,
    header: PropTypes.object,
    children: PropTypes.node,
    popout: PropTypes.node,
    onTransition: PropTypes.func
  };
  static defaultProps = {
    style: {},
    children: null,
    popout: undefined,
    header: null
  };
  refsStore = {};

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

    // Panel transition
    if (activePanel !== nextProps.activePanel) {
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
        }, () => {
          const nextPanelElement = this.pickPanel(nextPanel);

          if (transitionEvents.supported) {
            const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

            nextPanelElement.removeEventListener(eventName, this.transitionEndHandler);
            nextPanelElement.addEventListener(eventName, this.transitionEndHandler);
          } else {
            setTimeout(this.transitionEndHandler, osname === ANDROID ? 300 : 600);
          }
        });
      });
    }

    // Popout disappearance: restore scroll
    if (!this.props.popout && scrolls[this.state.activePanel]) {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrolls[this.state.activePanel]);
      });
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
    if (e.propertyName === 'visibility') {
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
    if (c && c.container && c.props.id) {
      let el = c;

      while (el.container) {
        el = el.container;
      }

      this.refsStore[c.props.id] = el;
    }
  }

  render () {
    const { style, popout, header } = this.props;
    const { prevPanel, nextPanel, activePanel } = this.state;
    const hasPopout = !!popout;
    const hasHeader = header !== null;
    const panels = [].concat(this.props.children).filter(panel => this.state.visiblePanels.indexOf(panel.props.id) > -1);
    const modifiers = {
      'View--header': hasHeader,
      'View--popout': hasPopout,
      'View--animated': this.state.visiblePanels.length === 2
    };

    return (
      <Touch
        className={classnames(baseClassNames, modifiers)}
        style={style}
        component="section"
      >
        {hasHeader && (
          <div className="View__header" onClick={this.onHeaderClick}>
            <div className="View__header-in">
              {panels.map((panel, i) => (
                <div
                  className={classnames('View__header-item', {
                    'View__header-item--active': panel.props.id === activePanel,
                    'View__header-item--prev': panel.props.id === prevPanel,
                    'View__header-item--next': panel.props.id === nextPanel
                  })}
                  key={panel.key || panel.props.id || `panel-header-${i}`}
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
                'View__panel--active': panel.props.id === activePanel,
                'View__panel--prev': panel.props.id === prevPanel,
                'View__panel--next': panel.props.id === nextPanel
              })}
              key={panel.key || panel.props.id || `panel-${i}`}
            >
              <div className="View__panel-in" style={this.state.pullStyles}>
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
