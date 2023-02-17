import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Input, InputProps } from './Input';

const story: Meta<InputProps> = {
  title: 'Forms/Input',
  component: Input,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
