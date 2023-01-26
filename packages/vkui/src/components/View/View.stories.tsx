import React from 'react';
import { Meta } from '@storybook/react';
import vkBridge from '@vkontakte/vk-bridge';
import { View, ViewProps } from './View';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Group } from '../Group/Group';
import { CellButton } from '../CellButton/CellButton';
import { Placeholder } from '../Placeholder/Placeholder';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { SplitCol } from '../SplitCol/SplitCol';
import { Panel } from '../Panel/Panel';
import { Alert } from '../Alert/Alert';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';
import { Platform } from '../../lib/platform';

export default {
  title: 'Layout/View',
  component: View,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<ViewProps>;

const MainPanelContent = ({ onProfileClick }: { onProfileClick: () => void }) => {
  return (
    <React.Fragment>
      <PanelHeader>Main</PanelHeader>
      <Group>
        <CellButton onClick={onProfileClick}>Профиль</CellButton>
      </Group>
    </React.Fragment>
  );
};

const ProfilePanelContent = ({ onSettingsClick }: { onSettingsClick: () => void }) => {
  return (
    <React.Fragment>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Placeholder>Теперь свайпните от левого края направо, чтобы вернуться</Placeholder>
        <Div style={{ height: 50, background: '#eee' }} data-vkui-swipe-back={false}>
          Здесь свайпбек отключен
        </Div>
      </Group>
      <Group>
        <CellButton onClick={onSettingsClick}>Настройки</CellButton>
      </Group>
    </React.Fragment>
  );
};

const SettingsPanelContent = ({
  name,
  onChangeName,
}: {
  name: string;
  onChangeName: (val: string) => void;
}) => {
  const handleNameChange = React.useCallback(
    (event) => {
      onChangeName(event.target.value.trim());
    },
    [onChangeName],
  );

  return (
    <React.Fragment>
      <PanelHeader>Настройки</PanelHeader>
      <Group>
        <Placeholder>Пример с блокированием свайпбека пока не будет выполнено условие</Placeholder>
        <FormItem top="Имя">
          <Input value={name} onChange={handleNameChange} />
        </FormItem>
      </Group>
    </React.Fragment>
  );
};

export const SwipeBlockExample = () => {
  const [history, setHistory] = React.useState(['main']);
  const activePanel = history[history.length - 1];
  const isFirst = history.length === 1;

  const go = React.useCallback((panel) => {
    setHistory((prevHistory) => [...prevHistory, panel]);
  }, []);
  const goBack = React.useCallback(() => {
    setHistory((prevHistory) => prevHistory.slice(0, -1));
  }, []);

  const handleProfileClick = React.useCallback(() => go('profile'), [go]);
  const handleSettingsClick = React.useCallback(() => go('settings'), [go]);

  React.useEffect(() => {
    // В стандартных мини-приложениях делайте так:
    void vkBridge.send('VKWebAppSetSwipeSettings', { history: isFirst });
    // В мини-приложениях `WebviewType.INTERNAL` делайте так:
    void vkBridge.send(isFirst ? 'VKWebAppEnableSwipeBack' : 'VKWebAppDisableSwipeBack');
  }, [isFirst]);

  const [userName, setUserName] = React.useState('');
  const [popoutWithRestriction, setPopoutWithRestriction] = React.useState<React.ReactNode | null>(
    null,
  );

  const handleSwipeBackStartForPreventIfNeeded = React.useCallback(
    (activePanel) => {
      if (activePanel === 'settings') {
        if (userName !== '') {
          return;
        }

        setPopoutWithRestriction(
          <Alert
            header="Поле Имя не заполнено"
            text="Пожалуйста, заполните его."
            onClose={() => setPopoutWithRestriction(null)}
          />,
        );

        return 'prevent';
      }
      return;
    },
    [userName],
  );

  return (
    <ConfigProviderOverride platform={Platform.IOS} isWebView>
      <SplitLayout popout={popoutWithRestriction}>
        <SplitCol>
          <View
            history={history}
            activePanel={activePanel}
            onSwipeBackStart={handleSwipeBackStartForPreventIfNeeded}
            onSwipeBack={goBack}
          >
            <Panel id="main">
              <MainPanelContent onProfileClick={handleProfileClick} />
            </Panel>
            <Panel id="profile">
              <ProfilePanelContent onSettingsClick={handleSettingsClick} />
            </Panel>
            <Panel id="settings">
              <SettingsPanelContent name={userName} onChangeName={setUserName} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </ConfigProviderOverride>
  );
};
