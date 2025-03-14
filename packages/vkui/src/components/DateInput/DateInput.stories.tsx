import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { DateInput, type DateInputProps } from './DateInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<DateInputProps> = {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: createStoryParameters('DateInput', CanvasFullLayout, DisableCartesianParam),
  args: { onChange: fn() },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
    after: iconsPresets,
    before: iconsPresets,
    renderDayContent: createCalendarDayRenderField(),
    renderCustomValue: StringArg,
  },
};

export default story;

type Story = StoryObj<Omit<DateInputProps, 'renderCustomValue'> & { renderCustomValue: string }>;

export const Playground: Story = {
  render: ({ value, renderCustomValue: renderCustomValueProp, ...args }) => {
    const parsedValue = value ? new Date(value) : value;
    const renderCustomValue = () => renderCustomValueProp;

    return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
  },
};
