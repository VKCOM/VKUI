import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { ImageBase } from '../ImageBase';
import { ImageBaseOverlay, type ImageBaseOverlayProps } from './ImageBaseOverlay';

const story: Meta<ImageBaseOverlayProps> = {
  title: 'Data Display/Image/ImageBaseOverlay',
  component: ImageBaseOverlay,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [
    (Component) => (
      <ImageBase size={48} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
        <Component />
      </ImageBase>
    ),
  ],
};

export default story;

type Story = StoryObj<ImageBaseOverlayProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Кнопка для изображения',
  },
};
