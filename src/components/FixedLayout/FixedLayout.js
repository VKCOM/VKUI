import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import './FixedLayout.css';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { transitionEndEventName, transitionStartEventName } from '../View/View';

const baseClassNames = getClassName('FixedLayout');

export default class FixedLayout extends React.Component {

  state = {
    transition: false,
    topOffset: null
  };

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    vertical: PropTypes.oneOf(['top', 'bottom'])
  };

  static contextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    panel: PropTypes.string
  };

  componentWillMount () {
    document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount () {
    document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart = (e) => {
    let panelScroll = e.detail.scrolls[this.context.panel] || 0;
    this.setState({ transition: true, topOffset: this.el.offsetTop + panelScroll });
  };

  onViewTransitionEnd = () => {
    this.setState({ transition: false, topOffset: null });
  };

  render () {
    return (
      <div
        ref={ el => this.el = el }
        {...removeObjectKeys(this.props, ['className', 'children', 'panel', 'vertical'])}
        className={classnames(baseClassNames, {
          [`FixedLayout--${this.props.vertical}`]: true
        }, this.props.className)}
        style={ Object.assign({
          marginTop: this.context.insets && this.context.insets.top,
          marginBottom: this.context.insets && this.context.insets.bottom
        }, this.props.style, this.state.transition ? { position: 'absolute', top: this.state.topOffset } : {}) }
      >
        {this.props.children}
      </div>
    );
  }
}
