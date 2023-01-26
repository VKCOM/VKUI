import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { CanvasFullLayout } from '../../storybook/constants';
import {
  IconExampleForOverlayBasedOnImageBaseSize,
  IconExampleForBadgeBasedOnImageBaseSize,
} from '../../testing/icons';
import { Playground as ImageBaseOverlay } from '../ImageBase/ImageBaseOverlay/ImageBaseOverlay.stories';
import { Playground as ImageBaseBadge } from '../ImageBase/ImageBaseBadge/ImageBaseBadge.stories';
import { getFigmaPage } from '../../storybook/helpers';
import { getAvatarUrl } from '../../testing/mock';
import { imageBaseSizes } from '../ImageBase/types';

export default {
  title: 'Blocks/Avatar',
  component: Avatar,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Avatar') },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: imageBaseSizes,
    },
    badge: {
      description: 'Использовать Badge',
      table: {
        type: {
          summary: 'string',
        },
      },
      options: ['None', 'BadgeOnline', 'BadgeOnlineMobile', 'Icon'],
      mapping: {
        None: null,
        BadgeOnline: <Avatar.BadgeWithPreset preset="online" />,
        BadgeOnlineMobile: <Avatar.BadgeWithPreset preset="online-mobile" />,
        Icon: (
          <Avatar.Badge>
            <IconExampleForBadgeBasedOnImageBaseSize />
          </Avatar.Badge>
        ),
      },
      control: { type: 'inline-radio' },
    },
    overlay: {
      description: 'Использовать Overlay',
      table: {
        type: {
          summary: 'string',
        },
      },
      options: ['None', 'OnHover', 'Always'],
      mapping: {
        None: null,
        OnHover: (
          <Avatar.Overlay>
            <IconExampleForOverlayBasedOnImageBaseSize />
          </Avatar.Overlay>
        ),
        Always: (
          <Avatar.Overlay visibility="always">
            <IconExampleForOverlayBasedOnImageBaseSize />
          </Avatar.Overlay>
        ),
      },
      control: { type: 'inline-radio' },
    },
  },
  decorators: [withCartesian],
} as Meta<AvatarProps>;

const Template: Story<AvatarProps & { badge: React.ReactNode; overlay: React.ReactNode }> = ({
  badge,
  overlay,
  children,
  ...args
}) => (
  <Avatar src={args.initials ? undefined : getAvatarUrl('user_id34')} {...args}>
    {badge}
    {overlay}
    {children}
  </Avatar>
);

export const Playground = Template.bind({});
Playground.args = {};

export const WithBadge = Template.bind({});
WithBadge.args = {
  children: (
    <ImageBaseBadge {...ImageBaseBadge.args}>
      <IconExampleForBadgeBasedOnImageBaseSize />
    </ImageBaseBadge>
  ),
};

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  children: (
    <ImageBaseOverlay {...ImageBaseOverlay.args}>
      <IconExampleForOverlayBasedOnImageBaseSize />
    </ImageBaseOverlay>
  ),
};
