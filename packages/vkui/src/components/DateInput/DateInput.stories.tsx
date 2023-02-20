import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DateInput, DateInputProps } from './DateInput';

const story: Meta<DateInputProps> = {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
  },
};

export default story;

const Template: Story<DateInputProps> = ({ value, ...args }) => {
  const parsedValue = value ? new Date(value) : value;

  return <DateInput value={parsedValue} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
