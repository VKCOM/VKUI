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
// 1. Headers
// 2. Android
// 3. Pull to refresh
// 4. Infinite scroll

export default class View extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visiblePanels: [props.activePanel],
      children: [props.children],
      activePanel: props.activePanel
    };
  }
  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired,
    header: PropTypes.object,
    children: PropTypes.node,
    popout: PropTypes.node
  };
  static defaultProps = {
    style: {},
    children: null,
    popout: undefined,
    header: null
  };
  refsStore = {};
  componentWillReceiveProps (nextProps) {
    if (this.state.activePanel !== nextProps.activePanel) {
      const pageYOffset = window.pageYOffset;

      // Blur inputs on panel transition
      if (typeof window !== 'undefined' && document.activeElement) {
        document.activeElement.blur();
      }

      // @TODO Lock overscroll on window
      this.setState({
        visiblePanels: [this.state.activePanel, nextProps.activePanel],
        pageYOffset
      });

      console.log(this.state.activePanel, nextProps.activePanel);
    }
  }
  componentDidUpdate () {
    if (this.state.visiblePanels.length === 2 && !this.state.animated) {
      setTimeout(() => {
        this.setState({
          prevPanel: this.state.visiblePanels[0],
          nextPanel: this.state.visiblePanels[1],
          activePanel: null,
          animated: true
        });

        console.log(this.state.pageYOffset, document.querySelector(`#${this.state.visiblePanels[0]}`));

        // Delegate scrollTop from window
        // @TODO Переделать по-нормальному
        document.querySelector(`#${this.state.visiblePanels[0]}`).parentNode.parentNode.scrollTop = this.state.pageYOffset;
        document.querySelector(`#${this.state.visiblePanels[1]}`).parentNode.parentNode.scrollTop = 0; // @TODO зависит от направления
        window.scrollTo(0, 0);
      }, 100);
    }
  }
  transitionEndHandler = (e) => {
    if (osname !== ANDROID || e.propertyName === 'visibility') {
      this.setState({
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [this.props.activePanel],
        activePanel: this.props.activePanel,
        animated: false
      });

      // reset scrollTop for all panels
      const panels = document.querySelectorAll('.View__panel');

      Array.prototype.forEach.call(panels, function(panel) {
        if (!panel.classList.contains('View__panel--active')) {
          panel.scrollTop = 0;
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
    if (c.container && c.props.id) {
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
    const panels = [].concat(this.props.children).filter(a => !!a);
    const modifiers = {
      'View--header': hasHeader,
      'View--popout': hasPopout,
      'View--animated': this.state.animated
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
                    {panel.props.header.left}
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
                'View__panel--next': panel.props.id === nextPanel,
                'View__panel--hidden': this.state.visiblePanels.indexOf(panel.props.id) === -1
              })}
              onTransitionEnd={this.transitionEndHandler}
              key={panel.key || panel.props.id || `panel-${i}`}
            >
              <div className="View__panel-in">
                {React.cloneElement(panel, { ref: this.getRef, activePanel, prevPanel, nextPanel })}
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
