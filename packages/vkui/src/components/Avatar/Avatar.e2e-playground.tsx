import * as React from 'react';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  testImage,
} from '@vkui-e2e/playground-helpers';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
  IconExampleForOverlayBasedOnImageBaseSize,
} from '../../testing/icons';
import { Avatar, type AvatarProps } from './Avatar';

export const AvatarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          src: [undefined, testImage],
          initials: [undefined, 'AB'],
          fallbackIcon: [
            <IconExampleForFallbackBasedOnImageBaseSize key="icon-fallback" />,
            undefined,
          ],
        },
        {
          size: [96, 16],
          gradientColor: [1],
          initials: ['AB'],
        },
        {
          gradientColor: [1],
          fallbackIcon: [<IconExampleForFallbackBasedOnImageBaseSize key="icon-fallback" />],
        },
        {
          withBorder: [undefined, false],
        },
        {
          gradientColor: [1, 2, 3, 5, 6, 'blue'],
        },
        {
          gradientColor: ['custom'],
          style: [{ backgroundImage: 'linear-gradient(#e66465, #9198e5)' }],
        },
        {
          size: [96, 24],
          children: [
            <Avatar.BadgeWithPreset key="preset-online" preset="online" />,
            <Avatar.BadgeWithPreset key="preset-online-mobile" preset="online-mobile" />,
            <Avatar.Badge key="example-icon">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Avatar.Badge>,
            <Avatar.Badge key="example-icon-with-bg-stroke" background="stroke">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Avatar.Badge>,
          ],
        },
        {
          size: [72],
          children: [
            <Avatar.Badge key="example-icon-with-bg-stroke" background="stroke">
              <IconExampleForBadgeBasedOnImageBaseSize />
            </Avatar.Badge>,

            <React.Fragment key="overlay-base">
              <Avatar.Badge key="example-icon-with-bg-stroke" background="stroke">
                <IconExampleForBadgeBasedOnImageBaseSize />
              </Avatar.Badge>
              <Avatar.Overlay theme="light" visibility="always">
                <IconExampleForOverlayBasedOnImageBaseSize />
              </Avatar.Overlay>
            </React.Fragment>,

            <React.Fragment key="overlay-dark-always">
              <Avatar.Badge key="example-icon-with-bg-stroke" background="stroke">
                <IconExampleForBadgeBasedOnImageBaseSize />
              </Avatar.Badge>
              <Avatar.Overlay theme="dark" visibility="always">
                <Icon20GiftCircleFillRed width={32} height={32} />
              </Avatar.Overlay>
            </React.Fragment>,
          ],
        },
      ]}
    >
      {(props: AvatarProps) => <Avatar {...props} />}
    </ComponentPlayground>
  );
};
