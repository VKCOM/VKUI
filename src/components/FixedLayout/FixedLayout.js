import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';

const baseClassNames = getClassName('FixedLayout');

export default class FixedLayout extends React.Component {
  state = {
    position: null,
    top: null
  };

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    vertical: PropTypes.oneOf(['top', 'bottom'])
  };

  static contextTypes = {
    insets: PropTypes.shape({
      bottom: PropTypes.number
    }),
    panel: PropTypes.string,
    document: PropTypes.any,
    hasTabbar: PropTypes.bool
  };

  get document () {
    return this.context.document || document;
  }

  componentDidMount () {
    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount () {
    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart = (e) => {
    let panelScroll = e.detail.scrolls[this.context.panel] || 0;
    this.setState({
      position: 'absolute',
      top: this.el.offsetTop + panelScroll
    });
  };

  onViewTransitionEnd = () => {
    this.setState({
      position: null,
      top: null
    });
  };

  getRef = el => this.el = el;

  render () {
    const { className, children, style, vertical, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
    const paddingBottom = vertical === 'bottom' && this.context.insets && this.context.insets.bottom
      ? this.context.insets.bottom + tabbarPadding
      : null;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classnames(baseClassNames, { [`FixedLayout--${vertical}`]: vertical }, className)}
        style={{ ...style, ...this.state, paddingBottom }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}
