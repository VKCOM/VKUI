import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NativeSelect, NativeSelectProps } from './NativeSelect';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<NativeSelectProps>;

const Template: Story<NativeSelectProps> = (args) => (
  <NativeSelect {...args}>
    <option value="m">Мужской</option>
    <option value="f">Женский</option>
  </NativeSelect>
);

export const Playground = Template.bind({});
Playground.args = {};
