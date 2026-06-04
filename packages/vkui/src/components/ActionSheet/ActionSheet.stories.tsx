import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
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
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';
import { ActionSheet, type ActionSheetProps } from './ActionSheet';

const story: Meta<ActionSheetProps> = {
  title: 'Modals/ActionSheet',
  component: ActionSheet,
  parameters: createStoryParameters('ActionSheet', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    title: StringArg,
    description: StringArg,
  },
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryFn<ActionSheetProps>;

export const Playground: Story = (args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return (
    <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? (
        <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} />
      ) : null}
    </React.Fragment>
  );
};

Playground.args = {
  children: (
    <>
      <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem mode="destructive">Удалить запись</ActionSheetItem>
    </>
  ),
};

export const WithIcon: Story = Playground.bind({});

WithIcon.args = {
  children: (
    <>
      <ActionSheetItem before={<Icon28EditOutline />}>Редактировать профиль</ActionSheetItem>
      <ActionSheetItem before={<Icon28ListPlayOutline />}>Слушать далее</ActionSheetItem>
      <ActionSheetItem before={<Icon28ShareOutline />}>Поделиться</ActionSheetItem>
      <ActionSheetItem before={<Icon28CopyOutline />}>Скопировать ссылку</ActionSheetItem>
      <ActionSheetItem before={<Icon28DeleteOutline />} mode="destructive">
        Удалить плейлист
      </ActionSheetItem>
    </>
  ),
};

export const WithSubtitle: Story = Playground.bind({});

WithSubtitle.args = {
  children: (
    <>
      <ActionSheetItem before={<Icon28SettingsOutline />} subtitle="Авто">
        Качество
      </ActionSheetItem>
      <ActionSheetItem before={<Icon28SubtitlesOutline />} subtitle="Отсутствуют" disabled>
        Субтитры
      </ActionSheetItem>
      <ActionSheetItem before={<Icon28PlaySpeedOutline />} subtitle="Обычная">
        Скорость воспроизведения
      </ActionSheetItem>
    </>
  ),
};

export const WithTitle: Story = Playground.bind({});

WithTitle.args = {
  title: 'Вы действительно хотите удалить это видео из Ваших видео?',
  children: <ActionSheetItem mode="destructive">Удалить видео</ActionSheetItem>,
};

export const WithSelectable: Story = Playground.bind({});

WithSelectable.args = {
  children: (
    <>
      <ActionSheetItem name="menu" selectable defaultChecked>
        Лучшие друзья
      </ActionSheetItem>
      <ActionSheetItem name="menu" selectable>
        Родственники
      </ActionSheetItem>
      <ActionSheetItem name="menu" selectable>
        Коллеги
      </ActionSheetItem>
      <ActionSheetItem name="menu" selectable>
        Друзья по школе
      </ActionSheetItem>
      <ActionSheetItem name="menu" selectable>
        Друзья по вузу
      </ActionSheetItem>
    </>
  ),
};
