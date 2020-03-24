import React, { Component, HTMLAttributes, MouseEvent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { canUseDOM } from '../../lib/dom';

export interface PopoutWrapperProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  hasMask?: boolean;
  alignY?: 'top' | 'center' | 'bottom';
  alignX?: 'left' | 'center' | 'right';
  closing?: boolean;
}

export interface PopoutWrapperState {
  opened: boolean;
}

export type WindowTouchListener = (e: Event) => void;

export type AnimationEndCallback = (e?: AnimationEvent) => void;

export type ClickHandler = (e: MouseEvent<HTMLDivElement>) => void;

class PopoutWrapper extends Component<PopoutWrapperProps, PopoutWrapperState> {
  constructor(props: PopoutWrapperProps) {
    super(props);
    this.state = {
      opened: false,
    };
    this.elRef = React.createRef();
  }

  static defaultProps: PopoutWrapperProps = {
    hasMask: true,
    alignY: 'center',
    alignX: 'center',
    closing: false,
  };

  elRef: React.RefObject<HTMLDivElement>;

  animationFinishTimeout: number;

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
      this.waitAnimationFinish(this.elRef.current, this.onFadeInEnd);
    }
  }

  componentWillUnmount() {
    // Здесь нужен последний аргумент с такими же параметрами, потому что
    // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
    // https://github.com/VKCOM/VKUI/issues/444
    if (canUseDOM) {
      // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
      window.clearTimeout(this.animationFinishTimeout);
    }
  }

  waitAnimationFinish(elem: HTMLDivElement, eventHandler: AnimationEndCallback) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      const { platform } = this.props;
      this.animationFinishTimeout = window.setTimeout(eventHandler, platform === ANDROID ? 300 : 600);
    }
  }

  onFadeInEnd: AnimationEndCallback = (e: AnimationEvent) => {
    if (!e || e.animationName === 'animation-full-fade-in') {
      this.setState({ opened: true });
    }
  };

  preventTouch: WindowTouchListener = (e: Event) => e.preventDefault();

  onClick: ClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (this.state.opened && this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { alignY, alignX, closing, children, hasMask, onClick, className, platform, ...restProps } = this.props;
    const baseClassNames = getClassName('PopoutWrapper', platform);

    return (
      <div
        {...restProps}
        className={classNames(baseClassNames, `PopoutWrapper--v-${alignY}`, `PopoutWrapper--h-${alignX}`, {
          'PopoutWrapper--closing': closing,
        }, className)}
        onClick={this.onClick}
        ref={this.elRef}
      >
        {hasMask && <div className="PopoutWrapper__mask" />}
        <div className="PopoutWrapper__container">{children}</div>
      </div>
    );
  }
}

export default withPlatform(PopoutWrapper);
