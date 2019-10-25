import React, { Component, RefObject, MouseEvent } from 'react';
import FixedLayout, { FixedLayoutProps } from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import transitionEvents from '../../lib/transitionEvents';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types/props';

export interface HeaderContextProps extends FixedLayoutProps, HasPlatform {
  opened?: boolean;
  onClose: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface HeaderContextState {
  closing?: boolean;
}

class HeaderContext extends Component<HeaderContextProps, HeaderContextState> {
  private elementRef: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.state = {
      closing: false
    };

    this.elementRef = React.createRef();
  }

  static defaultProps = {
    opened: false
  };

  componentDidUpdate (prevProps) {
    if (this.props.opened !== prevProps.opened) {
      if (this.props.opened === false) {
        this.setState({ closing: true });
        this.waitAnimationFinish(this.onAnimationFinish);
      }
    }
  }

  waitAnimationFinish (eventHandler) {
    const eventName = transitionEvents.animationEndEventName;
    const element = this.elementRef.current;

    if (element) {
      element.removeEventListener(eventName, eventHandler);
      element.addEventListener(eventName, eventHandler);
    }
  }

  onAnimationFinish = () => {
    this.setState({ closing: false });
  };

  render () {
    const { children, className, opened, onClose, platform, ...restProps } = this.props;
    const { closing } = this.state;

    return (
      <FixedLayout
        {...restProps}
        className={classNames(getClassName('HeaderContext', platform), {
          'HeaderContext--opened': opened,
          'HeaderContext--closing': closing
        }, className)}
        vertical="top"
      >
        <div className="HeaderContext__in" ref={this.elementRef}>
          {(opened || closing) && children}
        </div>
        {(opened || closing) && <div onClick={onClose} className="HeaderContext__fade" />}
      </FixedLayout>
    );
  }
}

export default withPlatform(HeaderContext);
