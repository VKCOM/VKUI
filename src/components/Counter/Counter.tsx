import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasChildren } from '../../types/props';

const baseClassName = getClassName('Counter');

interface CounterProps extends HasChildren {
  type?: 'secondary' | 'primary' | 'prominent';
}

function Counter ({ type, children }: CounterProps) {
  return (
    <div className={classNames(baseClassName, `Counter--${type}`)}>
      <div className="Counter__in">{children}</div>
    </div>
  );
}

Counter.propTypes = {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  type: PropTypes.oneOf(['secondary', 'primary', 'prominent']),
  children: PropTypes.node
};

Counter.defaultProps = {
  type: 'secondary'
};

export default React.memo(Counter);
