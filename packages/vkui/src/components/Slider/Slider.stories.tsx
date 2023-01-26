import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Slider, SliderProps } from './Slider';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<SliderProps>;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
