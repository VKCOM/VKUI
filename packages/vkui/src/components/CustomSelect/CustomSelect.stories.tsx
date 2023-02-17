import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { cities } from '../../testing/mock';
import { CustomSelect, SelectProps } from './CustomSelect';

const story: Meta<SelectProps> = {
  title: 'Forms/CustomSelect',
  component: CustomSelect,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<SelectProps> = (args) => <CustomSelect {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
  options: cities,
};
