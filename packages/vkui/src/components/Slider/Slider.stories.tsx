import React from 'react';
import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Slider, type SliderMultipleProps, type SliderProps } from './Slider';

function getAriaLabel(index: number) {
  return index === 1 ? 'Pineapple Maximum Count' : 'Pineapple Minimum Count';
}

const story: Meta<SliderProps> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
};

export default story;

type Story = StoryObj<SliderProps | SliderMultipleProps>;

const forceRemountKey = (args: Story['args']) => (args?.multiple ? 'multiple' : 'single');

export const Playground: Story = {
  decorators: [
    (Component: typeof Slider, context: StoryContext<SliderProps | SliderMultipleProps>) => (
      <Group>
        <FormItem top="Pineapple Count">
          <Component key={forceRemountKey(context.args)} {...context.args} />
        </FormItem>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const Tooltip: Story = {
  ...Playground,
  args: {
    withTooltip: true,
  },
};
