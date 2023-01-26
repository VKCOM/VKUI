import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Subhead, SubheadProps } from './Subhead';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Typography/Subhead',
  component: Subhead,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<SubheadProps>;

const Template: Story<SubheadProps> = (args) => <Subhead {...args}>Subhead</Subhead>;

export const Playground = Template.bind({});
Playground.args = {};
