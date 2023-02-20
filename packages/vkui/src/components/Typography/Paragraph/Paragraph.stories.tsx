import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
} as Meta<ParagraphProps>;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args}>Paragraph</Paragraph>;

export const Playground = Template.bind({});
Playground.args = {};
