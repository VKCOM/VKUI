import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Checkbox } from '../Checkbox/Checkbox';
import { SelectionControl, type SelectionControlProps } from './SelectionControl';

const story: Meta<SelectionControlProps> = {
  title: 'Utils/SelectionControl',
  component: SelectionControl,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<SelectionControlProps>;

export const Playground: Story = {
  render: (props) => (
    <SelectionControl {...props}>
      <Checkbox.Input />
      <SelectionControl.Label>Согласен</SelectionControl.Label>
    </SelectionControl>
  ),
};
