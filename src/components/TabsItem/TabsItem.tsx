import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { classNames } from '../../lib/classNames';
import { VKCOM } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { TabsProps, TabsModeContext } from '../Tabs/Tabs';
import Headline from '../Typography/Headline/Headline';
import Subhead from '../Typography/Subhead/Subhead';
import Text from '../Typography/Text/Text';
import './TabsItem.css';

export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
  after?: React.ReactNode;
  selected?: boolean;
}

const TabsItem: React.FC<TabsItemProps> = ({
  children,
  selected,
  after,
  ...restProps
}: TabsItemProps) => {
  const platform = usePlatform();
  const mode: TabsProps['mode'] = React.useContext(TabsModeContext);

  let TypographyComponent = mode === 'buttons' || mode === 'segmented'
    ? Subhead
    : Headline;

  if (platform === VKCOM) {
    TypographyComponent = Text;
  }

  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(getClassName('TabsItem', platform), { 'TabsItem--selected': selected })}
      hasActive={mode === 'segmented'}
      activeMode="TabsItem--active"
      focusVisibleMode={mode === 'segmented' ? 'outside' : 'inside'}
    >
      <TypographyComponent Component="span" vkuiClass="TabsItem__in" weight="medium">{children}</TypographyComponent>
      {hasReactNode(after) && <div vkuiClass="TabsItem__after">{after}</div>}
    </Tappable>
  );
};

TabsItem.defaultProps = {
  selected: false,
};

export default TabsItem;
