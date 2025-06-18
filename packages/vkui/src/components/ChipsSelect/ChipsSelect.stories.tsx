import type { Meta, StoryObj } from '@storybook/react';
import { Icon12Download } from '@vkontakte/icons';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import type { ChipOption } from '../ChipsInputBase/types';
import { FormItem } from '../FormItem/FormItem';
import { ChipsSelect, type ChipsSelectProps } from './ChipsSelect';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<ChipsSelectProps<ChipOption>> = {
  title: 'Forms/ChipsSelect',
  component: ChipsSelect,
  parameters: createStoryParameters('ChipsSelect', CanvasFullLayout, DisableCartesianParam),
  args: { onChange: fn(), onChangeStart: fn(), onInputChange: fn() },
  argTypes: {
    before: iconsPresets,
  },
};

export default story;

type Story = StoryObj<ChipsSelectProps<ChipOption>>;

const groups = [
  { value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> },
  {
    value: '1',
    label: 'Arctic Monkeys',
  },
  { value: '2', label: 'Звери', disabled: true },
  { value: '4', label: 'FACE' },
  {
    value: '3',
    label: 'Depeche Mode',
  },
  { value: '5', label: 'Linkin Park' },
];

export const Playground: Story = {
  render: (args) => (
    <FormItem top="Выберите музыкальные группы" htmlFor="chips-select" style={{ width: 320 }}>
      <ChipsSelect {...args} id="chips-select" />
    </FormItem>
  ),
  args: {
    options: groups,
  },
};
