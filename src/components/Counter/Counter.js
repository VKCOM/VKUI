import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';

const baseClassName = getClassName('Counter');

function Counter ({ type, children }) {
  return (
    <div className={classNames(baseClassName, `Counter--${type}`)}>
      <div className="Counter__in">
        {children}
      </div>
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
