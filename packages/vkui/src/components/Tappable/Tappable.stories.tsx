import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Tappable, TappableProps } from './Tappable';

const story: Meta<TappableProps> = {
  title: 'Blocks/Tappable',
  component: Tappable,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<TappableProps> = (args) => (
  <Tappable {...args}>
    <div style={{ padding: 16 }}>Tappable</div>
  </Tappable>
);

export const Playground = Template.bind({});
Playground.args = {};
