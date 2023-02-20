import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Calendar, CalendarProps } from './Calendar';

const story: Meta<CalendarProps> = {
  title: 'Forms/Calendar',
  component: Calendar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
  },
};

export default story;

const Template: Story<CalendarProps> = ({ value, ...args }) => {
  const parsedValue = value ? new Date(value) : value;

  return <Calendar value={parsedValue} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
