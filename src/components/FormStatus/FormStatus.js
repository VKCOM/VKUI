import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';

const baseClassName = getClassName('FormStatus');

const FormStatus = ({ state, title, children, className, dangerouslySetInnerHTML, ...restProps }) => (
  <div {...restProps} className={classNames(baseClassName, { [`FormStatus--${state}`]: state }, className)}>
    {title && <div className="FormStatus__title">{title}</div>}
    {dangerouslySetInnerHTML &&
      <div className="FormStatus__content" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    }
    {children && !dangerouslySetInnerHTML &&
      <div className="FormStatus__content">{children}</div>
    }
  </div>
);

FormStatus.propTypes = {
  state: PropTypes.oneOf(['default', 'error']),
  title: PropTypes.node,
  children: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.object,
  className: PropTypes.string
};

export default FormStatus;

