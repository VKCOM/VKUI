import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import './ButtonNew.css';

const baseClassName = getClassName('ButtonNew');

export default class ButtonNew extends React.Component {

  static propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', 'sell', 'buy', 'primary', 'danger']),
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    type: PropTypes.oneOf(['default', 'cell']),
    stretched: PropTypes.bool,

    children: PropTypes.node,
    before: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'default'
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
      [`ButtonNew--size-${size}`]: size,
      [`ButtonNew--level-${level}`]: level,
      [`ButtonNew--type-${type}`]: type,
      [`ButtonNew--stretched`]: stretched
    });

    return (
      <Tappable className={classNames} stopPropagation {...restProps}>
        <div className="ButtonNew__in">
          {before && <div className="ButtonNew__before">{before}</div>}
          {children && <div className="ButtonNew__content">{children}</div>}
        </div>
      </Tappable>
    );
  }
}
