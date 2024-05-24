import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon28CopyOutline,
  Icon28DeleteOutline,
  Icon28EditOutline,
  Icon28ListPlayOutline,
  Icon28PlaySpeedOutline,
  Icon28SettingsOutline,
  Icon28ShareOutline,
  Icon28SubtitlesOutline,
} from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { ActionSheetItem, ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { CellButton } from '../CellButton/CellButton';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Placeholder } from '../Placeholder/Placeholder';
import { PlatformProvider } from '../PlatformProvider/PlatformProvider';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View } from '../View/View';
import { ActionSheet, ActionSheetProps } from './ActionSheet';

const story: Meta<ActionSheetProps> = {
  title: 'Popouts/ActionSheet',
  component: ActionSheet,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    header: StringArg,
    text: StringArg,
  },
};

export default story;

type Story = StoryObj<ActionSheetProps & { items: ActionSheetItemProps[] }>;

export const Base: Story = {
  render: function Render({ items, ...args }) {
    const baseToggleRef = React.useRef(null);
    const [visible, setVisible] = React.useState(true);
    const popout = visible ? (
      <ActionSheet {...args} onClose={() => setVisible(false)} toggleRef={baseToggleRef}>
        {items.map(({ children, ...rest }, index) => (
          <ActionSheetItem key={index} {...rest}>
            {children}
          </ActionSheetItem>
        ))}
      </ActionSheet>
    ) : null;

    return (
      <SplitLayout style={{ justifyContent: 'center' }} popout={popout}>
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Placeholder stretched>
            <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)}>
              Открыть
            </Button>
          </Placeholder>
        </SplitCol>
      </SplitLayout>
    );
  },
  args: {
    items: [
      { children: 'Сохранить в закладках' },
      { children: 'Закрепить запись' },
      { children: 'Выключить комментирование' },
      { children: 'Закрепить запись' },
      { mode: 'destructive', children: 'Удалить запись' },
    ],
  },
};

export const WithIcon: Story = {
  ...Base,
  args: {
    items: [
      { before: <Icon28EditOutline />, children: 'Редактировать профиль' },
      { before: <Icon28ListPlayOutline />, children: 'Слушать далее' },
      { before: <Icon28ShareOutline />, children: 'Поделиться' },
      { before: <Icon28CopyOutline />, children: 'Скопировать ссылку' },
      { before: <Icon28DeleteOutline />, mode: 'destructive', children: 'Удалить плейлист' },
    ],
  },
};

export const WithSubtitle: Story = {
  ...Base,
  args: {
    items: [
      { before: <Icon28SettingsOutline />, subtitle: 'Авто', children: 'Качество' },
      {
        before: <Icon28SubtitlesOutline />,
        subtitle: 'Отсутствуют',
        disabled: true,
        children: 'Субтитры',
      },
      {
        before: <Icon28PlaySpeedOutline />,
        subtitle: 'Обычная',
        children: 'Скорость воспроизведения',
      },
    ],
  },
};

export const WithTitle: Story = {
  ...Base,
  args: {
    header: 'Вы действительно хотите удалить это видео из Ваших видео?',
    items: [{ mode: 'destructive', children: 'Удалить видео' }],
  },
};

export const WithSelectable: Story = {
  ...Base,
  args: {
    items: [
      { selectable: true, children: 'Лучшие друзья', defaultChecked: true },
      { selectable: true, children: 'Родственники' },
      { selectable: true, children: 'Коллеги' },
      { selectable: true, children: 'Друзья по школе' },
      { selectable: true, children: 'Друзья по вузу' },
    ],
  },
};

export const A11YExampleWithManyButtons: Story = {
  render: function Render() {
    const [popout, setPopout] = React.useState<React.ReactElement | null>(null);
    const onClose = () => setPopout(null);
    const baseTargetRef = React.useRef(null);
    const iconsTargetRef = React.useRef(null);
    const subtitleTargetRef = React.useRef(null);
    const selectableTargetRef = React.useRef(null);
    const openBase = () =>
      setPopout(
        <ActionSheet onClose={onClose} toggleRef={baseTargetRef}>
          <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
          <ActionSheetItem>Закрепить запись</ActionSheetItem>
          <ActionSheetItem>Выключить комментирование</ActionSheetItem>
          <ActionSheetItem>Закрепить запись</ActionSheetItem>
          <ActionSheetItem mode="destructive">Удалить запись</ActionSheetItem>
        </ActionSheet>,
      );
    const openIcons = () =>
      setPopout(
        <ActionSheet onClose={onClose} toggleRef={iconsTargetRef}>
          <ActionSheetItem>Редактировать профиль</ActionSheetItem>
          <ActionSheetItem>Слушать далее</ActionSheetItem>
          <ActionSheetItem>Поделиться</ActionSheetItem>
          <ActionSheetItem>Скопировать ссылку</ActionSheetItem>
          <ActionSheetItem mode="destructive">Удалить плейлист</ActionSheetItem>
        </ActionSheet>,
      );

    const openSubtitle = () =>
      setPopout(
        <ActionSheet onClose={onClose} toggleRef={subtitleTargetRef}>
          <ActionSheetItem subtitle="Авто">Качество</ActionSheetItem>
          <ActionSheetItem subtitle="Отсутствуют" disabled>
            Субтитры
          </ActionSheetItem>
          <ActionSheetItem subtitle="Обычная">Скорость воспроизведения</ActionSheetItem>
        </ActionSheet>,
      );
    const openSelectable = () =>
      setPopout(
        <ActionSheet onClose={onClose} toggleRef={selectableTargetRef}>
          <ActionSheetItem name="filter" value="best" selectable>
            Лучшие друзья
          </ActionSheetItem>
          <ActionSheetItem name="filter" value="relatives" selectable>
            Родственники
          </ActionSheetItem>
          <ActionSheetItem name="filter" value="collegues" selectable>
            Коллеги
          </ActionSheetItem>
          <ActionSheetItem name="filter" value="school" selectable>
            Друзья по школе
          </ActionSheetItem>
          <ActionSheetItem name="filter" value="university" selectable>
            Друзья по вузу
          </ActionSheetItem>
        </ActionSheet>,
      );

    return (
      <SplitLayout popout={popout}>
        <SplitCol>
          <View activePanel="panel">
            <Panel id="panel">
              <PlatformProvider value="vkcom">
                <PanelHeader>Пример ActionSheet</PanelHeader>
                <Group>
                  <CellButton getRootRef={baseTargetRef} onClick={openBase}>
                    Базовый список
                  </CellButton>
                  <CellButton getRootRef={iconsTargetRef} onClick={openIcons}>
                    Список с опциями VK Music
                  </CellButton>
                  <CellButton getRootRef={subtitleTargetRef} onClick={openSubtitle}>
                    Список опций видео
                  </CellButton>
                  <CellButton getRootRef={selectableTargetRef} onClick={openSelectable}>
                    Переместить друга
                  </CellButton>
                  <Placeholder
                    header="Находите друзей"
                    action={
                      <ButtonGroup mode="vertical" align="center">
                        <Button size="m">Найти друзей</Button>
                        <Button size="m" mode="tertiary">
                          Подробнее
                        </Button>
                      </ButtonGroup>
                    }
                  >
                    Здесь будут отображаться люди, которых вы добавите в друзья
                  </Placeholder>
                </Group>
              </PlatformProvider>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  },
};
