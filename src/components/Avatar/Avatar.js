import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Avatar.css';

const baseClassName = getClassName('Avatar');

export const sizes = [80, 72, 64, 56, 48, 40, 36, 32, 28];

const Avatar = ({ src, size, style, className, ...props }) => {
  let Component = src ? 'img' : 'div';

  return (
    <Component
      className={classnames(baseClassName, className)}
      src={ src || null }
      style={{
        width: size,
        height: size,
        ...style
      }}
      {...props}
    />
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(sizes),
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

Avatar.defaultProps = {
  size: 48
};

export default Avatar;

