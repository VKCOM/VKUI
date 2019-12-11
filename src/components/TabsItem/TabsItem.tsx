import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface TabsItemProps extends HTMLAttributes<HTMLElement> {
  after?: ReactNode;
  selected?: boolean;
}

const TabsItem: FunctionComponent<TabsItemProps> = ({
  children,
  selected,
  className,
  after,
  ...restProps
}: TabsItemProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      className={classNames(getClassName('TabsItem', platform), { 'TabsItem--selected': selected }, className)}
      activeEffectDelay={platform === IOS ? 0 : ACTIVE_EFFECT_DELAY}
    >
      <div className="TabsItem__in">{children}</div>
      {after && <div className="TabsItem__after">{after}</div>}
    </Tappable>
  );
};

TabsItem.defaultProps = {
  selected: false,
};

export default TabsItem;
