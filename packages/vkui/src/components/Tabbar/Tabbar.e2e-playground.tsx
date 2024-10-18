import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { TabbarItem } from '../TabbarItem/TabbarItem';
import { Tabbar, type TabbarProps } from './Tabbar';

const tabs2 = [
  <TabbarItem key="0" label="Новости">
    <Icon28UserCircleOutline />
  </TabbarItem>,
  <TabbarItem key="1" label="Сервисы">
    <Icon28UserCircleOutline />
  </TabbarItem>,
];
const tabs3 = [
  ...tabs2,
  <TabbarItem key="2" label="Профиль">
    <Icon28UserCircleOutline />
  </TabbarItem>,
];
const longTabs = [
  <TabbarItem key="2" label="Деконструктивизм">
    <Icon28UserCircleOutline />
  </TabbarItem>,
  <TabbarItem key="2" label="Постдеконструктивизм">
    <Icon28UserCircleOutline />
  </TabbarItem>,
  <TabbarItem key="2" label="Пирожки и прочие сладости">
    <Icon28UserCircleOutline />
  </TabbarItem>,
];

export const TabbarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [tabs2, tabs3],
        },
        {
          children: [tabs2],
          plain: [true],
        },
        {
          children: [longTabs],
          mode: ['horizontal', 'vertical', 'auto'],
        },
      ]}
    >
      {(props: TabbarProps) => <Tabbar {...props} style={{ position: 'relative' }} />}
    </ComponentPlayground>
  );
};
