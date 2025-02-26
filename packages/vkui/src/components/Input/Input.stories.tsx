import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { Input, type InputProps } from './Input';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<InputProps> = {
  title: 'Forms/Input',
  component: Input,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<InputProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Напишите сообщение...',
  },
};
