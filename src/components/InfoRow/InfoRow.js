import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('InfoRow');

const InfoRow = ({ title, className, children, ...restProps }) => (
  <div {...restProps} className={classNames(baseClassName, className)}>
    {title && <div className="InfoRow__title">{title}</div>}
    {children && <div>{children}</div>}
  </div>
);

InfoRow.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default InfoRow;
