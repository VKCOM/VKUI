
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import transitionEvents from '../../lib/transitionEvents';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';

const baseClassNames = getClassName('Alert');

export default class Alert extends Component {
  state = {};
  element = React.createRef();

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    actionsLayout: PropTypes.oneOf(['vertical', 'horizontal']),
    actions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      /**
       * 'cancel' - iOS only
       */
      style: PropTypes.oneOf(['cancel', 'destructive', 'default'])
    })),
    onClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    actionsLayout: 'horizontal',
    actions: []
  };

  onItemClick = item => () => {
    const { action, autoclose } = item;

    if (autoclose) {
      this.setState({ closing: true });
      this.waitTransitionFinish(() => {
        autoclose && this.props.onClose();
        action && action();
      });
    } else {
      action && action();
    }
  };

  onClose = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish(() => {
      this.props.onClose();
    });
  };

  stopPropagation = e => e.stopPropagation();

  waitTransitionFinish (eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

      this.element.current.removeEventListener(eventName, eventHandler);
      this.element.current.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 200 : 300);
    }
  }

  render () {
    const { actions, actionsLayout, children, className, style, ...restProps } = this.props;
    const { closing } = this.state;

    return (
      <PopoutWrapper
        className={className}
        closing={closing}
        style={style}
        onClick={this.onClose}
      >
        <div {...restProps} ref={this.element} onClick={this.stopPropagation} className={classNames(baseClassNames, {
          'Alert--v': actionsLayout === 'vertical',
          'Alert--h': actionsLayout === 'horizontal',
          'Alert--closing': closing
        })}>
          <div className="Alert__content">{children}</div>
          <footer className="Alert__footer">
            {actions.map((button, i) => (
              <Tappable
                component="button"
                className={classNames('Alert__btn', { [`Alert__btn--${button.style}`]: button.style })}
                onClick={this.onItemClick(button)}
                key={`alert-action-${i}`}
              >
                <span dangerouslySetInnerHTML={{ __html: button.title }} />
              </Tappable>
            ))}
          </footer>
        </div>
      </PopoutWrapper>
    );
  }
}
