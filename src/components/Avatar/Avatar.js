import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Avatar.css';

const baseClassName = getClassName('Avatar');

export const sizes = [80, 72, 64, 56, 48, 40, 36, 32, 28];

const Avatar = ({ src, size, style, className, children, ...props }) => {
  let Component = src ? 'img' : 'div';

  return (
    <div className={classnames(baseClassName, className)}>
      <Component
        className="Avatar__img"
        src={ src }
        style={{
          width: size,
          height: size,
          ...style
        }}
        {...props}
      >
        {src ? null : children}
      </Component>
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf([80, 72, 64, 56, 48, 40, 36, 32, 28]),
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

Avatar.defaultProps = {
  size: 48
};

export default Avatar;

