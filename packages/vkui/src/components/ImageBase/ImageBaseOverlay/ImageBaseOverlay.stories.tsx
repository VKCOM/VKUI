import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { ImageBase } from '../ImageBase';
import { ImageBaseOverlay, type ImageBaseOverlayProps } from './ImageBaseOverlay';

const story: Meta<ImageBaseOverlayProps> = {
  title: 'Data Display/ImageBase/ImageBaseOverlay',
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

export const Playground: StoryFn<ImageBaseOverlayProps> = (props: ImageBaseOverlayProps) => (
  <ImageBase size={48} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
    <ImageBase.Overlay {...props} />
  </ImageBase>
);

Playground.args = {
  'aria-label': 'Кнопка для изображения',
};
