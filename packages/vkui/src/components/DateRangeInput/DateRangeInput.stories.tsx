import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { DateRangeInput, DateRangeInputProps } from './DateRangeInput';

const story: Meta<DateRangeInputProps> = {
  title: 'Forms/DateRangeInput',
  component: DateRangeInput,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
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

const Template: Story<DateRangeInputProps & { startDate: number; endDate: number }> = ({
  value,
  startDate,
  endDate,
  ...args
}) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  return <DateRangeInput value={[parsedStartDate, parsedEndDate]} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
