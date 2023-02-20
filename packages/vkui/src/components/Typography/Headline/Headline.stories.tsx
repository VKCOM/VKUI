import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Headline, HeadlineProps } from './Headline';

export default {
  title: 'Typography/Headline',
  component: Headline,
  parameters: CanvasFullLayout,
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
