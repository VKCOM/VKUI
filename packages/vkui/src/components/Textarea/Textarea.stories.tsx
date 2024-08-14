import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { getFormFieldIconsPresets } from '../../lib/presets/getFormFieldIconsPresets';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Textarea, TextareaProps } from './Textarea';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<TextareaProps> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onResize: fn() },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<TextareaProps>;

export const Playground: Story = {};
