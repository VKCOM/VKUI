import type { Meta, StoryObj } from '@storybook/react';
import { isArray } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Card as BasicCard } from '../Card/Card';
import { playgroundArgs as basicCardPlaygroundArgs } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { CardScroll, type CardScrollProps } from './CardScroll';

type StoryCardScrollProps = CardScrollProps & { count: number };

const story: Meta<StoryCardScrollProps> = {
  title: 'Layout/CardScroll',
  component: CardScroll,
  parameters: createStoryParameters('CardScroll', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<StoryCardScrollProps>;

export const Playground: Story = {
  render: ({ count, ...args }) => (
    <CardScroll {...args}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <BasicCard key={index} {...basicCardPlaygroundArgs} />
        ))}
    </CardScroll>
  ),
  args: {
    count: 3,
  },
  decorators: [withSinglePanel, withVKUILayout],
};

export const InsideGroup: Story = {
  ...Playground,
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    ...(isArray(Playground.decorators) ? Playground.decorators : []),
  ],
};
