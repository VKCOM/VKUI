import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CustomSelectOption, CustomSelectOptionProps } from './CustomSelectOption';

const story: Meta<CustomSelectOptionProps> = {
  title: 'Forms/CustomSelectOption',
  component: CustomSelectOption,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<CustomSelectOptionProps> = (args) => <CustomSelectOption {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
  children: 'Игорь Федоров',
  description: 'Россия, Санкт-Петербург',
};
