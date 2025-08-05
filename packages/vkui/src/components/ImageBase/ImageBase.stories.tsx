import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ImageBase, type ImageBaseProps } from './ImageBase';

const story: Meta<ImageBaseProps> = {
  title: 'Data Display/ImageBase',
  component: ImageBase,
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
    fallbackIcon: createFieldWithPresets({
      iconSizes: ['12', '16', '20', '24', '28', '36'],
    }),
  },
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryObj<ImageBaseProps>;

export const Playground: Story = {
  args: {
    src: getAvatarUrl('app_shorm_online'),
    alt: 'Приложение шторм онлайн',
    size: 64,
  },
};
