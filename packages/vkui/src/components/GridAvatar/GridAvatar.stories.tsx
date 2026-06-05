import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { getAvatarUrl } from '../../testing/mock';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { imageBaseSizes } from '../ImageBase/types';
import { GridAvatar, type GridAvatarProps } from './GridAvatar';

type StoryGridAvatarProps = GridAvatarProps & { badged: boolean };

const story: Meta<StoryGridAvatarProps> = {
  title: 'Data Display/GridAvatar',
  component: GridAvatar,
  parameters: createStoryParameters('GridAvatar', CanvasFullLayout),
  argTypes: {
    badged: {
      control: 'boolean',
    },
    size: {
      control: {
        type: 'select',
      },
      options: [...imageBaseSizes],
    },
  },
  decorators: [withCartesian],
  tags: ['Отображение данных'],
};

export default story;

export const Playground: StoryFn<StoryGridAvatarProps> = ({
  badged,
  size = 48,
  ...args
}: StoryGridAvatarProps) => {
  const badge =
    size >= 24 && badged ? (
      <GridAvatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </GridAvatar.Badge>
    ) : undefined;
  return (
    <GridAvatar {...args} size={size}>
      {badge}
    </GridAvatar>
  );
};

Playground.args = {
  src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
  badged: false,
};
