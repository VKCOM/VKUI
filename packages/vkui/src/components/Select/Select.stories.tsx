import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Select } from './Select';
import { SelectProps } from '../CustomSelect/CustomSelect';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Select',
  component: Select,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
};
