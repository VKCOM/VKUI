import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import './Button.css';

const baseClassName = getClassName('Button');

export default class Button extends React.Component {
  static propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', 'sell', 'buy', 'primary', 'danger']),
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    type: PropTypes.oneOf(['default', 'cell']),
    stretched: PropTypes.bool,

    children: PropTypes.node,
    before: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.any
  };

  static defaultProps = {
    type: 'default',
    component: 'button'
  };

  render () {
    let { className, size, level, type, stretched, children, before, ...restProps } = this.props;

    switch (type) {
      case 'default':
        size = size || 'm';
        level = level || '1';
        stretched = stretched || false;
        break;
      case 'cell':
        level = level || 'primary';
    }

    const classNames = classnames(baseClassName, className, {
      [`Button--size-${size}`]: size,
      [`Button--level-${level}`]: level,
      [`Button--type-${type}`]: type,
      [`Button--stretched`]: stretched
    });

    return (
      <Tappable className={classNames} stopPropagation {...restProps}>
        <div className="Button__in">
          {before && <div className="Button__before">{before}</div>}
          {children && <div className="Button__content">{children}</div>}
        </div>
      </Tappable>
    );
  }
}
