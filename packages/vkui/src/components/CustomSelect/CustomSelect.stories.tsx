import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomSelect, SelectProps } from './CustomSelect';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { cities } from '../../testing/mock';

export default {
  title: 'Forms/CustomSelect',
  component: CustomSelect,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => <CustomSelect {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
  options: cities,
};
