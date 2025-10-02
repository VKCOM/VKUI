import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar.tsx';
import { Flex } from '../Flex/Flex.tsx';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton.tsx';
import { SimpleCell } from '../SimpleCell/SimpleCell.tsx';
import { Reorder, type ReorderProps } from './Reorder';

const story: Meta<ReorderProps> = {
  title: 'Utils/Reorder',
  component: Reorder,
  parameters: createStoryParameters('Reorder', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<
  ReorderProps<{
    id: string;
    avatarUrl: string;
    name: string;
    screenName: string;
  }>
>;

export const Playground: Story = {
  render: function Render({ items, ...args }) {
    const [draggingList, updateDraggingList] = React.useState(items);

    const onDragFinish: ReorderProps['onReorder'] = (swappedItems) => {
      updateDraggingList(Reorder.onReorder(swappedItems, draggingList));
    };

    return (
      <Reorder.Root gap={10} onReorder={onDragFinish} {...args}>
        {draggingList.map((item) => (
          <SimpleCell
            key={item.id}
            Component={Reorder.Item}
            hasHover={false}
            before={
              <Flex align="center" gap={10}>
                <Reorder.Trigger>
                  <Reorder.TriggerIcon>Перенести ячейку</Reorder.TriggerIcon>
                </Reorder.Trigger>
                <Avatar size={48} src={item.avatarUrl} />
              </Flex>
            }
            after={
              <IconButton label="Написать сообщение" onClick={noop}>
                <Icon28MessageOutline />
              </IconButton>
            }
            subtitle={item.screenName}
            onClick={noop}
          >
            {item.name}
          </SimpleCell>
        ))}
      </Reorder.Root>
    );
  },
  args: {
    items: [
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/61377022',
        name: 'Эльдар Мухаметханов',
        screenName: 'e.muhamethanov',
        id: 'e.muhamethanov',
      },
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/5850354',
        name: 'Ином Мирджамолов',
        screenName: 'inomdzhon',
        id: 'inomdzhon',
      },
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/7431217',
        name: 'Вика Жижонкова',
        screenName: 'BlackySoul',
        id: 'BlackySoul',
      },
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/14944123',
        name: 'Даниил Суворов',
        screenName: 'SevereCloud',
        id: 'SevereCloud',
      },
      {
        avatarUrl: 'https://avatars.githubusercontent.com/u/32414396',
        name: 'Никита Денисов',
        screenName: 'qurle',
        id: 'qurle',
      },
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
