import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DatePicker, DatePickerProps } from './DatePicker';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  min: { day: 1, month: 1, year: 1901 },
  max: { day: 1, month: 1, year: 2006 },
  dayPlaceholder: 'ДД',
  monthPlaceholder: 'ММММ',
  yearPlaceholder: 'ГГГГ',
};
