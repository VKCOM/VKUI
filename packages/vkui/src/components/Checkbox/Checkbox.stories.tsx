import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { Checkbox, CheckboxProps } from './Checkbox';

const story: Meta<CheckboxProps> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    description: StringArg,
  },
};

export default story;

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
