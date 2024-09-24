import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities } from '../../testing/mock';
import { CustomSelect, type SelectProps } from './CustomSelect';

const story: Meta<SelectProps> = {
  title: 'Forms/CustomSelect',
  component: CustomSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onOpen: fn(), onClose: fn() },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    options: cities,
  },
};
