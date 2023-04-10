import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { ImageBaseBadge, ImageBaseBadgeProps } from './ImageBaseBadge';

const story: Meta<ImageBaseBadgeProps> = {
  title: 'Blocks/ImageBaseBadge',
  component: ImageBaseBadge,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ImageBaseBadgeProps>;

export const Playground: Story = {
  render: ({ children, ...args }) => <ImageBaseBadge {...args}>{children}</ImageBaseBadge>,
  decorators: [
    (Component, context) => (
      <div style={{ width: 50, height: 50, border: '1px dashed red', position: 'relative' }}>
        <Component args={{ ...context.args }} />
      </div>
    ),
  ],
};
