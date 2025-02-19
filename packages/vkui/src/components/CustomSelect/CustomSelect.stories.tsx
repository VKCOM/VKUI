import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities } from '../../testing/mock';
import { getFormFieldIconsPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { CustomSelect, type SelectProps } from './CustomSelect';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<SelectProps> = {
  title: 'Forms/CustomSelect',
  component: CustomSelect,
  parameters: createStoryParameters('CustomSelect', CanvasFullLayout, DisableCartesianParam),
  args: { onOpen: fn(), onClose: fn() },
  argTypes: {
    before: iconsPresets,
  },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    options: cities,
  },
};
