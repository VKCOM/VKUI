import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ImageBaseBadge, ImageBaseBadgeProps } from './ImageBaseBadge';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Blocks/ImageBaseBadge',
  component: ImageBaseBadge,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Avatar'), ...DisableCartesianParam },
} as Meta<ImageBaseBadgeProps>;

const Template: Story<ImageBaseBadgeProps> = ({ children, ...args }) => (
  <ImageBaseBadge {...args}>{children}</ImageBaseBadge>
);

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component, context) => (
    <div style={{ width: 50, height: 50, border: '1px dashed red', position: 'relative' }}>
      <Component args={{ ...context.args }} />
    </div>
  ),
];
