import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChipsSelect, ChipsSelectProps } from './ChipsSelect';
import { ChipOption } from '../Chip/Chip';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon12Download } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/ChipsSelect',
  component: ChipsSelect,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<ChipsSelectProps<ChipOption>>;

const Template: Story<ChipsSelectProps<ChipOption>> = (args) => <ChipsSelect {...args} />;

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

export const Playground = Template.bind({});
Playground.args = {
  options: groups,
};
