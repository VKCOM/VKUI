import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';

import { ANDROID, platform } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';

const osname = platform();

const baseClassNames = getClassName('PopoutWrapper');

export default class PopoutWrapper extends React.Component {
  state = {
    opened: false
  };

  static propTypes = {
    hasMask: PropTypes.bool,
    v: PropTypes.oneOf(['top', 'center', 'bottom']),
    h: PropTypes.oneOf(['left', 'center', 'right']),
    closing: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    hasMask: true,
    v: 'center',
    h: 'center',
    closing: false
  };

  componentDidMount () {
    window.addEventListener('touchmove', this.preventTouch, { passive: false });
    this.waitAnimationFinish(this.el, this.onFadeInEnd);
  }

  componentWillUnmount () {
    window.removeEventListener('touchmove', this.preventTouch, { passive: false });
    clearTimeout(this.animationFinishTimeout);
  }

  waitAnimationFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      this.animationFinishTimeout = setTimeout(eventHandler.bind(this), osname === ANDROID ? 300 : 600);
    }
  }

  onFadeInEnd = (e = { manual: true }) => {
    if (e.animationName === 'animation-full-fade-in' || e.manual) {
      this.setState({ opened: true });
    }
  };

  preventTouch = e => e.preventDefault();

  onClick = e => this.state.opened && this.props.onClick && this.props.onClick(e);

  getRef = el => this.el = el;

  render () {
    const { v, h, closing, children, hasMask, onClick, className, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames(baseClassNames, {
        [`PopoutWrapper--v-${v}`]: v,
        [`PopoutWrapper--h-${h}`]: h,
        'PopoutWrapper--closing': closing
      }, className)} onClick={this.onClick} ref={this.getRef}>
        {hasMask && <div className="PopoutWrapper__mask" />}
        <div className="PopoutWrapper__container">{children}</div>
      </div>
    );
  }
}
