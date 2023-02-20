import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { getAvatarUrl } from '../../testing/mock';
import { imageBaseSizes } from '../ImageBase/types';
import { GridAvatar, GridAvatarProps } from './GridAvatar';

const story: Meta<GridAvatarProps> = {
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
};

export default story;

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
