import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';

const baseClassName = getClassName('Avatar');

const Avatar = ({ src, size, type, style, className, children, getRootRef, ...restProps }) => {
  const Component = src ? 'img' : 'div';
  let borderRadius;

  switch (type) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = 4;
      break;
    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return (
    <div className={classnames(baseClassName, className, { [`Avatar--type-${type}`]: true })} ref={getRootRef}>
      <div className="Avatar__in">
        <Component
          {...restProps}
          className="Avatar__img"
          src={src}
          style={{ ...style, width: size, height: size, borderRadius }}
        />
        {children && <div className="Avatar__children" style={{ width: size, height: size, borderRadius }}>{children}</div>}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf([80, 72, 64, 56, 48, 40, 36, 32, 28]),
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'image', 'app']),
  children: PropTypes.node,
  getRootRef: PropTypes.func
};

Avatar.defaultProps = {
  size: 48,
  type: 'default'
};

export default Avatar;

