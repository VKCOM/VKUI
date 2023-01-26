import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Headline, HeadlineProps } from './Headline';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Typography/Headline',
  component: Headline,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<HeadlineProps>;

const Template: Story<HeadlineProps> = (args) => (
  <div>
    <Headline level="1" {...args}>
      Headline 1
    </Headline>
    <Headline level="2" {...args}>
      Headline 2
    </Headline>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};
