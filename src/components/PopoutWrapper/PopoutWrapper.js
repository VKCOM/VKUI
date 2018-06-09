import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import './PopoutWrapper.css';
import {ANDROID, platform} from '../../lib/platform';

const osname = platform();

const baseClassNames = getClassName('PopoutWrapper');

export default class PopoutWrapper extends React.Component {
  state = {
    opened: false
  };

  static propTypes = {
    hasMask: PropTypes.bool,
    v: PropTypes.oneOf(['top', 'center', 'bottom']),
    h: PropTypes.oneOf(['left', 'center', 'right']),
    closing: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    hasMask: true,
    v: 'center',
    h: 'center',
    closing: false
  };

  componentDidMount () {
    // TODO add "animationend" event instead of setTimeout
    window.addEventListener('touchmove', this.preventTouch, { passive: false });
    this.openTimeout = setTimeout(() => this.setState({ opened: true }), osname === ANDROID ? 200 : 300);
  }

  componentWillUnmount () {
    clearTimeout(this.openTimeout);
    window.removeEventListener('touchmove', this.preventTouch, { passive: false });
  }

  preventTouch = (e) => e.preventDefault();

  onClick = (e) => {
    if (this.state.opened) {
      this.props.onClick && this.props.onClick(e);
    }
  };

  render () {
    const containerClassNames = classnames('PopoutWrapper__container', {
      [`PopoutWrapper__container--v-${this.props.v}`]: true,
      [`PopoutWrapper__container--h-${this.props.h}`]: true
    });

    const classNames = classnames(baseClassNames, {
      'PopoutWrapper--closing': this.props.closing
    });

    return (
      <div className={classNames} onClick={this.onClick} {...removeObjectKeys(this.props, ['hasMask', 'v', 'h', 'closing', 'style', 'onClick'])}>
        { this.props.hasMask && <div className="PopoutWrapper__mask" /> }
        <div className={containerClassNames} style={this.props.style}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
