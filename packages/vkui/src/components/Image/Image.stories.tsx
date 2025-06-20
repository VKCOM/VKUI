import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Image, type ImageProps } from './Image';

const story: Meta<ImageProps> = {
  title: 'Data Display/Image',
  component: Image,
  parameters: createStoryParameters('Image', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    filter: {
      control: { type: 'select' },
      options: ['blur', 'contrast', 'grayscale', 'hue-rotate', 'drop-shadow'],
      mapping: {
        'blur': 'blur(5px)',
        'contrast': 'contrast(200%)',
        'grayscale': 'grayscale(80%)',
        'hue-rotate': 'hue-rotate(90deg)',
        'drop-shadow': 'drop-shadow(16px 16px 20px red) invert(75%)',
      },
    },
  },
};

export default story;

type Story = StoryObj<ImageProps>;

export const Playground: Story = {
  args: {
    src: getAvatarUrl('app_shorm_online'),
    alt: 'Приложение шторм онлайн',
  },
};
