import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon12Download } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ChipOption } from '../Chip/Chip';
import { ChipsSelect, ChipsSelectProps } from './ChipsSelect';

const story: Meta<ChipsSelectProps<ChipOption>> = {
  title: 'Forms/ChipsSelect',
  component: ChipsSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ChipsSelectProps<ChipOption>>;

const groups = [
  { value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> },
  {
    value: '1',
    label: 'Arctic Monkeys',
  },
  { value: '2', label: 'Звери' },
  { value: '4', label: 'FACE' },
  {
    value: '3',
    label: 'Depeche Mode',
  },
  { value: '5', label: 'Linkin Park' },
];

export const Playground: Story = {
  args: {
    options: groups,
  },
};
