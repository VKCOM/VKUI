import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DatePicker, type DatePickerProps } from './DatePicker';

const story: Meta<DatePickerProps> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onDateChange: fn() },
};

export default story;

type Story = StoryObj<DatePickerProps>;

export const Playground: Story = {
  args: {
    min: { day: 1, month: 1, year: 1901 },
    max: { day: 1, month: 1, year: 2006 },
    dayPlaceholder: 'ДД',
    monthPlaceholder: 'ММММ',
    yearPlaceholder: 'ГГГГ',
  },
};
