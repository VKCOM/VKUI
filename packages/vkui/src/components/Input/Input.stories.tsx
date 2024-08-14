import { Meta, StoryObj } from '@storybook/react';
import { getFormFieldIconsPresets } from '../../lib/presets/getFormFieldIconsPresets';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Input, InputProps } from './Input';

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

export const Playground: Story = {};
