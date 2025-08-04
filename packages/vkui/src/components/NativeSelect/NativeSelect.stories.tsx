import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { NativeSelect, type NativeSelectProps } from './NativeSelect';

const story: Meta<NativeSelectProps> = {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: createStoryParameters('NativeSelect', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    before: getFormFieldIconsPresets(),
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryObj<NativeSelectProps>;

export const Playground: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <option value="m">Мужской</option>
      <option value="f">Женский</option>
    </NativeSelect>
  ),
};
