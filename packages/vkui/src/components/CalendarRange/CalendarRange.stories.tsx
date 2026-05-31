import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { CalendarRange, type CalendarRangeProps } from './CalendarRange';

type StoryCalendarRangeProps = CalendarRangeProps & { startDate: number; endDate: number };

const story: Meta<StoryCalendarRangeProps> = {
  title: 'Dates/CalendarRange',
  component: CalendarRange,
  parameters: createStoryParameters('CalendarRange', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    value: {
      description: 'Используйте startDate и endDate для задания периода',
      control: false,
    },
    startDate: {
      description: 'Дата начала периода',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'date' },
    },
    endDate: {
      description: 'Дата окончания периода',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'date' },
    },
    renderDayContent: createCalendarDayRenderField(),
  },
  tags: ['Работа с датами'],
};

export default story;

export const Playground: StoryObj<StoryCalendarRangeProps> = ({
  startDate,
  endDate,
  value,
  ...args
}: StoryCalendarRangeProps) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  return <CalendarRange {...args} defaultValue={[parsedStartDate, parsedEndDate]} />;
};

Playground.args = {};
