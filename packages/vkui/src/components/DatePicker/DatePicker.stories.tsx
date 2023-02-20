import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DatePicker, DatePickerProps } from './DatePicker';

const story: Meta<DatePickerProps> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  min: { day: 1, month: 1, year: 1901 },
  max: { day: 1, month: 1, year: 2006 },
  dayPlaceholder: 'ДД',
  monthPlaceholder: 'ММММ',
  yearPlaceholder: 'ГГГГ',
};
