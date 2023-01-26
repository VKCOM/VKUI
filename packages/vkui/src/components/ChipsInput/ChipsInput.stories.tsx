import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChipsInput, ChipsInputProps } from './ChipsInput';
import { ChipOption } from '../Chip/Chip';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/ChipsInput',
  component: ChipsInput,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<ChipsInputProps<ChipOption>>;

const Template: Story<ChipsInputProps<ChipOption>> = (args) => <ChipsInput {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
