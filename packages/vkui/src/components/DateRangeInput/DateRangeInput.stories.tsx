import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DateRangeInput, DateRangeInputProps } from './DateRangeInput';

type StoryDateRangeInputProps = DateRangeInputProps & { startDate: number; endDate: number };

const story: Meta<StoryDateRangeInputProps> = {
  title: 'Forms/DateRangeInput',
  component: DateRangeInput,
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

type Story = StoryObj<StoryDateRangeInputProps>;

export const Playground: Story = {
  render: ({ value, startDate, endDate, ...args }) => {
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;

    return <DateRangeInput value={[parsedStartDate, parsedEndDate]} {...args} />;
  },
};
