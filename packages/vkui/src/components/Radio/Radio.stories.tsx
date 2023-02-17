import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Radio, RadioProps } from './Radio';

const story: Meta<RadioProps> = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

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
