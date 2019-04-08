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
   * Тип счетчика: вторичный или первичный. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  type: PropTypes.oneOf(['secondary', 'primary']),
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Counter.defaultProps = {
  type: 'secondary'
};

export default React.memo(Counter);
