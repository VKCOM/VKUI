import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import transitionEvents from '../../lib/transitionEvents';

const baseClassNames = getClassName('HeaderContext');

export default class HeaderContext extends Component {
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

  state = {
    closing: false
  };

  elementRef = React.createRef();

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
    const { children, className, opened, onClose, ...restProps } = this.props;
    const { closing } = this.state;

    return (
      <FixedLayout {...restProps} className={classNames(baseClassNames, {
        'HeaderContext--opened': opened,
        'HeaderContext--closing': closing
      }, className)} vertical="top">
        <div className="HeaderContext__in" ref={this.elementRef}>
          {(opened || closing) && children}
        </div>
        {(opened || closing) && <div onClick={onClose} className="HeaderContext__fade" />}
      </FixedLayout>
    );
  }
}
