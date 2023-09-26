import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28PrivacyOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List, ListProps } from './List';

const story: Meta<ListProps> = {
  title: 'Blocks/List',
  component: List,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<
  ListProps & {
    items: Array<{
      before: React.ReactNode;
      title: string;
    }>;
  }
>;

export const Playground: Story = {
  render: function Render({ items, ...args }) {
    const [draggingList, updateDraggingList] = React.useState(items);

    const onDragFinish = ({ from, to }: { from: number; to: number }) => {
      const _list = [...draggingList];
      _list.splice(from, 1);
      _list.splice(to, 0, draggingList[from]);
      updateDraggingList(_list);
    };

    return (
      <List {...args}>
        {draggingList.map((item) => (
          <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>
            {item.title}
          </Cell>
        ))}
      </List>
    );
  },
  args: {
    items: [
      { before: <Icon28UserOutline />, title: 'Учетная запись' },
      { before: <Icon28SettingsOutline />, title: 'Основные' },
      { before: <Icon28PrivacyOutline />, title: 'Приватность' },
    ],
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
