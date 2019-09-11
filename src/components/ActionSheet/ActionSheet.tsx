import React, { Children, Component } from 'react';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import transitionEvents from '../../lib/transitionEvents';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import { HasChildren, HasClassName, HasStyleObject, HasPlatform } from '../../types/props';
import { ANDROID, IOS } from '../../lib/platform';

export interface InsetsInterface {
  bottom?: number
}

export interface ActionSheetProps extends HasStyleObject, HasChildren, HasClassName, HasPlatform {
  /**
   * iOS only
   */
  title?: React.ReactNode,
  /**
   * iOS only
   */
  text?: React.ReactNode,
  onClose(): void,
  /**
   * @ignore
   */
  insets: InsetsInterface
}

export interface ActionSheetState {
  closing: boolean
}

export class ActionSheet extends Component<ActionSheetProps, ActionSheetState> {
  state = {
    closing: false
  };

  el: HTMLDivElement

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
      setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 200 : 300);
    }
  }

  render () {
    const { children, className, title, text, style, insets, platform, ...restProps } = this.props;

    return (
      <PopoutWrapper
        closing={this.state.closing}
        v="bottom"
        h="center"
        className={className}
        style={style}
        onClick={this.onClose}
      >
        <div
          {...restProps}
          ref={this.getRef}
          onClick={this.stopPropagation}
          className={classNames(getClassName('ActionSheet', platform), {
            'ActionSheet--closing': this.state.closing
          })}
        >
          {platform === IOS &&
          <header className="ActionSheet__header">
            {title && <div className="ActionSheet__title">{title}</div>}
            {text && <div className="ActionSheet__text">{text}</div>}
          </header>
          }
          {Children.toArray(children).map((child: React.ReactElement, index, arr) => (
            child && React.cloneElement(child, {
              onClick: this.onItemClick(child.props.onClick, child.props.autoclose),
              style: index === arr.length - 1 && isNumeric(insets.bottom) ? { marginBottom: insets.bottom } : null
            })
          ))}
        </div>
      </PopoutWrapper>
    );
  }
}

export default withPlatform(withInsets(ActionSheet));
