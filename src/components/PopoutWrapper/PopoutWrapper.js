import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import './PopoutWrapper.css';

const baseClassNames = getClassName('PopoutWrapper');

export default class PopoutWrapper extends React.Component {

  static propTypes = {
    hasMask: PropTypes.bool,
    v: PropTypes.oneOf(['top', 'center', 'bottom']),
    h: PropTypes.oneOf(['left', 'center', 'right']),
    closing: PropTypes.bool
  };

  static defaultProps = {
    hasMask: true,
    v: 'center',
    h: 'center',
    closing: false
  };

  render() {
    const containerClassNames = classnames('PopoutWrapper__container', {
      [`PopoutWrapper__container--v-${this.props.v}`]: true,
      [`PopoutWrapper__container--h-${this.props.h}`]: true
    });

    const classNames = classnames(baseClassNames, {
      ['PopoutWrapper--closing']: this.props.closing
    });

    return (
      <div className={classNames} onClick={ this.props.onClick } { ...removeObjectKeys(this.props, ['hasMask', 'v', 'h', 'closing', 'style']) }>
        { this.props.hasMask && <div className="PopoutWrapper__mask" /> }
        <div className="PopoutWrapper__insets">
          <div className={ containerClassNames } style={ this.props.style }>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}