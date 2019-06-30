import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';

const baseClassNames = getClassName('FixedLayout');

class FixedLayout extends React.Component {
  state = {
    position: null,
    top: null
  };

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getRootRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    vertical: PropTypes.oneOf(['top', 'bottom']),
    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  static contextTypes = {
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

  getRef = (element) => {
    this.el = element;

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(element);
      } else {
        getRootRef.current = element;
      }
    }
  };

  render () {
    const { className, children, style, vertical, getRootRef, insets, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
    const paddingBottom = vertical === 'bottom' && !isNaN(insets.bottom) ? insets.bottom + tabbarPadding : null;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classNames(baseClassNames, { [`FixedLayout--${vertical}`]: vertical }, className)}
        style={{ ...style, ...this.state, paddingBottom }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}

export default withInsets(FixedLayout);
