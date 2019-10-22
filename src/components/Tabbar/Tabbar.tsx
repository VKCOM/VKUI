import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';

const baseClassName = getClassName('Tabbar');

const Tabbar = ({ className, children, shadow, itemsLayout, insets }) => {
  const getItemsLayout = () => {
    switch (itemsLayout) {
      case 'horizontal':
      case 'vertical':
        return itemsLayout;
      default:
        return React.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  };

  return (
    <div className={classNames(baseClassName, className, `Tabbar--l-${getItemsLayout()}`, {
      'Tabbar--shadow': shadow
    })} style={{ paddingBottom: isNumeric(insets.bottom) ? insets.bottom : null }}>
      {children}
    </div>
  );
};

Tabbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow: PropTypes.bool,
  itemsLayout: PropTypes.oneOf(['vertical', 'horizontal', 'auto']),
  /**
   * @ignore
   */
  insets: PropTypes.object
};

Tabbar.defaultProps = {
  shadow: true
};

export default withInsets(Tabbar);
