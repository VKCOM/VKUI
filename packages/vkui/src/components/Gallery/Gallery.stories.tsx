import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Gallery, GalleryProps } from './Gallery';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';

export default {
  title: 'Blocks/Gallery',
  component: Gallery,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<GalleryProps>;

const Template: Story<GalleryProps> = (args) => (
  <Gallery {...args}>
    <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
    <img alt="image" src="https://picsum.photos/1024/640" style={{ display: 'block' }} />
    <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
  </Gallery>
);

export const Playground = Template.bind({});
Playground.args = {};
