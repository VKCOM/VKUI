import { type Meta, type StoryFn } from '@storybook/react';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Box } from '../Box/Box';
import { Group } from '../Group/Group';
import { Accordion, type AccordionProps } from './Accordion';

const story: Meta<AccordionProps> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  args: { onChange: fn() },
  parameters: createStoryParameters('Accordion', CanvasFullLayout, DisableCartesianParam),
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryFn<AccordionProps>;

export const Playground: Story = (args: AccordionProps) => (
  <Group>
    <Accordion {...args}>
      <Accordion.Summary>Title</Accordion.Summary>
      <Accordion.Content>
        <Box padding="system">Content</Box>
      </Accordion.Content>
    </Accordion>
  </Group>
);

Playground.args = {
  expanded: true,
};
