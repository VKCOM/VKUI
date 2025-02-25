import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { TabsItem, type TabsItemProps } from './TabsItem';

const story: Meta<TabsItemProps> = {
  title: 'Blocks/TabsItem',
  component: TabsItem,
  parameters: createStoryParameters('TabsItem', CanvasFullLayout, DisableCartesianParam),
  args: {
    onClick: noop,
  },
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['20', '24'],
      requiredIcons: [
        'Icon20NewsfeedOutline',
        'Icon20ThumbsUpOutline',
        'Icon20UsersOutline',
        'Icon20PictureOutline',
      ],
    }),
    after: createFieldWithPresets({
      iconSizes: ['16'],
      requiredIcons: ['Icon16Dropdown'],
    }),
    status: createFieldWithPresets({
      additionalPresets: {
        Badge: <Badge mode="prominent">Есть обновления</Badge>,
        Counter: (
          <Counter mode="primary" appearance="accent-red" size="s">
            3
          </Counter>
        ),
        Number: 23,
      },
    }),
  },
};

export default story;

type Story = StoryObj<TabsItemProps>;

export const Playground: Story = {
  args: {
    children: 'Сообщества',
  },
  decorators: [
    (Component) => (
      <div style={{ height: 50 }}>
        <Component />
      </div>
    ),
  ],
};

export const WithBeforeAfter: Story = {
  ...Playground,
  args: {
    children: 'Лента',
    before: 'Icon20NewsfeedOutline',
    after: 'Icon16Dropdown',
  },
};

export const WithBadge: Story = {
  ...Playground,
  args: {
    children: 'Рекомендации',
    before: 'Icon20ThumbsUpOutline',
    after: 'Icon16Dropdown',
    status: <Badge mode="prominent">Есть обновления</Badge>,
  },
};

export const WithCounter: Story = {
  ...Playground,
  args: {
    children: 'Друзья',
    before: 'Icon20UsersOutline',
    after: 'Icon16Dropdown',
    status: (
      <Counter mode="primary" appearance="accent-red" size="s">
        3
      </Counter>
    ),
  },
};

export const WithNumberStatus: Story = {
  ...Playground,
  args: {
    children: 'Фотографии',
    before: 'Icon20PictureOutline',
    after: 'Icon16Dropdown',
    status: 23,
  },
};
