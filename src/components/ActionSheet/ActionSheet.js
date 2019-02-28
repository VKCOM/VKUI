import React, { Children } from 'react';
import PropTypes from 'prop-types';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { platform, ANDROID, IOS } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';

const osname = platform();

const baseClassNames = getClassName('ActionSheet');

export default class ActionSheet extends React.Component {
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
    className: PropTypes.string
  };

  static contextTypes = {
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
      setTimeout(eventHandler.bind(this), osname === ANDROID ? 200 : 300);
    }
  }

  render () {
    const { children, className, title, text, style, ...restProps } = this.props;

    return (
      <PopoutWrapper
        closing={this.state.closing}
        v={osname === IOS ? 'bottom' : 'center'}
        h="center"
        className={className}
        style={style}
        onClick={this.onClose}
      >
        <div {...restProps} ref={this.getRef} onClick={this.stopPropagation} className={classNames(baseClassNames, {
          'ActionSheet--closing': this.state.closing
        })}>
          {osname === IOS &&
          <header className="ActionSheet__header">
            {title && <div className="ActionSheet__title">{title}</div>}
            {text && <div className="ActionSheet__text">{text}</div>}
          </header>
          }
          {Children.map(children, (Child, index) => (
            Child && React.cloneElement(Child, {
              onClick: this.onItemClick(Child.props.onClick, Child.props.autoclose),
              style: index === children.length - 1 && this.context.insets ? { marginBottom: this.context.insets.bottom } : null
            })
          ))}
        </div>
      </PopoutWrapper>
    );
  }
}
