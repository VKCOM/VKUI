import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';

const baseClassNames = getClassName('Header');

function mapOldLevel (level) {
  switch (level) {
    case '1':
      return 'primary';
    case '2':
      return 'secondary';
    default:
      return level;
  }
}

const Header = ({ className, level, children, indicator, aside, getRootRef, ...restProps }) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(baseClassNames, className, { [`Header--level-${mapOldLevel(level)}`]: true })}
    >
      <div className="Header__in">
        <div className="Header__content">{children}</div>
        {indicator && <div className="Header__indicator">{indicator}</div>}
        {aside && <div className="Header__aside">{aside}</div>}
      </div>
    </div>
  );
};

Header.mapOldLevel = mapOldLevel;

Header.propTypes = {
  className: PropTypes.string,
  /**
   * Значения `1` и `2` устарели. Вместо них используйте `primary` и `secondary`. Маппинг на новые значения находится в
   * статическом методе `Header.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
   */
  level: PropTypes.oneOf(['1', '2', 'primary', 'secondary']),
  indicator: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};

Header.defaultProps = {
  level: 'primary'
};

export default Header;
