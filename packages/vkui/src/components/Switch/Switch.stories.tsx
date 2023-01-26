import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Switch',
  component: Switch,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Switch'), ...DisableCartesianParam },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<SwitchProps>;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
