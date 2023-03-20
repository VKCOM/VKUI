import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <Accordion.Summary>Title</Accordion.Summary>
    <Div>Content</Div>
  </Accordion>
);

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <Group>
      <Component />
    </Group>
  ),
];
