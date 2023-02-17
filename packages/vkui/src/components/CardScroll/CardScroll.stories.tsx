import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Playground as BasicCard } from '../Card/Card.stories';
import { Group } from '../Group/Group';
import { CardScroll, CardScrollProps } from './CardScroll';

type StoryCardScrollProps = CardScrollProps & { count: number };

const story: Meta<StoryCardScrollProps> = {
  title: 'Blocks/CardScroll',
  component: CardScroll,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Card'), ...DisableCartesianParam },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
};

export default story;

const Template: Story<StoryCardScrollProps> = ({ count, ...args }) => (
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
