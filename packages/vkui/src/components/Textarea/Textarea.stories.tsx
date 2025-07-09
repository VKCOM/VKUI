import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Textarea, type TextareaProps } from './Textarea';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<TextareaProps> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: createStoryParameters('Textarea', CanvasFullLayout, DisableCartesianParam),
  args: { onResize: fn() },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryObj<TextareaProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Любимая музыка',
  },
};
