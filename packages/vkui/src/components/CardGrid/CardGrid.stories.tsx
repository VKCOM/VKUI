import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Playground as BasicCard } from '../Card/Card.stories';
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

const Template: Story<StoryCardGridProps> = ({ count, ...args }) => (
  <CardGrid {...args}>
    {Array(count)
      .fill(null)
      .map((_, index) => (
        <BasicCard key={index} {...BasicCard.args} />
      ))}
  </CardGrid>
);

export const Playground = Template.bind({});
Playground.args = {
  count: 3,
};
Playground.decorators = [withSinglePanel, withVKUILayout];

export const InsideGroup = Template.bind({});
InsideGroup.args = {
  ...Playground.args,
};
InsideGroup.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  ...Playground.decorators,
];
