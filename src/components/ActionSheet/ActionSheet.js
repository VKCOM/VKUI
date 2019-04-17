import React, { Children } from 'react';
import PropTypes from 'prop-types';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import withInsets from '../../hoc/withInsets';

const baseClassNames = getClassName('ActionSheet');

class ActionSheet extends React.Component {
  state = {
    closing: false
  };

  static propTypes = {
    /**
     * iOS only
     */
    title: PropTypes.node,
    /**
     * iOS only
     */
    text: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  onClose = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish(this.props.onClose);
  };

  onItemClick = (action, autoclose) => (event) => {
    event.persist();

    if (autoclose) {
      this.setState({ closing: true });
      this.waitTransitionFinish(() => {
        autoclose && this.props.onClose();
        action && action(event);
      });
    } else {
      action && action(event);
    }
  };

  getRef = el => this.el = el;

  stopPropagation = e => e.stopPropagation();

  waitTransitionFinish (eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

      this.el.removeEventListener(eventName, eventHandler);
      this.el.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 200 : 300);
    }
  }

  render () {
    const { children, className, title, text, style, insets, ...restProps } = this.props;

    return (
      <PopoutWrapper
        closing={this.state.closing}
        v={IS_PLATFORM_IOS ? 'bottom' : 'center'}
        h="center"
        className={className}
        style={style}
        onClick={this.onClose}
      >
        <div {...restProps} ref={this.getRef} onClick={this.stopPropagation} className={classNames(baseClassNames, {
          'ActionSheet--closing': this.state.closing
        })}>
          {IS_PLATFORM_IOS &&
          <header className="ActionSheet__header">
            {title && <div className="ActionSheet__title">{title}</div>}
            {text && <div className="ActionSheet__text">{text}</div>}
          </header>
          }
          {Children.toArray(children).map((Child, index, arr) => (
            Child && React.cloneElement(Child, {
              onClick: this.onItemClick(Child.props.onClick, Child.props.autoclose),
              style: index === arr.length - 1 && insets.bottom ? { marginBottom: insets.bottom } : null
            })
          ))}
        </div>
      </PopoutWrapper>
    );
  }
}

export default withInsets(ActionSheet);
