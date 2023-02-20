import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Counter, CounterProps } from './Counter';

const story: Meta<CounterProps> = {
  title: 'Blocks/Counter',
  component: Counter,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: '5',
};
