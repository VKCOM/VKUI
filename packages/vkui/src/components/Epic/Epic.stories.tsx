import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon28ClipOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
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
import { Epic, type EpicProps } from './Epic';

const story: Meta<EpicProps> = {
  title: 'Navigation/Epic',
  component: Epic,
  parameters: createStoryParameters('Epic', CanvasFullLayout, DisableCartesianParam),
  tags: ['Навигация'],
};

export default story;

type Story = StoryObj<EpicProps>;

const ActiveStoryStyle: React.CSSProperties = {
  backgroundColor: 'var(--vkui--color_background_secondary)',
  borderRadius: 8,
};

export const Example: Story = {
  render: function Render() {
    const platform = usePlatform();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [activeStory, setActiveStory] = React.useState<string>('profile');
    const onStoryChange = (e: React.MouseEvent<HTMLElement>) =>
      setActiveStory(e.currentTarget.dataset.story!);
    const hasHeader = platform !== 'vkcom';

    return (
      <SplitLayout header={hasHeader && <PanelHeader delimiter="none" />} center>
        {viewWidth.tabletPlus && (
          <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
            <Panel>
              {hasHeader && <PanelHeader />}
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
                    label="Новости"
                  >
                    <Icon28NewsfeedOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'services'}
                    data-story="services"
                    label="Сервисы"
                  >
                    <Icon28ServicesOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'messages'}
                    data-story="messages"
                    indicator={
                      <Counter size="s" mode="primary" appearance="accent-red">
                        12
                      </Counter>
                    }
                    label="Сообщения"
                  >
                    <Icon28MessageOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'clips'}
                    data-story="clips"
                    label="Клипы"
                  >
                    <Icon28ClipOutline />
                  </TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'profile'}
                    data-story="profile"
                    indicator={<Badge mode="prominent">Есть обновления</Badge>}
                    label="Профиль"
                  >
                    <Icon28UserCircleOutline />
                  </TabbarItem>
                </Tabbar>
              )
            }
          >
            <View id="feed" activePanel="feed">
              <Panel id="feed">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Новости</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
                </Group>
              </Panel>
            </View>
            <View id="services" activePanel="services">
              <Panel id="services">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сервисы</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder
                    icon={<Icon28ServicesOutline width={56} height={56} />}
                  ></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="messages" activePanel="messages">
              <Panel id="messages">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сообщения</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="clips" activePanel="clips">
              <Panel id="clips">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Клипы</PanelHeader>
                <Group style={{ height: '1000px' }}>
                  <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>
                </Group>
              </Panel>
            </View>
            <View id="profile" activePanel="profile">
              <Panel id="profile">
                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Профиль</PanelHeader>
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
  },
};
