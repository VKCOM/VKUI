import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Slider, type SliderMultipleProps, type SliderProps } from './Slider';

function getAriaLabel(index: number) {
  return index === 1 ? 'Pineapple Maximum Count' : 'Pineapple Minimum Count';
}

const story: Meta<SliderProps> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: createStoryParameters('Slider', CanvasFullLayout, DisableCartesianParam, {
    liveCodeEditor: {
      scope: { forceRemountKey },
    },
  }),
  args: {
    getAriaLabel,
  },
  argTypes: {
    defaultValue: {
      table: { defaultValue: { summary: 'min | [min, max]' } },
    },
    multiple: {
      table: { defaultValue: { summary: 'false' } },
    },
    getAriaLabel: {
      table: {
        defaultValue: {
          summary: `Для примера используется функция: ${getAriaLabel.toString()}`,
        },
      },
    },
  },
  tags: ['Формы и поля ввода'],
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

type Story = StoryFn<SliderProps>;

function forceRemountKey(args: SliderProps | SliderMultipleProps): 'multiple' | 'single' {
  return args?.multiple ? 'multiple' : 'single';
}

export const Playground: Story = (props: SliderProps | SliderMultipleProps) => (
  <Group>
    <FormItem top="Pineapple Count">
      <Slider key={forceRemountKey(props)} {...props} />
    </FormItem>
  </Group>
);

export const Tooltip: Story = (props: SliderProps | SliderMultipleProps) => (
  <Group>
    <FormItem top="Pineapple Count">
      <Slider key={forceRemountKey(props)} {...props} />
    </FormItem>
  </Group>
);

Tooltip.args = {
  withTooltip: true,
};
