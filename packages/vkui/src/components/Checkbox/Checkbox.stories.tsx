import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
  argTypes: {
    description: StringArg,
  },
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Playground = Template.bind({});
Playground.args = {};

export const WithText = Template.bind({});
WithText.args = {
  ...Playground.args,
  children: 'Закрепить сообщение',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...WithText.args,
  description: 'Все пользователи получат уведомление',
};
