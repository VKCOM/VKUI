import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasStyleObject, HasChildren } from '../../types/props';

const baseClassNames = getClassName('List');

interface ListProps extends HasStyleObject, HasChildren {}

const List = ({ className, children, ...restProps }: ListProps) => (
  <div {...restProps} className={classNames(baseClassNames, className)}>
    {children}
  </div>
);

List.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
List.defaultProps = {
  style: {},
  children: ''
};

export default List;
