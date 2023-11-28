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
import { Placeholder } from '../Placeholder/Placeholder';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
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
