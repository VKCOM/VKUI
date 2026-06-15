import type { Meta, StoryFn } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { createCalendarTimezoneField } from '../../testing/presets/createCalendarTimezoneField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { DateInput, type DateInputProps } from './DateInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<DateInputProps> = {
  title: 'Dates/DateInput',
  component: DateInput,
  parameters: createStoryParameters('DateInput', CanvasFullLayout, DisableCartesianParam),
  args: { onChange: fn() },
  argTypes: {
    readOnly: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'date' },
    },
    after: iconsPresets,
    before: iconsPresets,
    renderDayContent: createCalendarDayRenderField(),
    renderCustomValue: StringArg,
    timezone: createCalendarTimezoneField(),
  },
  tags: ['Работа с датами'],
};

export default story;

type DateInputStoryProps = Omit<DateInputProps, 'renderCustomValue'> & {
  renderCustomValue: string;
};

type Story = StoryFn<DateInputStoryProps>;

export const Playground: Story = ({
  value,
  renderCustomValue: renderCustomValueProp,
  ...args
}: DateInputStoryProps) => {
  const parsedValue = value ? new Date(value) : value;
  const renderCustomValue = () => renderCustomValueProp;
  return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
};
