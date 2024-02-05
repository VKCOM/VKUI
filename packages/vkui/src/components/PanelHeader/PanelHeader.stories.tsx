import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon24GearOutline,
  Icon24NotificationOutline,
  Icon24PictureOutline,
  Icon28Notifications,
  Icon28PictureOutline,
  Icon28SettingsOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { Avatar } from '../Avatar/Avatar';
import { Counter } from '../Counter/Counter';
import { Div } from '../Div/Div';
import { Panel } from '../Panel/Panel';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { Search } from '../Search/Search';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from '../TabsItem/TabsItem';
import { View } from '../View/View';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { PanelHeader, PanelHeaderProps } from './PanelHeader';

const story: Meta<PanelHeaderProps> = {
  title: 'Layout/PanelHeader',
  component: PanelHeader,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;

type Story = StoryObj<PanelHeaderProps>;

export const SimplePanelHeader: Story = {
  render: () => (
    <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
          Стартовый экран
        </PanelHeader>
        <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
      </Panel>
    </View>
  ),
};

export const PanelHeaderWithCounter: Story = {
  render: function Render() {
    const platform = usePlatform();
    return (
      <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader
            before={
              <PanelHeaderBack onClick={noop} label={platform === 'vkcom' ? 'Назад' : undefined} />
            }
            after={
              <PanelHeaderButton
                label={
                  <Counter size="s" mode="prominent">
                    <VisuallyHidden>Новых: </VisuallyHidden>
                    21
                  </Counter>
                }
                onClick={noop}
              >
                <VisuallyHidden>Изображения</VisuallyHidden>
                <AdaptiveIconRenderer
                  IconCompact={Icon24PictureOutline}
                  IconRegular={Icon28PictureOutline}
                />
              </PanelHeaderButton>
            }
          >
            Вторая панель
          </PanelHeader>
          <Div>PanelHeader c before PanelHeaderBack и after PanelHeaderButton</Div>
        </Panel>
      </View>
    );
  },
};

export const PanelHeaderWithMultipleIcons: Story = {
  render: () => (
    <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader
          before={<PanelHeaderBack onClick={noop} />}
          after={
            <React.Fragment>
              <PanelHeaderButton
                label={
                  <Counter size="s" mode="prominent">
                    <VisuallyHidden>Новых: </VisuallyHidden>3
                  </Counter>
                }
                onClick={noop}
              >
                <VisuallyHidden>Настройки</VisuallyHidden>
                <AdaptiveIconRenderer
                  IconCompact={Icon24GearOutline}
                  IconRegular={Icon28SettingsOutline}
                />
              </PanelHeaderButton>
              <PanelHeaderButton
                label={
                  <Counter size="s" mode="prominent">
                    2
                  </Counter>
                }
                onClick={noop}
              >
                <VisuallyHidden>Уведомления</VisuallyHidden>
                <AdaptiveIconRenderer
                  IconCompact={Icon24NotificationOutline}
                  IconRegular={Icon28Notifications}
                />
              </PanelHeaderButton>
            </React.Fragment>
          }
        >
          Две иконки
        </PanelHeader>
        <Div>Несколько иконок</Div>
      </Panel>
    </View>
  ),
};

export const PanelHeaderWithSearch: Story = {
  render: function Render() {
    const platform = usePlatform();

    return (
      <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader before={platform !== 'vkcom' && <PanelHeaderBack onClick={noop} />}>
            <Search />
          </PanelHeader>
          <Div>Search</Div>
        </Panel>
      </View>
    );
  },
};

export const PanelHeaderWithTabs: Story = {
  render: () => (
    <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
          <Tabs>
            <TabsItem selected>Новости</TabsItem>
            <TabsItem>Интересное</TabsItem>
          </Tabs>
        </PanelHeader>
        <Div>Tabs</Div>
      </Panel>
    </View>
  ),
};
