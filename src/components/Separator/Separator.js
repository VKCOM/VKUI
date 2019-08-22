import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

function Separator ({ className, wide, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classNames(getClassName('Separator'), className, {
        'Separator--wide': wide
      })}
    >
      <div className="Separator__in" />
    </div>
  );
}

Separator.propTypes = {
  className: PropTypes.string,

  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide: PropTypes.bool
};

export default React.memo(Separator);
