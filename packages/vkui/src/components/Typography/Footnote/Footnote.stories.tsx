import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Footnote, FootnoteProps } from './Footnote';

const story: Meta<FootnoteProps> = {
  title: 'Typography/Footnote',
  component: Footnote,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
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
