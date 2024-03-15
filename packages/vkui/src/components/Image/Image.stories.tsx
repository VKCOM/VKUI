import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Image, ImageProps } from './Image';

const story: Meta<ImageProps> = {
  title: 'Blocks/Image',
  component: Image,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ImageProps>;

export const Playground: Story = {
  args: {
    src: getAvatarUrl('app_shorm_online'),
    alt: 'Приложение шторм онлайн',
  },
};
