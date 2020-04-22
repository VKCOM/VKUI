import React from 'react';
import { classNames } from '../..';
import withAdaptivity, { AdaptivityProps, ViewMode } from '../../hoc/withAdaptivity';

interface NavigationMenuProps extends AdaptivityProps {
  className?: string;
  header?: React.ReactElement;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, header, children, viewMode }) => {
  let modificator = 'mobile';

  if (viewMode >= ViewMode.SMALL_TABLET) {
    modificator = 'tablet';
  };

  if (viewMode >= ViewMode.TABLET) {
    modificator = 'desktop';
  };

  return (
    <section className={classNames('NavigationMenu', className)}>
      <header className={`NavigationMenu__head NavigationMenu__head--${modificator}`}>
        {header}
      </header>
      <nav className={`NavigationMenu__nav NavigationMenu__nav--${modificator}`}>
        {children}
      </nav>
    </section>
  );
};

export default withAdaptivity(NavigationMenu, {
  viewMode: true,
});
