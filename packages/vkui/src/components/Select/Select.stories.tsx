import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import type { SelectProps } from '../CustomSelect/CustomSelect';
import { Select } from './Select';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<SelectProps> = {
  title: 'Forms/Select',
  component: Select,
  parameters: createStoryParameters('Select', CanvasFullLayout, DisableCartesianParam),
  args: { onOpen: fn(), onClose: fn() },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
  tags: ['Формы и поля ввода'],
};

export default story;

export const Playground: StoryObj<SelectProps> = (props: SelectProps) => <Select {...props} />;

Playground.args = {
  style: {
    width: 300,
  },
  options: [],
};
