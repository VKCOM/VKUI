import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';

const baseClassNames = getClassName('Header');

const Header = ({ className, level, children, aside, getRootRef, ...restProps }) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classnames(baseClassNames, className, { [`Header--level-${level}`]: true })}
    >
      <div className="Header__in">
        <div className="Header__content">{children}</div>
        {aside && <div className="Header__aside">{aside}</div>}
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2']),
  aside: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  getRootRef: PropTypes.func
};

Header.defaultProps = {
  level: '1'
};

export default Header;
