import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Accordion, AccordionProps } from './Accordion';

const story: Meta<AccordionProps> = {
  title: 'Blocks/Accordion',
  component: Accordion,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

export const Playground: StoryObj<AccordionProps> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Summary>Title</Accordion.Summary>
      <Div>Content</Div>
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
