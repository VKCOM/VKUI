import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Input } from '../Input/Input';
import { FormItem, FormItemProps } from './FormItem';

const story: Meta<FormItemProps> = {
  title: 'Forms/FormItem',
  component: FormItem,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<FormItemProps> = (args) => <FormItem {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  top: 'Top form item',
  bottom: 'Bottom form item',
  children: 'Form Item',
};

export const WithInputField = Template.bind({});
WithInputField.args = {
  top: 'Пароль',
  children: <Input type="password" placeholder="Введите пароль" />,
};
