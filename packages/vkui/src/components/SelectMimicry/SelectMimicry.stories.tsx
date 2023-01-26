import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectMimicry, SelectMimicryProps } from './SelectMimicry';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
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
} as Meta<SelectMimicryProps>;

const Template: Story<SelectMimicryProps & { selectValue: string }> = ({
  selectValue,
  ...args
}) => <SelectMimicry {...args}>{selectValue}</SelectMimicry>;

export const Playground = Template.bind({});
Playground.args = {};
