import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import type { ChipOption } from '../ChipsInputBase/types';
import { FormItem } from '../FormItem/FormItem';
import { ChipsInput, type ChipsInputProps } from './ChipsInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<ChipsInputProps<ChipOption>> = {
  title: 'Forms/ChipsInput',
  component: ChipsInput,
  parameters: createStoryParameters('ChipsInput', CanvasFullLayout, DisableCartesianParam),
  args: { onInputChange: fn() },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<ChipsInputProps<ChipOption>>;

export const Playground: Story = {
  render: (args) => (
    <FormItem top="Добавьте любимые теги" htmlFor="chips-input" style={{ width: 320 }}>
      <ChipsInput {...args} id="chips-input" />
    </FormItem>
  ),
};
