import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Caption, CaptionProps } from './Caption';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<CaptionProps>;

const Template: Story<CaptionProps> = (args) => (
  <div>
    <Caption level="1" {...args}>
      Caption 1
    </Caption>
    <Caption level="2" {...args}>
      Caption 2
    </Caption>
    <Caption level="3" {...args}>
      Caption 3
    </Caption>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};

export const WithCaps = Template.bind({});
WithCaps.args = {
  ...Playground.args,
  caps: true,
};
