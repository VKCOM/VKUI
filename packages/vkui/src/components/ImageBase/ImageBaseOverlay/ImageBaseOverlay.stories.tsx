import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { ImageBase } from '../ImageBase';
import { ImageBaseOverlay, ImageBaseOverlayProps } from './ImageBaseOverlay';

const story: Meta<ImageBaseOverlayProps> = {
  title: 'Blocks/ImageBaseOverlay',
  component: ImageBaseOverlay,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ImageBaseOverlayProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Кнопка для изображения',
  },
  decorators: [
    (Component) => (
      <ImageBase size={48} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
        <Component />
      </ImageBase>
    ),
  ],
};
