import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import { HasStyleObject, HasChildren } from '../../types/props';

const baseClassNames = getClassName('PopoutWrapper');

export interface PopoutWrapperProps extends HasStyleObject, HasChildren {
  closing?: boolean;
  h?: 'left' | 'center' | 'right';
  hasMask?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  v?: 'top' | 'center' | 'bottom';
}

export default class PopoutWrapper extends React.Component<PopoutWrapperProps> {
  animationFinishTimeout: number;

  el: HTMLDivElement;

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
    window.removeEventListener(
      'touchmove',
      this.preventTouch,
      { passive: false } as any // FIXME
    );
    clearTimeout(this.animationFinishTimeout);
  }

  waitAnimationFinish (elem: HTMLElement, eventHandler: EventListener) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      this.animationFinishTimeout = window.setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 300 : 600);
    }
  }

  onFadeInEnd = (e: Event & { manual: boolean; animationName?: string }) => {
    const manual = e.manual == null ? true : e.manual;

    if (e.animationName === 'animation-full-fade-in' || manual) {
      this.setState({ opened: true });
    }
  };

  preventTouch = e => e.preventDefault();

  onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.state.opened && this.props.onClick) {
      this.props.onClick(e);
    }
  };

  getRef = (el: HTMLDivElement) => (this.el = el);

  render () {
    const { v, h, closing, children, hasMask, onClick, className, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(
          baseClassNames,
          {
            [`PopoutWrapper--v-${v}`]: v,
            [`PopoutWrapper--h-${h}`]: h,
            'PopoutWrapper--closing': closing
          },
          className
        )}
        onClick={this.onClick}
        ref={this.getRef}
      >
        {hasMask && <div className="PopoutWrapper__mask" />}
        <div className="PopoutWrapper__container">{children}</div>
      </div>
    );
  }
}
