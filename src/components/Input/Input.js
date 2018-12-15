import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('Input');

export default class Input extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    status: PropTypes.oneOf(['default', 'error', 'verified']),
    getRef: PropTypes.func,
    getRootRef: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  render () {
    const { alignment, status, getRef, className, getRootRef, ...restProps } = this.props;

    return (
      <div className={classnames(baseClassName, {
        [`Input--${alignment}`]: alignment,
        [`Input--s-${status}`]: status
      }, className)} ref={getRootRef}>
        <input {...restProps} className="Input__el" ref={getRef} />
        <div className="Input__border" />
      </div>
    );
  }
}
