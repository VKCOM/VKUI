import type { Meta, StoryObj } from '@storybook/react';
import { isArray } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Card as BasicCard } from '../Card/Card';
import { playgroundArgs as basicCardPlaygroundArgs } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { CardGrid, type CardGridProps } from './CardGrid';

type StoryCardGridProps = CardGridProps & { count: number };

const story: Meta<StoryCardGridProps> = {
  title: 'Blocks/CardGrid',
  component: CardGrid,
  parameters: createStoryParameters('CardGrid', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
};

export default story;

type Story = StoryObj<StoryCardGridProps>;

export const Playground: Story = {
  render: ({ count, ...args }) => (
    <CardGrid {...args}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <BasicCard key={index} {...basicCardPlaygroundArgs} />
        ))}
    </CardGrid>
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
