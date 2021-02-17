import { FunctionComponent, HTMLAttributes, ReactNode, useContext } from 'react';
import { getClassName } from '../../helpers/getClassName';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import { classNames } from '../../lib/classNames';
import { IOS, VKCOM } from '../../lib/platform';
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
      activeEffectDelay={platform === IOS ? 0 : ACTIVE_EFFECT_DELAY}
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
