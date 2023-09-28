import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Div, DivProps } from './Div';

const story: Meta<DivProps> = {
  title: 'Blocks/Div',
  component: Div,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<DivProps>;

export const Playground: Story = {
  render: (args) => <Div {...args}>Content with paddings</Div>,
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};
