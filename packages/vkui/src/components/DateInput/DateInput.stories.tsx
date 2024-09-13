import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { DateInput, type DateInputProps } from './DateInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<DateInputProps> = {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onChange: fn() },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
    after: iconsPresets,
    before: iconsPresets,
    renderDayContent: createCalendarDayRenderField(),
  },
};

export default story;

type Story = StoryObj<DateInputProps>;

export const Playground: Story = {
  render: ({ value, ...args }) => {
    const parsedValue = value ? new Date(value) : value;

    return <DateInput value={parsedValue} {...args} />;
  },
};
