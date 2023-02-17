import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { CalendarRange, CalendarRangeProps } from './CalendarRange';

const story: Meta<CalendarRangeProps> = {
  title: 'Forms/CalendarRange',
  component: CalendarRange,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Calendar'), ...DisableCartesianParam },
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

const Template: Story<CalendarRangeProps & { startDate: number; endDate: number }> = ({
  value,
  startDate,
  endDate,
  ...args
}) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  return <CalendarRange value={[parsedStartDate, parsedEndDate]} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
