import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SelectMimicry, SelectMimicryProps } from './SelectMimicry';

type StorySelectMimicryProps = SelectMimicryProps & { selectValue: string };

const story: Meta<StorySelectMimicryProps> = {
  title: 'Forms/SelectMimicry',
  component: SelectMimicry,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    selectValue: {
      description: 'Для отображения выбранного значения',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: 'Россия',
      control: { type: 'select' },
      options: ['Россия', 'Италия', 'Англия'],
    },
  },
};

export default story;

const Template: Story<StorySelectMimicryProps> = ({ selectValue, ...args }) => (
  <SelectMimicry {...args}>{selectValue}</SelectMimicry>
);

export const Playground = Template.bind({});
Playground.args = {};
