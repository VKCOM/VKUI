import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GridAvatar, GridAvatarProps } from './GridAvatar';
import { CanvasFullLayout } from '../../storybook/constants';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';
import { imageBaseSizes } from '../ImageBase/types';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { getAvatarUrl } from '../../testing/mock';

export default {
  title: 'Blocks/GridAvatar',
  component: GridAvatar,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('GridAvatar') },
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
} as Meta<GridAvatarProps>;

const Template: Story<GridAvatarProps & { badged: boolean }> = ({ badged, ...args }) => {
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
