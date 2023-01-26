import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Calendar',
  component: Calendar,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Calendar'), ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
  },
} as Meta<CalendarProps>;

const Template: Story<CalendarProps> = ({ value, ...args }) => {
  const parsedValue = value ? new Date(value) : value;

  return <Calendar value={parsedValue} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
