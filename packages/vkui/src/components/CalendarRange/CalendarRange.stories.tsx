import * as React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<StoryCalendarRangeProps>;

export const Playground: Story = {
  render: function Render() {
    const [{ value, startDate, endDate, ...args }, updateArgs] = useArgs();

    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = (updatedValue) => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null,
      });
    };

    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;

    return (
      <CalendarRange
        {...args}
        value={[parsedStartDate, parsedEndDate]}
        onChange={handleDateRangeUpdate}
      />
    );
  },
};
