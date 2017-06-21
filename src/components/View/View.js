import './View.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import animate from '../../lib/animate';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID } from '../../lib/platform.js';

const osname = platform();
const baseClassNames = getClassName('View');

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

    if (activePanel !== nextProps.activePanel) {
      const pageYOffset = window.pageYOffset;
      const firstLayerId = this.props.children.find(panel => {
        return panel.props.id === activePanel || panel.props.id === nextProps.activePanel;
      }).props.id;
      const isBack = firstLayerId === nextProps.activePanel;
      const scrolls = Object.assign({}, this.state.scrolls, {
        [activePanel]: pageYOffset
      });

      // Blur inputs on panel transition
      this.blurActiveElement();

      // @TODO Lock overscroll on window
      this.setState({
        visiblePanels: [activePanel, nextProps.activePanel],
        scrolls, isBack
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

    if (!!nextProps.popout && !this.props.popout) {
      this.blurActiveElement();
    }
  }
  blurActiveElement() {
    if (typeof window !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  }
  componentDidUpdate () {
    if (this.state.visiblePanels.length === 2 && !this.state.animated) {
      const scrolls = this.state.scrolls;
      const [ prevPanel, nextPanel ] = this.state.visiblePanels;

      window.requestAnimationFrame(() => {
        this.setState({
          prevPanel: prevPanel,
          nextPanel: nextPanel,
          activePanel: null,
          animated: true
        });
      });
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

        Array.prototype.forEach.call(panels, function(panel) {
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
      const elem = this.refsStore[activePanel];
      const scrollTop = elem.scrollTop;

      if (scrollTop) {
        animate({
          duration: 200,
          timing: n => Math.sqrt(n),
          draw: (val) => {
            elem.scrollTop = scrollTop - val * scrollTop;
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
      <section className={classnames(baseClassNames, modifiers)} style={style}>
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
              onTransitionEnd={panel.props.id === nextPanel ? this.transitionEndHandler : null}
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
      </section>
    );
  }
}
