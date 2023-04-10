import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DatePicker, DatePickerProps } from './DatePicker';

const story: Meta<DatePickerProps> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
