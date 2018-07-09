import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import './FixedLayout.css';
import classnames from '../../lib/classnames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';

const baseClassNames = getClassName('FixedLayout');

export default class FixedLayout extends React.Component {
  state = {
    transition: false,
    topOffset: null,
    paddings: {}
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
    panel: PropTypes.string,
    document: PropTypes.any
  };

  get document () {
    return this.context.document || document;
  }

  get insets () {
    return this.context.insets || {};
  }

  componentDidMount () {
    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount () {
    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  setPaddings (callback) {
    if (this.props.vertical === 'bottom') {
      let paddingBottom = parseInt(window.getComputedStyle(this.el).padding);

      this.setState({
        paddings: { paddingBottom: paddingBottom + (this.insets.bottom || 0) }
      }, () => callback && callback());
    } else {
      callback && callback();
    }
  }

  onViewTransitionStart = (e) => {
    let panelScroll = e.detail.scrolls[this.context.panel] || 0;
    this.setPaddings(() => {
      this.setState({ transition: true, topOffset: this.el.offsetTop + panelScroll });
    });
  };

  onViewTransitionEnd = () => {
    this.setState({ transition: false, topOffset: null });
  };

  getRef = el => this.el = el;

  render () {
    const { className, children, style, vertical, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classnames(baseClassNames, { [`FixedLayout--${vertical}`]: vertical }, className)}
        style={{
          ...style,
          ...this.state.paddings,
          ...(this.state.transition ? { position: 'absolute', top: this.state.topOffset } : {})
        }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}
