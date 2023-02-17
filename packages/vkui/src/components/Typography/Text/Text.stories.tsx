import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';
import { Text, TextProps } from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => <Text {...args}>Text</Text>;

export const Playground = Template.bind({});
Playground.args = {};
