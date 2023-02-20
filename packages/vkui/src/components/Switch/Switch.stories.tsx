import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
