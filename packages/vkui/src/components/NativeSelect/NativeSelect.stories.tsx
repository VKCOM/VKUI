import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const story: Meta<NativeSelectProps> = {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<NativeSelectProps>;

export const Playground: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <option value="m">Мужской</option>
      <option value="f">Женский</option>
    </NativeSelect>
  ),
};
