import React, { Component, HTMLAttributes, MouseEvent } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { ANDROID, VKCOM } from '../../lib/platform';
import { animationEvent } from '../../lib/supportEvents';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { canUseDOM, withDOM, DOMProps } from '../../lib/dom';

export interface PopoutWrapperProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  hasMask?: boolean;
  fixed?: boolean;
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

class PopoutWrapper extends Component<PopoutWrapperProps & DOMProps, PopoutWrapperState> {
  constructor(props: PopoutWrapperProps) {
    super(props);
    this.state = {
      opened: !props.hasMask,
    };
    this.elRef = React.createRef();
  }

  static defaultProps: PopoutWrapperProps = {
    hasMask: true,
    fixed: true,
    alignY: 'center',
    alignX: 'center',
    closing: false,
  };

  elRef: React.RefObject<HTMLDivElement>;

  private animationFinishTimeout: ReturnType<typeof setTimeout>;

  componentDidMount() {
    if (canUseDOM) {
      this.props.window.addEventListener('touchmove', this.preventTouch, { passive: false });
      this.waitAnimationFinish(this.elRef.current, this.onFadeInEnd);
    }
  }

  componentWillUnmount() {
    // Здесь нужен последний аргумент с такими же параметрами, потому что
    // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
    // https://github.com/VKCOM/VKUI/issues/444
    if (canUseDOM) {
      // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
      this.props.window.removeEventListener('touchmove', this.preventTouch, { passive: false });
      clearTimeout(this.animationFinishTimeout);
    }
  }

  waitAnimationFinish(elem: HTMLDivElement, eventHandler: AnimationEndCallback) {
    if (animationEvent.supported) {
      elem.removeEventListener(animationEvent.name, eventHandler);
      elem.addEventListener(animationEvent.name, eventHandler);
    } else {
      clearTimeout(this.animationFinishTimeout);
      this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID || this.props.platform === VKCOM ? 200 : 300);
    }
  }

  onFadeInEnd: AnimationEndCallback = (e: AnimationEvent) => {
    if (!e || e.animationName === 'vkui-animation-full-fade-in') {
      this.setState({ opened: true });
    }
  };

  preventTouch: WindowTouchListener = (e: Event) => e.preventDefault();

  render() {
    const { alignY, alignX, closing, children, hasMask, fixed, platform, onClick, window, document, ...restProps } = this.props;
    const baseClassNames = getClassName('PopoutWrapper', platform);

    return (
      <div
        {...restProps}
        vkuiClass={classNames(baseClassNames, `PopoutWrapper--v-${alignY}`, `PopoutWrapper--h-${alignX}`, {
          'PopoutWrapper--closing': closing,
          'PopoutWrapper--opened': this.state.opened,
          'PopoutWrapper--fixed': fixed,
          'PopoutWrapper--masked': hasMask,
        })}
        ref={this.elRef}
      >
        <div vkuiClass="PopoutWrapper__container">
          <div
            vkuiClass="PopoutWrapper__overlay"
            onClick={onClick} />
          <div vkuiClass="PopoutWrapper__content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default withPlatform(withDOM<PopoutWrapperProps>(PopoutWrapper));
