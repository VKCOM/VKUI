import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Radio, RadioProps } from './Radio';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Radio',
  component: Radio,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<RadioProps>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  name: 'payment',
  children: 'VK Pay',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Playground.args,
  description: 'Баланс 7 320 ₽',
  children: 'VK Pay',
};
