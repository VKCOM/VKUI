import {
  Icon28ClipOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Platform } from '../../lib/platform';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { Placeholder } from '../Placeholder/Placeholder';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem } from '../TabbarItem/TabbarItem';
import { View } from '../View/View';
import { Epic } from './Epic';

const EpicTabbar = () => {
  return (
    <Tabbar style={{ position: 'relative' }}>
      <TabbarItem onClick={noop} selected={true} data-story="feed" text="Новости">
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem onClick={noop} selected={false} data-story="services" text="Сервисы">
        <Icon28ServicesOutline />
      </TabbarItem>
      <TabbarItem
        onClick={noop}
        selected={false}
        data-story="messages"
        indicator={
          <Counter size="s" mode="prominent">
            12
          </Counter>
        }
        text="Сообщения"
      >
        <Icon28MessageOutline />
      </TabbarItem>
      <TabbarItem onClick={noop} selected={false} data-story="clips" text="Клипы">
        <Icon28ClipOutline />
      </TabbarItem>
      <TabbarItem
        onClick={noop}
        selected={false}
        data-story="profile"
        indicator={<Badge mode="prominent">Есть обновления</Badge>}
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>
  );
};

export const EpicPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {() => (
      <Epic
        activeStory="feed"
        tabbar={props.platform !== Platform.VKCOM ? <EpicTabbar /> : undefined}
      >
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Новости</PanelHeader>
            <Group>
              <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
            </Group>
          </Panel>
        </View>
      </Epic>
    )}
  </ComponentPlayground>
);
