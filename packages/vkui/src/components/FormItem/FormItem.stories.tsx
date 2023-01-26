import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormItem, FormItemProps } from './FormItem';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Input } from '../Input/Input';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/FormItem',
  component: FormItem,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<FormItemProps>;

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
