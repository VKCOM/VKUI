import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface TabbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
  itemsLayout?: 'vertical' | 'horizontal' | 'auto';
}

const Tabbar: FunctionComponent<TabbarProps> = (props: TabbarProps) => {
  const { className, children, shadow, itemsLayout } = props;
  const platform = usePlatform();

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
    <div
      className={classNames(getClassName('Tabbar', platform), className, `Tabbar--l-${getItemsLayout()}`, {
        'Tabbar--shadow': shadow,
      })}
    >
      {children}
    </div>
  );
};

Tabbar.defaultProps = {
  shadow: true,
};

export default Tabbar;
