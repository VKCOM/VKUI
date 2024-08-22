import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { type SelectProps } from '../CustomSelect/CustomSelect';
import { Select } from './Select';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<SelectProps> = {
  title: 'Forms/Select',
  component: Select,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onOpen: fn(), onClose: fn() },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    options: [],
  },
};
