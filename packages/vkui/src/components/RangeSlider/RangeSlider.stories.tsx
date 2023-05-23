import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { RangeSlider, RangeSliderProps } from './RangeSlider';

function getAriaLabel(index: number) {
  return index === 1 ? 'Pineapple Maximum Count' : 'Pineapple Minimum Count';
}

const story: Meta<RangeSliderProps> = {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: {
    getAriaLabel,
  },
  argTypes: {
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

type Story = StoryObj<RangeSliderProps>;

export const Playground: Story = {
  decorators: [
    (Component, context) => (
      <Group>
        <FormItem top="Pineapple Count">
          <Component {...context.args} />
        </FormItem>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
