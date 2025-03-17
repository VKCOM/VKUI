import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Checkbox, type CheckboxProps } from './Checkbox';

const story: Meta<CheckboxProps> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: createStoryParameters('Checkbox', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    description: StringArg,
  },
};

export default story;

type Story = StoryObj<CheckboxProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Я учавствую в сборе',
  },
};

export const WithText: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    children: 'Закрепить сообщение',
  },
};

export const WithDescription: Story = {
  ...Playground,
  args: {
    ...WithText.args,
    description: 'Все пользователи получат уведомление',
  },
};
