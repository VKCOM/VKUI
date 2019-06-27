import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren } from '../../types/props';

const baseClassName = getClassName('InfoRow');

export interface InfoRowProps extends HasStyleObject, HasChildren {
  title: React.ReactNode;
}

const InfoRow = ({ title, className, children, ...restProps }: InfoRowProps) => (
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
