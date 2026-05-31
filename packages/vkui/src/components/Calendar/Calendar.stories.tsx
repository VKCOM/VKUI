import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { createCalendarTimezoneField } from '../../testing/presets/createCalendarTimezoneField';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Calendar, type CalendarProps } from './Calendar';

const story: Meta<CalendarProps> = {
  title: 'Dates/Calendar',
  component: Calendar,
  parameters: createStoryParameters('Calendar', CanvasFullLayout, DisableCartesianParam),
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
    renderDayContent: createCalendarDayRenderField(),
    timezone: createCalendarTimezoneField(),
  },
  tags: ['Работа с датами'],
};

export default story;

type Story = StoryObj<CalendarProps>;

export const Playground: Story = ({
  value,
  defaultValue,
  minDateTime,
  maxDateTime,
  ...args
}: CalendarProps) => {
  const parsedValue = value ? new Date(value) : value;
  const parsedDefaultValue = defaultValue ? new Date(defaultValue) : defaultValue;
  const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
  const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
  return (
    <Calendar
      value={parsedValue}
      defaultValue={parsedDefaultValue}
      minDateTime={parsedMinDateTime}
      maxDateTime={parsedMaxDateTime}
      {...args}
    />
  );
};

Playground.args = {};
