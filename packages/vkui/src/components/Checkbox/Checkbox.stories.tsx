import type { Meta, StoryFn } from '@storybook/react';
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
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryFn<CheckboxProps>;

export const Playground: Story = (props: CheckboxProps) => <Checkbox {...props} />;

Playground.args = {
  'aria-label': 'Я учавствую в сборе',
};

export const WithText: Story = (props: CheckboxProps) => <Checkbox {...props} />;

WithText.args = {
  ...Playground.args,
  children: 'Закрепить сообщение',
};

export const WithDescription: Story = (props: CheckboxProps) => <Checkbox {...props} />;

WithDescription.args = {
  ...WithText.args,
  description: 'Все пользователи получат уведомление',
};
