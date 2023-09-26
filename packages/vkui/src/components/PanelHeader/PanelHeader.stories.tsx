import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28Notifications, Icon28PictureOutline, Icon28SettingsOutline } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
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
        <PanelHeader before={<PanelHeaderClose />} after={<Avatar size={36} />}>
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
            before={<PanelHeaderBack label={platform === Platform.VKCOM ? 'Назад' : undefined} />}
            after={
              <PanelHeaderButton
                aria-label="Изображения"
                label={
                  <Counter size="s" mode="prominent" aria-label="Обновлений: ">
                    21
                  </Counter>
                }
              >
                <Icon28PictureOutline />
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
          before={<PanelHeaderBack />}
          after={
            <React.Fragment>
              <PanelHeaderButton
                aria-label="Настройки"
                label={
                  <Counter size="s" mode="prominent" aria-label="Новые настройки: ">
                    3
                  </Counter>
                }
              >
                <Icon28SettingsOutline />
              </PanelHeaderButton>
              <PanelHeaderButton
                aria-label="Уведомления"
                label={
                  <Counter size="s" mode="prominent" aria-label="Уведомлений: ">
                    2
                  </Counter>
                }
              >
                <Icon28Notifications />
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
          <PanelHeader before={platform !== Platform.VKCOM && <PanelHeaderBack />}>
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
        <PanelHeader before={<PanelHeaderBack />}>
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
