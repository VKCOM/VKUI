import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';
import { ImageBaseBadge, ImageBaseBadgeProps } from './ImageBaseBadge';

const story: Meta<ImageBaseBadgeProps> = {
  title: 'Blocks/ImageBaseBadge',
  component: ImageBaseBadge,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Avatar'), ...DisableCartesianParam },
};

export default story;

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
