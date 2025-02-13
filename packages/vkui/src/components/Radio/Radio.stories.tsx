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
};

export default story;

type Story = StoryObj<RadioProps>;

export const Playground: Story = {
  args: {
    name: 'payment',
    children: 'VK Pay',
  },
};

export const WithDescription: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    description: 'Баланс 7 320 ₽',
  },
};
