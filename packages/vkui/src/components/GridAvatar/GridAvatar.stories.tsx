import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
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

const Template: Story<StoryGridAvatarProps> = ({ badged, ...args }) => {
  const badge = badged ? (
    <GridAvatar.Badge>
      <Icon20GiftCircleFillRed width={16} height={16} />
    </GridAvatar.Badge>
  ) : undefined;

  return <GridAvatar {...args}>{badge}</GridAvatar>;
};

export const Playground = Template.bind({});
Playground.args = {
  src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
  badged: false,
};
