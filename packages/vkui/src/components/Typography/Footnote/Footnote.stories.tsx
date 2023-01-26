import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Footnote, FootnoteProps } from './Footnote';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Typography/Footnote',
  component: Footnote,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<FootnoteProps>;

const Template: Story<FootnoteProps> = (args) => <Footnote {...args}>Footnote</Footnote>;

export const Playground = Template.bind({});
Playground.args = {};

export const WithCaps = Template.bind({});
WithCaps.args = {
  ...Playground.args,
  caps: true,
};
