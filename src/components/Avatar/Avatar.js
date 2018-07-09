import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Avatar.css';

const baseClassName = getClassName('Avatar');

const Avatar = ({ src, size, style, className, children, ...restProps }) => {
  let Component = src ? 'img' : 'div';

  return (
    <div className={classnames(baseClassName, className)} style={style}>
      <Component
        {...restProps}
        className="Avatar__img"
        src={src}
        style={{ width: size, height: size }}
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
  /**
   * children рисуется только в том случае, если не передан src. Такой подход может быть полезен при отрисовке
   * плейсхолдеров или при использовании backgroundImage вместе src.
   */
  children: PropTypes.node
};

Avatar.defaultProps = {
  size: 48
};

export default Avatar;

