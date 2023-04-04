import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Counter } from '../Counter/Counter';
import { Value, ValueProps } from './Value';

const story: Meta<ValueProps> = {
  title: 'Blocks/Value',
  component: Value,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<ValueProps> = (args) => (
  <Counter>
    <Value {...args} />
  </Counter>
);

export const Playground = Template.bind({});
Playground.args = {
  formatter: (value) => (value && value >= 1000 ? '999+' : String(value)),
  children: '5',
  animated: true,
};
