import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';
import { Title, TitleProps } from './Title';

export default {
  title: 'Typography/Title',
  component: Title,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Typography'),
  },
  decorators: [withCartesian],
} as Meta<TitleProps>;

const Template: Story<TitleProps> = (args) => (
  <div>
    <Title level="1" {...args}>
      Title 1
    </Title>
    <Title level="2" {...args}>
      Title 2
    </Title>
    <Title level="3" {...args}>
      Title 3
    </Title>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};
