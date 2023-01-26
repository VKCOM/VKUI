import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RangeSlider, RangeSliderProps } from './RangeSlider';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<RangeSliderProps>;

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />;

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
