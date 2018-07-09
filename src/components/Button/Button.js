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
    align: PropTypes.oneOf(['left', 'center', 'right']),
    stretched: PropTypes.bool,
    before: PropTypes.node,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.any
  };

  static defaultProps = {
    type: 'default',
    component: 'button',
    align: 'left',
    size: 'm',
    stretched: false
  };

  render () {
    let { className, size, level, type, stretched, align, children, before, ...restProps } = this.props;

    switch (type) {
      case 'default':
        level = level || '1';
        break;
      case 'cell':
        level = level || 'primary';
    }

    const classNames = classnames(baseClassName, className, {
      [`Button--size-${size}`]: type === 'default' && size,
      [`Button--level-${level}`]: level,
      [`Button--type-${type}`]: type,
      [`Button--align-${align}`]: type === 'cell' && align,
      [`Button--stretched`]: type === 'default' && stretched
    });

    return (
      <Tappable {...restProps} className={classNames} stopPropagation>
        <div className="Button__in">
          {before && <div className="Button__before">{before}</div>}
          {children && <div className="Button__content">{children}</div>}
        </div>
      </Tappable>
    );
  }
}
