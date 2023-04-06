import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SelectProps } from '../CustomSelect/CustomSelect';
import { Select } from './Select';

const story: Meta<SelectProps> = {
  title: 'Forms/Select',
  component: Select,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
  },
};
