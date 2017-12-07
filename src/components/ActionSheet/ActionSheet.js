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
    closing: false,
    opened: false
  };

  static propTypes = {
    title: PropTypes.node,
    text: PropTypes.node,
    cancel: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    onClose: PropTypes.func
  };

  static defaultProps = {
    cancel: 'Отмена',
    onClose: () => {}
  };

  onClose = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish(this.el, this.props.onClose);
  };

  waitTransitionFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), osname === ANDROID ? 200 : 300);
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ opened: true }), osname === ANDROID ? 200 : 300);
  }

  render() {
    const { style } = this.props;
    const children = [];
    const hasHeader = osname === IOS && (this.props.title || this.props.text);
    const classNames = classnames(baseClassNames, {
      'ActionSheet--closing': this.state.closing
    });

    React.Children.forEach(this.props.children, (Child, index) => {
      children.push(React.cloneElement(Child, {
        key: `${index}`,
        onClick: () => {
          this.setState({ closing: true });
          this.waitTransitionFinish(this.el, Child.props.onClick);
        }
      }));
      if (osname === IOS && index < this.props.children.length - 1) children.push(<div key={`separator-${index}`} className="ActionSheet__separator" />)
    });

    return (
      <PopoutWrapper
        closing={this.state.closing}
        v={ osname === IOS ? 'bottom' : 'center' }
        h="center"
        onClick={ () => this.state.opened && this.onClose() }
      >
        <div className={classNames} style={style} ref={ el => this.el = el } onClick={ e => e.stopPropagation() }>
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
          { osname === IOS && this.props.cancel !== false &&
            <div className="ActionSheet__section">
              <ActionSheetItem
                onClick={ this.onClose }
                style={{ fontWeight: 600 }}
              >
                { this.props.cancel }
              </ActionSheetItem>
            </div>
          }
        </div>
      </PopoutWrapper>
    )
  }
}

export class ActionSheetItem extends React.Component {

  static propTypes = {
    theme: PropTypes.oneOf(['primary', 'danger']),
    disabled: PropTypes.bool
  };

  static defaultProps = {
    theme: 'primary'
  };

  render() {
    const classNames = classnames(itemClassNames, {
      [`ActionSheet-Item--${this.props.theme}`]: !this.props.disabled
    });
    return (
      <Tappable
        onClick={ this.props.disabled ? null : this.props.onClick }
        disabled={ this.props.disabled }
        className={ classNames }
        style={ this.props.style }
      >
        { this.props.children }
      </Tappable>
    )
  }
}