import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Group } from '../Group/Group';
import { Slider, SliderProps } from './Slider';

const story: Meta<SliderProps> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

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
