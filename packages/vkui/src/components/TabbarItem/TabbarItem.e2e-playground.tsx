import { Icon28MessageOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Badge } from '../Badge/Badge';
import { Tabbar, type TabbarProps } from '../Tabbar/Tabbar';
import { TabbarItem, type TabbarItemProps } from './TabbarItem';

export const TabbarItemPlayground = (playgroundProps: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...playgroundProps}
      propSets={[
        {
          mode: ['vertical', 'horizontal'],
          text: ['Message'],
          children: [<Icon28MessageOutline key="icon" />],
          indicator: [undefined, <Badge key="badge" />],
          disabled: [false, true],
        },
        {
          mode: ['horizontal'],
          text: ['Message'],
          children: [<Icon28MessageOutline key="icon" />],
          selected: [true, false],
        },
      ]}
    >
      {(props: TabbarItemProps & Pick<TabbarProps, 'mode'>) => (
        <Tabbar mode={props.mode} style={{ position: 'relative' }}>
          <TabbarItem {...props} />
        </Tabbar>
      )}
    </ComponentPlayground>
  );
};
