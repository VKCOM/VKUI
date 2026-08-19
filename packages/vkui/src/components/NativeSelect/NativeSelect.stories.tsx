import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { Skeleton } from '../Skeleton/Skeleton';
import { NativeSelect, type NativeSelectProps } from './NativeSelect';

const story: Meta<NativeSelectProps> = {
  title: 'Forms/NativeSelect',
  component: NativeSelect,
  parameters: createStoryParameters('NativeSelect', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    before: getFormFieldIconsPresets(),
  },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryFn<NativeSelectProps>;

export const Playground: Story = (args: NativeSelectProps) => (
  <NativeSelect {...args}>
    <option value="m">Мужской</option>
    <option value="f">Женский</option>
  </NativeSelect>
);

export const SkeletonExample: StoryFn = () => (
  <SelectMimicry style={{ width: 300 }} aria-busy>
    <Skeleton width={120} />
  </SelectMimicry>
);
