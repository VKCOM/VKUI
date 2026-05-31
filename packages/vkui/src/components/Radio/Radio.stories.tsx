import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Radio, type RadioProps } from './Radio';

const story: Meta<RadioProps> = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: createStoryParameters('Radio', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    titleAfter: StringArg,
    description: StringArg,
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryObj<RadioProps>;
export const Playground: Story = (props: RadioProps) => <Radio {...props} />;

Playground.args = {
  name: 'payment',
  children: 'VK Pay',
};

export const WithDescription: Story = (props: RadioProps) => <Radio {...props} />;

WithDescription.args = {
  name: 'payment',
  children: 'VK Pay',
  description: 'Баланс 7 320 ₽',
};
