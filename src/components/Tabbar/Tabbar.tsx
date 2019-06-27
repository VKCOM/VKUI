import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { HasClassName, HasChildren } from '../../types/props';

const baseClassName = getClassName('Tabbar');

const getItemsLayout = (
  itemsLayout: 'vertical' | 'horizontal' | 'auto',
  children: React.ReactNode
): 'vertical' | 'horizontal' => {
  switch (itemsLayout) {
    case 'horizontal':
    case 'vertical':
      return itemsLayout;
    default:
      return React.Children.count(children) > 2 ? 'vertical' : 'horizontal';
  }
};

export interface TabbarProps extends HasClassName, HasChildren {
  itemsLayout?: 'vertical' | 'horizontal' | 'auto';
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
  /**
   * @ignore
   */
  insets?: {
    bottom: number;
  };
}

const Tabbar = ({ className, children, shadow, itemsLayout, insets }: TabbarProps) => {
  const exactItemsLayout = getItemsLayout(itemsLayout, children);

  return (
    <div
      className={classNames(baseClassName, className, `Tabbar--l-${exactItemsLayout}`, {
        'Tabbar--shadow': shadow
      })}
      style={{ paddingBottom: isNaN(insets.bottom) ? null : insets.bottom }}
    >
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
