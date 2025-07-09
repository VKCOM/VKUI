import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { createCalendarTimezoneField } from '../../testing/presets/createCalendarTimezoneField';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { useCustomArgs } from '../../testing/useCustomArgs';
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

export const Playground: Story = {
  render: function Render({ value, minDateTime, maxDateTime, ...args }) {
    const [, updateArgs] = useCustomArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;

    const updateValue = (newDate: Date | undefined) => {
      updateArgs({ value: newDate?.getTime() });
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
