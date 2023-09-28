import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<StorySelectMimicryProps>;

export const Playground: Story = {
  render: ({ selectValue, ...args }) => <SelectMimicry {...args}>{selectValue}</SelectMimicry>,
};
