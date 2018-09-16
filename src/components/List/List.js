import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('List');

const List = ({ className, children, ...restProps }) => (
  <div {...restProps} className={classnames(baseClassNames, className)}>{children}</div>
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
