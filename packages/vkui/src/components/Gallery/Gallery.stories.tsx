import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Gallery, GalleryProps } from './Gallery';

const story: Meta<GalleryProps> = {
  title: 'Blocks/Gallery',
  component: Gallery,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<GalleryProps>;

export const Playground: Story = {
  render: (args) => (
    <Gallery {...args}>
      <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
      <img alt="image" src="https://picsum.photos/1024/640" style={{ display: 'block' }} />
      <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
    </Gallery>
  ),
};
