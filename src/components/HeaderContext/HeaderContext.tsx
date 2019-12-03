import React, { Component, HTMLAttributes, RefObject } from 'react';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import transitionEvents from '../../lib/transitionEvents';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types/props';

export interface HeaderContextProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  opened: boolean;
  onClose(): void;
}

export interface HeaderContextState {
  closing: boolean;
}

type AnimationHandler = () => void;

class HeaderContext extends Component<HeaderContextProps, HeaderContextState> {
  static defaultProps: Partial<HeaderContextProps> = {
    opened: false,
  };

  state: HeaderContextState = {
    closing: false,
  };

  elementRef: RefObject<HTMLDivElement> = React.createRef();

  componentDidUpdate(prevProps: HeaderContextProps) {
    if (this.props.opened !== prevProps.opened) {
      if (this.props.opened === false) {
        this.setState({ closing: true });
        this.waitAnimationFinish(this.onAnimationFinish);
      }
    }
  }

  waitAnimationFinish(eventHandler: AnimationHandler) {
    const eventName = transitionEvents.animationEndEventName;
    const element = this.elementRef.current;

    if (element) {
      element.removeEventListener(eventName, eventHandler);
      element.addEventListener(eventName, eventHandler);
    }
  }

  onAnimationFinish: AnimationHandler = () => {
    this.setState({ closing: false });
  };

  render() {
    const { children, className, opened, onClose, platform, ...restProps } = this.props;
    const { closing } = this.state;
    const baseClassNames = getClassName('HeaderContext', platform);

    return (
      <FixedLayout {...restProps} className={classNames(baseClassNames, {
        'HeaderContext--opened': opened,
        'HeaderContext--closing': closing,
      }, className)} vertical="top">
        <div className="HeaderContext__in" ref={this.elementRef}>
          {(opened || closing) && children}
        </div>
        {(opened || closing) && <div onClick={onClose} className="HeaderContext__fade" />}
      </FixedLayout>
    );
  }
}

export default withPlatform(HeaderContext);
