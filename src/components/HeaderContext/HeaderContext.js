import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import FixedLayout from '../FixedLayout/FixedLayout';

import transitionEvents from '../../lib/transitionEvents';

const baseClassNames = getClassName('HeaderContext');

export default class HeaderContext extends React.Component {
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

  componentWillReceiveProps (nextProps) {
    if (nextProps.opened !== this.props.opened) {
      if (nextProps.opened === false) {
        this.setState({ closing: true });
        this.waitAnimationFinish(this.onAnimationFinish);
      } else {
        clearTimeout(this.closeAnimationTimeiout);
      }
    }
  }

  componentWillUnmount () {
    clearTimeout(this.closeAnimationTimeiout);
  }

  waitAnimationFinish (eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
      this.el.removeEventListener(eventName, eventHandler);
      this.el.addEventListener(eventName, eventHandler);
    } else {
      this.closeAnimationTimeiout = setTimeout(eventHandler.bind(this), 200);
    }
  }

  onAnimationFinish = () => this.setState({ closing: false });

  getRef = el => this.el = el;

  render () {
    const { children, className, opened, onClose, ...restProps } = this.props;

    return (
      <FixedLayout {...restProps} className={classnames(baseClassNames, {
        'HeaderContext--opened': opened,
        'HeaderContext--closing': this.state.closing
      }, className)} vertical="top">
        <div className="HeaderContext__in" ref={this.getRef}>
          {(opened || this.state.closing) && children}
        </div>
        {(opened || this.state.closing) && <div onClick={onClose} className="HeaderContext__fade" />}
      </FixedLayout>
    );
  }
}
