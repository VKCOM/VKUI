import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ImageBaseOverlay, ImageBaseOverlayProps } from './ImageBaseOverlay';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getFigmaPage } from '../../../storybook/helpers';

export default {
  title: 'Blocks/ImageBaseOverlay',
  component: ImageBaseOverlay,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Avatar'), ...DisableCartesianParam },
} as Meta<ImageBaseOverlayProps>;

const Template: Story<ImageBaseOverlayProps> = ({ children, ...args }) => (
  <ImageBaseOverlay {...args}>{children}</ImageBaseOverlay>
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
