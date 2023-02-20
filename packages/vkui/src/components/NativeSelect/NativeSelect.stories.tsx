import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const story: Meta<NativeSelectProps> = {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<NativeSelectProps> = (args) => (
  <NativeSelect {...args}>
    <option value="m">Мужской</option>
    <option value="f">Женский</option>
  </NativeSelect>
);

export const Playground = Template.bind({});
Playground.args = {};
