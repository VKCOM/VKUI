import * as React from 'react';
import { useArgs } from '@storybook/preview-api';
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
    minDateTime: {
      control: { type: 'date' },
    },
    maxDateTime: {
      control: { type: 'date' },
    },
    shouldDisableDate: {
      control: false,
    },
  },
};

export default story;

type Story = StoryObj<CalendarProps>;

export const Playground: Story = {
  render: function Render({ value, minDateTime, maxDateTime, ...args }) {
    const [, updateArgs] = useArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;

    const updateValue = (newDate: Date) => {
      updateArgs({ value: newDate.getTime() });
    };
    return (
      <Calendar
        value={parsedValue}
        minDateTime={parsedMinDateTime}
        maxDateTime={parsedMaxDateTime}
        {...args}
        onChange={updateValue}
      />
    );
  },
};
