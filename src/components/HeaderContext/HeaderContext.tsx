import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import FixedLayout from '../FixedLayout/FixedLayout';

import transitionEvents from '../../lib/transitionEvents';
import { HasChildren, HasStyleObject } from '../../types/props';

const baseClassNames = getClassName('HeaderContext');

export interface HeaderContextProps extends HasChildren, HasStyleObject {
  onClose: () => void;
  opened: boolean;
}

export default class HeaderContext extends React.Component<HeaderContextProps> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired
  };

  static defaultProps = {
    opened: false
  };

  closeAnimationTimeout: number = -1;

  el: HTMLDivElement;

  state = {
    closing: false
  };

  componentWillReceiveProps (nextProps) {
    if (nextProps.opened !== this.props.opened) {
      if (nextProps.opened === false) {
        this.setState({ closing: true });
        this.waitAnimationFinish(this.onAnimationFinish);
      } else {
        clearTimeout(this.closeAnimationTimeout);
      }
    }
  }

  componentWillUnmount () {
    clearTimeout(this.closeAnimationTimeout);
  }

  waitAnimationFinish (eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
      this.el.removeEventListener(eventName, eventHandler);
      this.el.addEventListener(eventName, eventHandler);
    } else {
      this.closeAnimationTimeout = window.setTimeout(eventHandler.bind(this), 200);
    }
  }

  onAnimationFinish = () => this.setState({ closing: false });

  getRef = (el: HTMLDivElement) => (this.el = el);

  render () {
    const { children, className, opened, onClose, ...restProps } = this.props;

    return (
      <FixedLayout
        {...restProps}
        className={classNames(
          baseClassNames,
          {
            'HeaderContext--opened': opened,
            'HeaderContext--closing': this.state.closing
          },
          className
        )}
        vertical="top"
      >
        <div className="HeaderContext__in" ref={this.getRef}>
          {(opened || this.state.closing) && children}
        </div>
        {(opened || this.state.closing) && <div onClick={onClose} className="HeaderContext__fade" />}
      </FixedLayout>
    );
  }
}
