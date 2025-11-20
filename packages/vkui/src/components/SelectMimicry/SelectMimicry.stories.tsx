import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { SelectMimicry, type SelectMimicryProps } from './SelectMimicry';

const iconsPresets = getFormFieldIconsPresets();

type StorySelectMimicryProps = SelectMimicryProps & { selectValue: string };

const story: Meta<StorySelectMimicryProps> = {
  title: 'Forms/SelectMimicry',
  component: SelectMimicry,
  parameters: createStoryParameters('SelectMimicry', CanvasFullLayout, DisableCartesianParam),
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
    after: iconsPresets,
    before: iconsPresets,
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryObj<StorySelectMimicryProps>;

export const Playground: Story = {
  render: ({ selectValue, ...args }) => <SelectMimicry {...args}>{selectValue}</SelectMimicry>,
};
