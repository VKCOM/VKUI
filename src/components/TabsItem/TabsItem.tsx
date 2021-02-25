import { FunctionComponent, HTMLAttributes, ReactNode, useContext } from 'react';
import { getClassName } from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import { classNames } from '../../lib/classNames';
import { VKCOM } from '../../lib/platform';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { TabsModeContext } from '../Tabs/Tabs';
import Headline from '../Typography/Headline/Headline';
import Subhead from '../Typography/Subhead/Subhead';
import Text from '../Typography/Text/Text';

export interface TabsItemProps extends HTMLAttributes<HTMLElement> {
  after?: ReactNode;
  selected?: boolean;
}

const TabsItem: FunctionComponent<TabsItemProps> = ({
  children,
  selected,
  after,
  ...restProps
}: TabsItemProps) => {
  const platform = usePlatform();
  const mode = useContext(TabsModeContext);

  const TypographyComponent = platform === VKCOM
    ? Text
    : mode === 'buttons' || mode === 'segmented'
      ? Subhead
      : Headline;

  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(getClassName('TabsItem', platform), { 'TabsItem--selected': selected })}
      hasActive={mode === 'segmented'}
      activeMode="TabsItem--active"
    >
      <TypographyComponent vkuiClass="TabsItem__in" weight="medium">{children}</TypographyComponent>
      {hasReactNode(after) && <div vkuiClass="TabsItem__after">{after}</div>}
    </Tappable>
  );
};

TabsItem.defaultProps = {
  selected: false,
};

export default TabsItem;
