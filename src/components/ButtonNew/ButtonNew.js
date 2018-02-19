import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import './ButtonNew.css';

const baseClassName = getClassName('ButtonNew');

export default class ButtonNew extends React.Component {

  static propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 'sell', 'buy']),
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    type: PropTypes.oneOf(['default', 'danger']),
    appearance: PropTypes.oneOf(['default', 'cell']),
    stretched: PropTypes.bool,
    children: PropTypes.node,
    before: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    level: 1,
    size: 'm',
    type: 'default',
    appearance: 'default',
    stretched: false
  };

  render () {
    const { className, size, level, type, appearance, stretched, children, before, ...restProps } = this.props;

    const classNames = classnames(baseClassName, className, {
      [`ButtonNew--size-${size}`]: true,
      [`ButtonNew--level-${level}`]: true,
      [`ButtonNew--type-${type}`]: true,
      [`ButtonNew--app-${appearance}`]: true,
      [`ButtonNew--stretched`]: stretched
    });

    return (
      <Tappable className={classNames} {...restProps}>
        <div className="ButtonNew__in">
          {before && <div className="ButtonNew__before">{before}</div>}
          {children && <div className="ButtonNew__content">{children}</div>}
        </div>
      </Tappable>
    );
  }
}
