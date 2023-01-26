import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DateInput, DateInputProps } from './DateInput';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
  },
} as Meta<DateInputProps>;

const Template: Story<DateInputProps> = ({ value, ...args }) => {
  const parsedValue = value ? new Date(value) : value;

  return <DateInput value={parsedValue} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {};
