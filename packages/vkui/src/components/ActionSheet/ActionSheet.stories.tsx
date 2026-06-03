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
import { ActionSheetItem, type ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';
import { ActionSheet, type ActionSheetProps } from './ActionSheet';

type ActionSheetStoryProps = ActionSheetProps & { items: ActionSheetItemProps[] };

const story: Meta<ActionSheetStoryProps> = {
  title: 'Modals/ActionSheet',
  component: ActionSheet,
  parameters: createStoryParameters('ActionSheet', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    title: StringArg,
    description: StringArg,
    items: {
      control: 'select',
      options: ['simple', 'with-icons', 'with-subtitle', 'with-title', 'with-selectable'],
      mapping: {
        'simple': [
          {
            children: 'Сохранить в закладках',
          },
          {
            children: 'Закрепить запись',
          },
          {
            children: 'Выключить комментирование',
          },
          {
            children: 'Закрепить запись',
          },
          {
            mode: 'destructive',
            children: 'Удалить запись',
          },
        ],
        'with-icons': [
          {
            before: <Icon28EditOutline />,
            children: 'Редактировать профиль',
          },
          {
            before: <Icon28ListPlayOutline />,
            children: 'Слушать далее',
          },
          {
            before: <Icon28ShareOutline />,
            children: 'Поделиться',
          },
          {
            before: <Icon28CopyOutline />,
            children: 'Скопировать ссылку',
          },
          {
            before: <Icon28DeleteOutline />,
            mode: 'destructive',
            children: 'Удалить плейлист',
          },
        ],
        'with-subtitle': [
          {
            before: <Icon28SettingsOutline />,
            subtitle: 'Авто',
            children: 'Качество',
          },
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
        'with-title': [
          {
            mode: 'destructive',
            children: 'Удалить видео',
          },
        ],
        'with-selectable': [
          {
            name: 'menu',
            selectable: true,
            children: 'Лучшие друзья',
            defaultChecked: true,
          },
          {
            name: 'menu',
            selectable: true,
            children: 'Родственники',
          },
          {
            name: 'menu',
            selectable: true,
            children: 'Коллеги',
          },
          {
            name: 'menu',
            selectable: true,
            children: 'Друзья по школе',
          },
          {
            name: 'menu',
            selectable: true,
            children: 'Друзья по вузу',
          },
        ],
      },
    },
  },
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryFn<ActionSheetStoryProps>;

export const Playground: Story = (args: ActionSheetStoryProps) => {
  const items = args.items;
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
        <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef}>
          {items.map(({ children, ...rest }, index) => (
            <ActionSheetItem key={index} {...rest}>
              {children}
            </ActionSheetItem>
          ))}
        </ActionSheet>
      ) : null}
    </React.Fragment>
  );
};

Playground.args = {
  // @ts-expect-error: TS2322 mapping string -> array
  items: 'simple',
};
