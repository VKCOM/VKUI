import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<DateInputProps>;

export const Playground: Story = {
  render: ({ value, ...args }) => {
    const parsedValue = value ? new Date(value) : value;

    return <DateInput value={parsedValue} {...args} />;
  },
};
