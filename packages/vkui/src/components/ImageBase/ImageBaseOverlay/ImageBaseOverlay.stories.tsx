import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { ImageBaseOverlay, ImageBaseOverlayProps } from './ImageBaseOverlay';

const story: Meta<ImageBaseOverlayProps> = {
  title: 'Blocks/ImageBaseOverlay',
  component: ImageBaseOverlay,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ImageBaseOverlayProps>;

export const Playground: Story = {
  render: ({ children, ...args }) => <ImageBaseOverlay {...args}>{children}</ImageBaseOverlay>,
  decorators: [
    (Component, context) => (
      <div style={{ width: 50, height: 50, border: '1px dashed red', position: 'relative' }}>
        <Component args={{ ...context.args }} />
      </div>
    ),
  ],
};
