import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUsers } from '../../testing/mock';
import { Alert } from '../Alert/Alert';
import { Avatar } from '../Avatar/Avatar';
import { CellButton } from '../CellButton/CellButton';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Gallery } from '../Gallery/Gallery';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { Input } from '../Input/Input';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Placeholder } from '../Placeholder/Placeholder';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View, ViewProps } from './View';

const story: Meta<ViewProps> = {
  title: 'Layout/View',
  component: View,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ViewProps>;

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
      <Group
        header={<Header>Gallery</Header>}
        description="Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)"
      >
        <Gallery slideWidth="90%" bullets="dark">
          <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
          <img src="https://placebear.com/1024/640" style={{ display: 'block' }} />
          <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
        </Gallery>
      </Group>
      <Group
        header={<Header>HorizontalScroll</Header>}
        description="Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю"
      >
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            {getRandomUsers(15).map((user) => (
              <HorizontalCell key={user.id} size="s" header={user.first_name}>
                <Avatar size={56} src={user.photo_100} />
              </HorizontalCell>
            ))}
          </div>
        </HorizontalScroll>
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
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
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
        <FormItem htmlFor="name" top="Имя">
          <Input id="name" value={name} onChange={handleNameChange} />
        </FormItem>
      </Group>
    </React.Fragment>
  );
};

export const SwipeBlockExample: Story = {
  render: function Render() {
    const [history, setHistory] = React.useState(['main']);
    const activePanel = history[history.length - 1];

    const go = React.useCallback((panel: string) => {
      setHistory((prevHistory) => [...prevHistory, panel]);
    }, []);
    const goBack = React.useCallback(() => {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }, []);

    const handleProfileClick = React.useCallback(() => go('profile'), [go]);
    const handleSettingsClick = React.useCallback(() => go('settings'), [go]);

    const [userName, setUserName] = React.useState('');
    const [popoutWithRestriction, setPopoutWithRestriction] =
      React.useState<React.ReactNode | null>(null);

    const handleSwipeBackStartForPreventIfNeeded = React.useCallback(
      (activePanel: string) => {
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
      <ConfigProviderOverride platform="ios" isWebView>
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
  },
};
