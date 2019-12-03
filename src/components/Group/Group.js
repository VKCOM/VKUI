import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassNames = getClassName('Group');

const Group = (props) => {
  const { header, description, className, children, getRootRef, ...restProps } = props;

  return (
    <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
      {header}
      {children && <div className="Group__content">{children}</div>}
      {description && <div className="Group__description">{description}</div>}
    </div>
  );
};

Group.propTypes = {
  style: PropTypes.object,
  header: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Group;
