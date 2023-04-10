import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Switch, SwitchProps } from './Switch';

const story: Meta<SwitchProps> = {
  title: 'Blocks/Switch',
  component: Switch,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default story;

type Story = StoryObj<SwitchProps>;

export const Playground: Story = {};
