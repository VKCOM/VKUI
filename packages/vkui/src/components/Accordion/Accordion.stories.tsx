import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Accordion, type AccordionProps } from './Accordion';

const story: Meta<AccordionProps> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  args: { onChange: fn() },
  parameters: createStoryParameters('Accordion', CanvasFullLayout, DisableCartesianParam),
};

export default story;

export const Playground: StoryObj<AccordionProps> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Summary>Title</Accordion.Summary>
      <Accordion.Content>
        <Div>Content</Div>
      </Accordion.Content>
    </Accordion>
  ),
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};
