import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Div, DivProps } from './Div';
import { Group } from '../Group/Group';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';

export default {
  title: 'Blocks/Div',
  component: Div,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<DivProps>;

const Template: Story<DivProps> = (args) => <Div {...args}>Content with paddings</Div>;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <Group>
      <Component />
    </Group>
  ),
];
