import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { getFormFieldIconsPresets } from '../../lib/presets/getFormFieldIconsPresets';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import type { ChipOption } from '../ChipsInputBase/types';
import { FormItem } from '../FormItem/FormItem';
import { ChipsInput, ChipsInputProps } from './ChipsInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<ChipsInputProps<ChipOption>> = {
  title: 'Forms/ChipsInput',
  component: ChipsInput,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
