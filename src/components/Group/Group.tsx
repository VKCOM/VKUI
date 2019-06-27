import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Header from '../Header/Header';
import { HasStyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassNames = getClassName('Group');

export interface GroupProps extends HasStyleObject, HasChildren, HasRef {
  description?: React.ReactNode;
  title?: React.ReactNode;
}

const Group = (props: GroupProps) => {
  const { title, description, className, children, getRootRef, ...restProps } = props;

  return (
    <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
      {title && <Header level="2">{title}</Header>}
      {children && <div className="Group__content">{children}</div>}
      {description && <div className="Group__description">{description}</div>}
    </div>
  );
};

Group.propTypes = {
  style: PropTypes.object,
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.func
};

Group.defaultProps = {
  title: null,
  description: null
};

export default Group;
