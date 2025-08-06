import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Div, type DivProps } from './Div';

const story: Meta<DivProps> = {
  title: 'Layout/Div',
  component: Div,
  parameters: createStoryParameters('Div', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
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
