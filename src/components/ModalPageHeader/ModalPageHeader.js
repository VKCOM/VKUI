import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('ModalPageHeader');

function ModalPageHeader (props) {
  const { className, left, right, children, noShadow, getRef } = props;
  const isPrimitive = typeof children === 'string' || typeof children === 'number';

  return (
    <div className={classNames(baseClassName, className)} ref={getRef}>
      <div className="ModalPageHeader__in">
        <div className="ModalPageHeader__left">
          {left}
        </div>

        <div className="ModalPageHeader__content">
          <div className="ModalPageHeader__content-in">
            {isPrimitive ? <span>{children}</span> : children}
          </div>
        </div>

        <div className="ModalPageHeader__right">
          {right}
        </div>
      </div>

      {!noShadow && <div className="ModalPageHeader__shadow" />}
    </div>
  );
}

ModalPageHeader.propTypes = {
  className: PropTypes.string,

  /**
   * Иконки, отображаемые слева
   */
  left: PropTypes.node,

  /**
   * Иконки, отображаемые справа
   */
  right: PropTypes.node,
  children: PropTypes.node,
  noShadow: PropTypes.bool,
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

ModalPageHeader.defaultProps = {
  noShadow: false
};

export default ModalPageHeader;
