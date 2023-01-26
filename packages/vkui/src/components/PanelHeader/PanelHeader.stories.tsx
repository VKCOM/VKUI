import React from 'react';
import { Meta } from '@storybook/react';
import { PanelHeader, PanelHeaderProps } from './PanelHeader';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { usePlatform } from '../../hooks/usePlatform';
import { View } from '../View/View';
import { Panel } from '../Panel/Panel';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { Avatar } from '../Avatar/Avatar';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { Platform } from '../../lib/platform';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { Counter } from '../Counter/Counter';
import {
  Icon16Dropdown,
  Icon24Done,
  Icon28AddOutline,
  Icon28Notifications,
  Icon28PictureOutline,
  Icon28SettingsOutline,
  Icon28UsersOutline,
} from '@vkontakte/icons';
import { PanelHeaderContent } from '../PanelHeaderContent/PanelHeaderContent';
import { Search } from '../Search/Search';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from '../TabsItem/TabsItem';
import { Div } from '../Div/Div';
import { PanelHeaderContext } from '../PanelHeaderContext/PanelHeaderContext';
import { List } from '../List/List';
import { Cell } from '../Cell/Cell';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Layout/PanelHeader',
  component: PanelHeader,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('PanelHeader'), ...DisableCartesianParam },
  decorators: [withVKUILayout],
} as Meta<PanelHeaderProps>;

export const SimplePanelHeader = () => (
  <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderClose />} after={<Avatar size={36} />}>
        Стартовый экран
      </PanelHeader>
      <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
    </Panel>
  </View>
);

export const PanelHeaderWithCounter = () => {
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
};

export const PanelHeaderWithMultipleIcons = () => (
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
);

export const PanelHeaderWithPanelHeaderContent = () => {
  const platform = usePlatform();

  return (
    <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader
          before={<PanelHeaderBack label={platform === Platform.VKCOM ? 'Назад' : undefined} />}
        >
          <PanelHeaderContent before={<Avatar size={36} />} status="Был в сети вчера">
            Влад Анесов
          </PanelHeaderContent>
        </PanelHeader>
        <Div>PanelHeaderContent</Div>
      </Panel>
    </View>
  );
};

export const PanelHeaderWithSearch = () => {
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
};

export const PanelHeaderWithTabs = () => (
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
);

export const PanelHeaderWithPanelHeaderContext = () => {
  const [contextOpened, setContextOpened] = React.useState(true);
  const [mode, setMode] = React.useState<string | undefined>('all');

  const toggleContext = () => {
    setContextOpened((prev) => !prev);
  };

  const select = (e: React.MouseEvent<HTMLElement>) => {
    const mode = e.currentTarget.dataset.mode;
    setMode(mode);
    requestAnimationFrame(toggleContext);
  };

  return (
    <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader
          before={<PanelHeaderBack />}
          after={
            <PanelHeaderButton>
              <Icon28AddOutline />
            </PanelHeaderButton>
          }
        >
          <PanelHeaderContent
            aside={
              <Icon16Dropdown
                style={{
                  transform: `rotate(${contextOpened ? '180deg' : '0'})`,
                }}
              />
            }
            onClick={toggleContext}
          >
            Communities
          </PanelHeaderContent>
        </PanelHeader>
        <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
          <List>
            <Cell
              before={<Icon28UsersOutline />}
              after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null}
              onClick={select}
              data-mode="all"
            >
              Communities
            </Cell>
            <Cell
              before={<Icon28SettingsOutline />}
              after={
                mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null
              }
              onClick={select}
              data-mode="managed"
            >
              Managed Communities
            </Cell>
          </List>
        </PanelHeaderContext>
        <Div>PanelHeaderContext</Div>
      </Panel>
    </View>
  );
};
