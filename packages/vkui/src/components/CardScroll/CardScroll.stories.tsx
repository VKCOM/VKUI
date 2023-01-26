import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardScroll, CardScrollProps } from './CardScroll';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Playground as BasicCard } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/CardScroll',
  component: CardScroll,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Card'), ...DisableCartesianParam },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
} as Meta<CardScrollProps>;

const Template: Story<CardScrollProps & { count: number }> = ({ count, ...args }) => (
  <CardScroll {...args}>
    {Array(count)
      .fill(null)
      .map((_, index) => (
        <BasicCard key={index} {...BasicCard.args} />
      ))}
  </CardScroll>
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
