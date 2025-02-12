import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Gallery, type GalleryProps } from './Gallery';

const story: Meta<GalleryProps> = {
  title: 'Blocks/Gallery',
  component: Gallery,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
      }}
      slideWidth="90%"
    >
      <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
      <img src="https://placebear.com/1024/640" style={{ display: 'block' }} />
      <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
    </Gallery>
  ),
};
