import * as React from 'react';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { TabbarItem } from '../TabbarItem/TabbarItem';
import { Tabbar } from './Tabbar';

describe('Tabbar', () => {
  const tabs2 = [
    <TabbarItem key="0" text="Новости">
      <Icon28UserCircleOutline />
    </TabbarItem>,
    <TabbarItem key="1" text="Сервисы">
      <Icon28UserCircleOutline />
    </TabbarItem>,
  ];
  const tabs3 = [
    ...tabs2,
    <TabbarItem key="2" text="Профиль">
      <Icon28UserCircleOutline />
    </TabbarItem>,
  ];
  const longTabs = [
    <TabbarItem key="2" text="Деконструктивизм">
      <Icon28UserCircleOutline />
    </TabbarItem>,
    <TabbarItem key="2" text="Постдеконструктивизм">
      <Icon28UserCircleOutline />
    </TabbarItem>,
    <TabbarItem key="2" text="Пирожки и прочие сладости">
      <Icon28UserCircleOutline />
    </TabbarItem>,
  ];
  const RelTabbar: typeof Tabbar = (props) => (
    <Tabbar {...props} style={{ position: 'relative' }} />
  );
  describeScreenshotFuzz(
    RelTabbar,
    [
      {
        children: [tabs2, tabs3],
      },
      {
        children: [tabs2],
        shadow: [false],
      },
      {
        children: [longTabs],
        mode: ['horizontal', 'vertical', 'auto'],
      },
    ],
    {
      platforms: [Platform.ANDROID, Platform.IOS],
    },
  );
});
