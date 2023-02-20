import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CalendarRange, CalendarRangeProps } from './CalendarRange';

type StoryCalendarRangeProps = CalendarRangeProps & { startDate: number; endDate: number };

const story: Meta<StoryCalendarRangeProps> = {
  title: 'Forms/CalendarRange',
  component: CalendarRange,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
  },
};

export default story;

const Template: Story<StoryCalendarRangeProps> = ({ value, startDate, endDate, ...args }) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  return <CalendarRange value={[parsedStartDate, parsedEndDate]} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
