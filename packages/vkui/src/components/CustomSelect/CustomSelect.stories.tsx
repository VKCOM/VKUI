import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities } from '../../testing/mock';
import { getFormFieldIconsPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { FormItem } from '../FormItem/FormItem';
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
  render: (args) => (
    <FormItem top="Выберите город" htmlFor="custom-select" style={{ width: 320 }}>
      <CustomSelect {...args} id="custom-select" />
    </FormItem>
  ),
  args: {
    style: { width: 300 },
    placeholder: 'Город',
    options: cities,
  },
};
