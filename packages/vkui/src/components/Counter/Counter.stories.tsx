import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Counter, CounterProps } from './Counter';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Blocks/Counter',
  component: Counter,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Counter') },
  decorators: [withCartesian],
} as Meta<CounterProps>;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: '5',
};
