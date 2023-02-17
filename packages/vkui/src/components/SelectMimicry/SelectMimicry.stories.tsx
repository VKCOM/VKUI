import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { SelectMimicry, SelectMimicryProps } from './SelectMimicry';

const story: Meta<SelectMimicryProps> = {
  title: 'Forms/SelectMimicry',
  component: SelectMimicry,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
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

const Template: Story<SelectMimicryProps & { selectValue: string }> = ({
  selectValue,
  ...args
}) => <SelectMimicry {...args}>{selectValue}</SelectMimicry>;

export const Playground = Template.bind({});
Playground.args = {};
