import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { isArray } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Card as BasicCard } from '../Card/Card';
import { Playground as BasicCardStory } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { CardScroll, CardScrollProps } from './CardScroll';

type StoryCardScrollProps = CardScrollProps & { count: number };

const story: Meta<StoryCardScrollProps> = {
  title: 'Blocks/CardScroll',
  component: CardScroll,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
};

export default story;

type Story = StoryObj<StoryCardScrollProps>;

export const Playground: Story = {
  render: ({ count, ...args }) => (
    <CardScroll {...args}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <BasicCard key={index} {...BasicCardStory.args} />
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
