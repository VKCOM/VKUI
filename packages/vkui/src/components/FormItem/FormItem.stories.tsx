import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Input } from '../Input/Input';
import { FormItem, FormItemProps } from './FormItem';

const story: Meta<FormItemProps> = {
  title: 'Forms/FormItem',
  component: FormItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FormItemProps>;

export const Playground: Story = {
  args: {
    top: 'Top form item',
    bottom: 'Bottom form item',
    children: 'Form Item',
  },
};

export const WithInputField: Story = {
  ...Playground,
  args: {
    top: 'Пароль',
    children: <Input type="password" placeholder="Введите пароль" />,
  },
};
