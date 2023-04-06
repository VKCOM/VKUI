import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<CalendarProps>;

export const Playground: Story = {
  render: ({ value, ...args }) => {
    const parsedValue = value ? new Date(value) : value;

    return <Calendar value={parsedValue} {...args} />;
  },
};
