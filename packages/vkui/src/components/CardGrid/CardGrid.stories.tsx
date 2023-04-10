import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Card as BasicCard } from '../Card/Card';
import { Playground as BasicCardStory } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { CardGrid, CardGridProps } from './CardGrid';

type StoryCardGridProps = CardGridProps & { count: number };

const story: Meta<StoryCardGridProps> = {
  title: 'Blocks/CardGrid',
  component: CardGrid,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
          <BasicCard key={index} {...BasicCardStory.args} />
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
    ...(Playground.decorators || []),
  ],
};
