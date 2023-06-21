import * as React from 'react';
import {
  Icon12Fire,
  Icon12Tag,
  Icon12Verified,
  Icon16MessageHeart,
  Icon16MoreHorizontal,
  Icon16MoreVertical,
  Icon20AddCircleFillBlue,
  Icon24MessageOutline,
  Icon28MessageOutline,
} from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { Switch } from '../Switch/Switch';
import { SimpleCell, type SimpleCellProps } from './SimpleCell';

export const SimpleCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [<Avatar key="avatar" size={40} />],
          children: ['Artur Stambultsian'],
          after: [
            <IconButton key="icon-w28">
              <Icon28MessageOutline />
            </IconButton>,
            <IconButton key="icon-w24">
              <Icon24MessageOutline />
            </IconButton>,
            <IconButton key="icon-w16">
              <Icon16MessageHeart />
            </IconButton>,
            <IconButton key="icon-w08">
              <Icon16MoreVertical />
            </IconButton>,
            <IconButton key="icon-w08">
              <Icon16MoreHorizontal />
            </IconButton>,
          ],
        },
        {
          $adaptivity: 'y',
          before: [<Avatar key="avatar" size={40} />],
          children: [
            'Very long children Very long children Very long children Very long children Very long children Very long children Very long children Very long children',
          ],
          subtitle: [
            'Very long description Very long description Very long description Very long description Very long ' +
              'description Very long description Very long description Very long description Very long description Very long description Very long description Very long description',
          ],
          after: [
            <IconButton key="icon-w28">
              <Icon28MessageOutline />
            </IconButton>,
          ],
        },
        {
          before: [<Switch key="switch" />],
          children: ['Title'],
        },
        {
          after: [<Switch key="switch" />],
          children: ['Title'],
        },
        {
          before: [<Avatar key="avatar" size={40} />],
          subhead: ['Subhead'],
          children: ['Title'],
          subtitle: ['Subtitle'],
          extraSubtitle: ['Extra Subtitle'],
          badgeAfterSubtitle: [
            <Icon12Fire key="iconFire" fill="var(--vkui--color_icon_negative)" />,
          ],
          badgeBeforeSubtitle: [
            <Icon12Tag key="iconTag" fill="var(--vkui--color_icon_tertiary)" />,
          ],
          badgeBeforeTitle: [<Icon20AddCircleFillBlue key="leftBadge" />],
          badgeAfterTitle: [<Icon12Verified key="rightBadge" />],
          multiline: [true, false],
        },
        {
          children: ['Title'],
          expandable: [true, 'auto', 'always'],
        },
        {
          children: ['Title'],
          expandable: ['always'],
          chevronSize: ['medium', 'small'],
        },
      ]}
    >
      {(props: SimpleCellProps) => <SimpleCell {...props} />}
    </ComponentPlayground>
  );
};
