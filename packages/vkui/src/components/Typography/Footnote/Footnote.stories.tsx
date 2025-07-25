import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Footnote, type FootnoteProps } from './Footnote';

const story: Meta<FootnoteProps> = {
  title: 'Typography/Typography/Footnote',
  component: Footnote,
  parameters: createStoryParameters('Footnote', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

type Story = StoryObj<FootnoteProps>;

export const Playground: Story = {
  render: (args) => <Footnote {...args}>Footnote</Footnote>,
};

export const WithCaps: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    caps: true,
  },
};
