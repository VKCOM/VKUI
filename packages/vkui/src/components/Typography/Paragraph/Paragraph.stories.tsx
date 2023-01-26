import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<ParagraphProps>;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args}>Paragraph</Paragraph>;

export const Playground = Template.bind({});
Playground.args = {};
