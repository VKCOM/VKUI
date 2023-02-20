import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ChipOption } from '../Chip/Chip';
import { ChipsInput, ChipsInputProps } from './ChipsInput';

const story: Meta<ChipsInputProps<ChipOption>> = {
  title: 'Forms/ChipsInput',
  component: ChipsInput,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<ChipsInputProps<ChipOption>> = (args) => <ChipsInput {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
