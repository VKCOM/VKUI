import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Div, DivProps } from './Div';

const story: Meta<DivProps> = {
  title: 'Blocks/Div',
  component: Div,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
