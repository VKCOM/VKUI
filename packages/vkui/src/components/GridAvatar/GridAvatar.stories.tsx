import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { IconExampleForBadgeBasedOnImageBaseSize } from '../../testing/icons';
import { getAvatarUrl } from '../../testing/mock';
import { imageBaseSizes } from '../ImageBase/types';
import { GridAvatar, GridAvatarProps } from './GridAvatar';

type StoryGridAvatarProps = GridAvatarProps & { badged: boolean };

const story: Meta<StoryGridAvatarProps> = {
  title: 'Blocks/GridAvatar',
  component: GridAvatar,
  parameters: CanvasFullLayout,
  argTypes: {
    badged: {
      control: 'boolean',
    },
    size: {
      control: {
        type: 'select',
      },
      options: imageBaseSizes,
    },
  },
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<StoryGridAvatarProps>;

export const Playground: Story = {
  render: ({ badged, size = 48, ...args }) => {
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
  },
  args: {
    src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    badged: false,
  },
};
