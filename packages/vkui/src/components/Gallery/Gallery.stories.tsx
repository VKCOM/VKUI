import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Gallery, type GalleryProps } from './Gallery';

const story: Meta<GalleryProps> = {
  title: 'Data Display/Gallery',
  component: Gallery,
  parameters: createStoryParameters('Gallery', CanvasFullLayout, DisableCartesianParam),
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryObj<GalleryProps>;

export const Playground: Story = {
  render: (args) => (
    <Gallery
      {...args}
      style={{
        width: 800,
        height: 400,
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid black',
        ...args.style,
      }}
      slideWidth="90%"
    >
      <img src="https://placebear.com/1024/640" style={{ display: 'block' }} />
      <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
      <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
    </Gallery>
  ),
};
