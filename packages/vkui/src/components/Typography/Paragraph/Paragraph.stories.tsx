import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Paragraph, type ParagraphProps } from './Paragraph';

const story: Meta<ParagraphProps> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: createStoryParameters('Paragraph', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

export const Playground: StoryObj<ParagraphProps> = (args: ParagraphProps) => (
  <Paragraph {...args}>Paragraph</Paragraph>
);
Playground.args = {};
