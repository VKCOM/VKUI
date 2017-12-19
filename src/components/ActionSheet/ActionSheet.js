import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './ActionSheet.css';
import { platform, ANDROID, IOS } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';

const osname = platform();

const baseClassNames = getClassName('ActionSheet');
const itemClassNames = getClassName('ActionSheet-Item');

export default class ActionSheet extends React.Component {

  state = {
    closing: false
  };

  static propTypes = {
    title: PropTypes.node,
    text: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    onClose: () => {}
  };

  onClose = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish(this.props.onClose);
  };

  onItemClick = (hander) => () => {
    this.setState({closing: true});
    this.waitTransitionFinish(hander);
  };

  stopPropagation (e) {
    e.stopPropagation();
  }

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
    const { style } = this.props;
    const children = [];
    const hasHeader = osname === IOS && (this.props.title || this.props.text);
    const classNames = classnames(baseClassNames, {
      'ActionSheet--closing': this.state.closing
    });

    const Actions = React.Children.toArray(this.props.children).filter((Child) => Child.props.theme !== 'cancel');

    Actions.forEach((Child, index) => {
      children.push(React.cloneElement(Child, {
        onClick: this.onItemClick(Child.props.onClick)
      }));
      if (osname === IOS && index < Actions.length - 1) children.push(<div key={`separator-${index}`} className="ActionSheet__separator" />);
    });

    let CancelItem = React.Children.toArray(this.props.children).find(Child => Child.props.theme === 'cancel');

    return (
      <PopoutWrapper
        closing={this.state.closing}
        v={ osname === IOS ? 'bottom' : 'center' }
        h="center"
        onClick={ this.onClose }
      >
        <div className={classNames} style={style} ref={el => { this.el = el; }} onClick={this.stopPropagation}>
          <div className="ActionSheet__section">
            <div className="ActionSheet__list">
              { hasHeader &&
                <div className="ActionSheet__header">
                  { this.props.title && <div className="ActionSheet__title">{ this.props.title }</div> }
                  { this.props.text && <div className="ActionSheet__text">{ this.props.text }</div> }
                </div>
              }
              { hasHeader && <div className="ActionSheet__separator" /> }
              { children }
            </div>
          </div>
          { osname === IOS &&
            <div className="ActionSheet__section">
              { React.cloneElement(CancelItem, {
                onClick: this.onItemClick(CancelItem.props.onClick)
              })}
            </div>
          }
        </div>
      </PopoutWrapper>
    );
  }
}

export class ActionSheetItem extends React.Component {

  static propTypes = {
    theme: PropTypes.oneOf(['default', 'destructive', 'cancel']),
    children: PropTypes.node,
    style: PropTypes.object,
    onClick: PropTypes.func
  };

  static defaultProps = {
    theme: 'default'
  };

  render () {
    const classNames = classnames(itemClassNames, {
      [`ActionSheet-Item--${this.props.theme}`]: this.props.theme
    });
    return (
      <Tappable
        onClick={this.props.onClick}
        className={classNames}
        style={this.props.style}
      >
        {this.props.children}
      </Tappable>
    );
  }
}
