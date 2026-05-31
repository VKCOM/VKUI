import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon28PrivacyOutline, Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List, type ListProps } from './List';

const story: Meta<ListProps> = {
  title: 'Buttons/Cell/List',
  component: List,
  parameters: createStoryParameters('List', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type ListStoryProps = ListProps & {
  items: Array<{
    before: React.ReactNode;
    title: string;
  }>;
};

export const Playground: StoryObj<ListStoryProps> = ({ items, ...args }: ListStoryProps) => {
  const [draggingList, updateDraggingList] = React.useState(items);
  const onDragFinish = ({ from, to }: { from: number; to: number }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };
  return (
    <Group>
      <List {...args}>
        {draggingList.map((item) => (
          <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>
            {item.title}
          </Cell>
        ))}
      </List>
    </Group>
  );
};

Playground.args = {
  items: [
    {
      before: <Icon28UserOutline />,
      title: 'Учетная запись',
    },
    {
      before: <Icon28SettingsOutline />,
      title: 'Основные',
    },
    {
      before: <Icon28PrivacyOutline />,
      title: 'Приватность',
    },
  ],
};

Playground.decorators = [withSinglePanel, withVKUILayout];
