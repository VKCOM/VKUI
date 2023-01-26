import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardGrid, CardGridProps } from './CardGrid';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Playground as BasicCard } from '../Card/Card.stories';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/CardGrid',
  component: CardGrid,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Card'), ...DisableCartesianParam },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
} as Meta<CardGridProps>;

const Template: Story<CardGridProps & { count: number }> = ({ count, ...args }) => (
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
