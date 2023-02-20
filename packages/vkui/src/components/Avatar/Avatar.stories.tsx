import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForOverlayBasedOnImageBaseSize,
} from '../../testing/icons';
import { getAvatarUrl } from '../../testing/mock';
import { imageBaseSizes } from '../ImageBase/types';
import { Avatar, AvatarProps } from './Avatar';

type AvatarStoryProps = AvatarProps & { badge: React.ReactNode; overlay: React.ReactNode };

const story: Meta<AvatarStoryProps> = {
  title: 'Blocks/Avatar',
  component: Avatar,
  parameters: CanvasFullLayout,
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
};

export default story;

const Template: Story<AvatarStoryProps> = ({ badge, overlay, children, ...args }) => (
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
    <Avatar.Badge>
      <IconExampleForBadgeBasedOnImageBaseSize />
    </Avatar.Badge>
  ),
};

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  children: (
    <Avatar.Overlay>
      <IconExampleForOverlayBasedOnImageBaseSize />
    </Avatar.Overlay>
  ),
};
