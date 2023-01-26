import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tappable, TappableProps } from './Tappable';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';

export default {
  title: 'Blocks/Tappable',
  component: Tappable,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<TappableProps>;

const Template: Story<TappableProps> = (args) => (
  <Tappable {...args}>
    <div style={{ padding: 16 }}>Tappable</div>
  </Tappable>
);

export const Playground = Template.bind({});
Playground.args = {};
