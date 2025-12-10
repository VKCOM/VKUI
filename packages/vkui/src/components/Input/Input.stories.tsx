import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Input, type InputProps } from './Input';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<InputProps> = {
  title: 'Forms/Input',
  component: Input,
  parameters: createStoryParameters('Input', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryObj<InputProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Напишите сообщение...',
  },
};
