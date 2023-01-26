import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { ActionSheet, ActionSheetProps } from './ActionSheet';
import { ActionSheetItem, ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { SplitCol } from '../SplitCol/SplitCol';
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
import { Button } from '../Button/Button';
import { Placeholder } from '../Placeholder/Placeholder';

export default {
  title: 'Popouts/ActionSheet',
  component: ActionSheet,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('ActionSheet'),
    ...DisableCartesianParam,
  },
  argTypes: {
    header: StringArg,
    text: StringArg,
  },
} as Meta<ActionSheetProps>;

const Template: Story<ActionSheetProps & { items: ActionSheetItemProps[] }> = ({
  items = [],
  ...args
}) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  const popout = visible ? (
    <ActionSheet
      {...args}
      onClose={() => setVisible(false)}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={baseToggleRef}
    >
      {items.map(({ children, ...rest }, index) => (
        <ActionSheetItem autoClose key={index} {...rest}>
          {children}
        </ActionSheetItem>
      ))}
    </ActionSheet>
  ) : null;

  return (
    <SplitLayout style={{ justifyContent: 'center' }} popout={popout}>
      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile spaced>
        <Placeholder stretched>
          <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)}>
            Открыть
          </Button>
        </Placeholder>
      </SplitCol>
    </SplitLayout>
  );
};

export const Base = Template.bind({});
Base.args = {
  items: [
    { children: 'Сохранить в закладках' },
    { children: 'Закрепить запись' },
    { children: 'Выключить комментирование' },
    { children: 'Закрепить запись' },
    { mode: 'destructive', children: 'Удалить запись' },
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    { before: <Icon28EditOutline />, children: 'Редактировать профиль' },
    { before: <Icon28ListPlayOutline />, children: 'Слушать далее' },
    { before: <Icon28ShareOutline />, children: 'Поделиться' },
    { before: <Icon28CopyOutline />, children: 'Скопировать ссылку' },
    { before: <Icon28DeleteOutline />, mode: 'destructive', children: 'Удалить плейлист' },
  ],
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
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
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  header: 'Вы действительно хотите удалить это видео из Ваших видео?',
  items: [{ mode: 'destructive', children: 'Удалить видео' }],
};

export const WithSelectable = Template.bind({});
WithSelectable.args = {
  items: [
    { selectable: true, children: 'Лучшие друзья', defaultChecked: true },
    { selectable: true, children: 'Родственники' },
    { selectable: true, children: 'Коллеги' },
    { selectable: true, children: 'Друзья по школе' },
    { selectable: true, children: 'Друзья по вузу' },
  ],
};
