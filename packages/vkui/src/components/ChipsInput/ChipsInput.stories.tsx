import type { Meta, StoryFn } from '@storybook/react';
import { fn } from 'storybook/test';
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
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryFn<ChipsInputProps<ChipOption>>;

const DEFAULT_TAGS = [
  {
    label: 'Тег 1',
    value: 'tag-1',
  },
  {
    label: 'Тег 2',
    value: 'tag-2',
  },
];

export const Playground: Story = (args: ChipsInputProps<ChipOption>) => (
  <FormItem
    top="Добавьте любимые теги"
    htmlFor="chips-input"
    style={{
      width: 320,
    }}
  >
    <ChipsInput {...args} aria-label="Добавьте любимые теги" id="chips-input" />
  </FormItem>
);

Playground.args = {
  defaultValue: DEFAULT_TAGS,
};
