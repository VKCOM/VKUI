import { Meta, StoryObj } from '@storybook/react';
import { getFormFieldIconsPresets } from '../../lib/presets/getFormFieldIconsPresets';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const story: Meta<NativeSelectProps> = {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: getFormFieldIconsPresets(),
  },
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
