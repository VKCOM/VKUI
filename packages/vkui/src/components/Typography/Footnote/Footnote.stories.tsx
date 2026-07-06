import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Footnote, type FootnoteProps } from './Footnote';

const story: Meta<FootnoteProps> = {
  title: 'Typography/Footnote',
  component: Footnote,
  parameters: createStoryParameters('Footnote', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

type Story = StoryFn<FootnoteProps>;
export const Playground: Story = (args: FootnoteProps) => <Footnote {...args}>Footnote</Footnote>;

export const WithCaps: Story = (args: FootnoteProps) => <Footnote {...args}>Footnote</Footnote>;
WithCaps.args = {
  ...Playground.args,
  caps: true,
};
