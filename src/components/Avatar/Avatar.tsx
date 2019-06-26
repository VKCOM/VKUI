import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { StyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassName = getClassName('Avatar');

export interface AvatarProps extends StyleObject, HasChildren, HasRef<HTMLDivElement> {
  size?: 80 | 72 | 64 | 56 | 48 | 40 | 36 | 32 | 28;
  src?: string;
  type?: 'default' | 'image' | 'app';
  alt?: string;
}

const Avatar = ({ src, size, type, style, className, children, getRootRef, alt, ...restProps }: AvatarProps) => {
  let borderRadius;

  switch (type) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = 4;
      break;
    case 'app':
      borderRadius = Math.floor((size * 10) / 48);
      break;
  }

  return (
    <div className={classNames(baseClassName, className, { [`Avatar--type-${type}`]: true })} ref={getRootRef}>
      <div className="Avatar__in">
        {src ? (
          <img
            {...restProps}
            className="Avatar__img"
            src={src}
            style={{ ...style, width: size, height: size, borderRadius }}
            alt={alt}
          />
        ) : (
          <div {...restProps} className="Avatar__img" style={{ ...style, width: size, height: size, borderRadius }} />
        )}

        {children && (
          <div className="Avatar__children" style={{ width: size, height: size, borderRadius }}>
            {children}
          </div>
        )}
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
