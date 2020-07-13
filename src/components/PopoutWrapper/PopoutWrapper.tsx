import React, { Component, HTMLAttributes, MouseEvent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ANDROID } from '../../lib/platform';
import { animationEvent } from '../../lib/supportEvents';
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

  private animationFinishTimeout: ReturnType<typeof setTimeout>;

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
      clearTimeout(this.animationFinishTimeout);
    }
  }

  waitAnimationFinish(elem: HTMLDivElement, eventHandler: AnimationEndCallback) {
    if (animationEvent.supported) {
      elem.removeEventListener(animationEvent.name, eventHandler);
      elem.addEventListener(animationEvent.name, eventHandler);
    } else {
      clearTimeout(this.animationFinishTimeout);
      this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 200 : 300);
    }
  }

  onFadeInEnd: AnimationEndCallback = (e: AnimationEvent) => {
    if (!e || e.animationName === 'animation-full-fade-in') {
      this.setState({ opened: true });
    }
  };

  preventTouch: WindowTouchListener = (e: Event) => e.preventDefault();

  render() {
    const { alignY, alignX, closing, children, hasMask, className, platform, ...restProps } = this.props;
    const baseClassNames = getClassName('PopoutWrapper', platform);

    return (
      <div
        {...restProps}
        className={classNames(baseClassNames, `PopoutWrapper--v-${alignY}`, `PopoutWrapper--h-${alignX}`, {
          'PopoutWrapper--closing': closing,
          'PopoutWrapper--opened': this.state.opened,
        }, className)}
        ref={this.elRef}
      >
        {hasMask && <div className="PopoutWrapper__mask" />}
        <div className="PopoutWrapper__container">{children}</div>
      </div>
    );
  }
}

export default withPlatform(PopoutWrapper);
