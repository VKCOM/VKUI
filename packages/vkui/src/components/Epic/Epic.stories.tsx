import React from 'react';
import { Meta } from '@storybook/react';
import {
  Icon28ClipOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Badge } from '../Badge/Badge';
import { Cell } from '../Cell/Cell';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { Placeholder } from '../Placeholder/Placeholder';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { Tabbar } from '../Tabbar/Tabbar';
import { TabbarItem } from '../TabbarItem/TabbarItem';
import { View } from '../View/View';
import { Epic, EpicProps } from './Epic';

const story: Meta<EpicProps> = {
  title: 'Layout/Epic',
  component: Epic,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Epic'),
    ...DisableCartesianParam,
  },
};

export default story;

const ActiveStoryStyle: React.CSSProperties = {
  backgroundColor: 'var(--vkui--color_background_secondary)',
  borderRadius: 8,
};

export const Example = () => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();
  const [activeStory, setActiveStory] = React.useState<string>('profile');
  const onStoryChange = (e: React.MouseEvent<HTMLElement>) =>
    setActiveStory(e.currentTarget.dataset.story!);
  const isVKCOM = platform !== Platform.VKCOM;

  return (
    <SplitLayout
      header={isVKCOM && <PanelHeader separator={false} />}
      style={{ justifyContent: 'center' }}
    >
      {viewWidth.tabletPlus && (
        <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
          <Panel>
            {isVKCOM && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === 'feed'}
                style={activeStory === 'feed' ? ActiveStoryStyle : undefined}
                data-story="feed"
                onClick={onStoryChange}
                before={<Icon28NewsfeedOutline />}
              >
                feed
              </Cell>
              <Cell
                disabled={activeStory === 'services'}
                style={activeStory === 'services' ? ActiveStoryStyle : undefined}
                data-story="services"
                onClick={onStoryChange}
                before={<Icon28ServicesOutline />}
              >
                services
              </Cell>
              <Cell
                disabled={activeStory === 'messages'}
                style={activeStory === 'messages' ? ActiveStoryStyle : undefined}
                data-story="messages"
                onClick={onStoryChange}
                before={<Icon28MessageOutline />}
              >
                messages
              </Cell>
              <Cell
                disabled={activeStory === 'clips'}
                style={activeStory === 'clips' ? ActiveStoryStyle : undefined}
                data-story="clips"
                onClick={onStoryChange}
                before={<Icon28ClipOutline />}
              >
                clips
              </Cell>
              <Cell
                disabled={activeStory === 'profile'}
                style={activeStory === 'profile' ? ActiveStoryStyle : undefined}
                data-story="profile"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                profile
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'feed'}
                  data-story="feed"
                  text="Новости"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'services'}
                  data-story="services"
                  text="Сервисы"
                >
                  <Icon28ServicesOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'messages'}
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
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'clips'}
                  data-story="clips"
                  text="Клипы"
                >
                  <Icon28ClipOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'profile'}
                  data-story="profile"
                  indicator={<Badge mode="prominent" />}
                  text="Профиль"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
              </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader before={<PanelHeaderBack />}>Сервисы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader before={<PanelHeaderBack />}>Сообщения</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader before={<PanelHeaderBack />}>Клипы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader before={<PanelHeaderBack />}>Профиль</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};
