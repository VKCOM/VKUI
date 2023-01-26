import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomSelectOption, CustomSelectOptionProps } from './CustomSelectOption';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/CustomSelectOption',
  component: CustomSelectOption,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<CustomSelectOptionProps>;

const Template: Story<CustomSelectOptionProps> = (args) => <CustomSelectOption {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
  children: 'Игорь Федоров',
  description: 'Россия, Санкт-Петербург',
};
