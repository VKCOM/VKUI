import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Paragraph, type ParagraphProps } from './Paragraph';

const story: Meta<ParagraphProps> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<ParagraphProps>;

export const Playground: Story = {
  render: (args) => <Paragraph {...args}>Paragraph</Paragraph>,
};
