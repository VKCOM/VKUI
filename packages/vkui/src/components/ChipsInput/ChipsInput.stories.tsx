import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ChipOption } from '../Chip/Chip';
import { ChipsInput, ChipsInputProps } from './ChipsInput';

const story: Meta<ChipsInputProps<ChipOption>> = {
  title: 'Forms/ChipsInput',
  component: ChipsInput,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ChipsInputProps<ChipOption>>;

export const Playground: Story = {};
