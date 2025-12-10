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
import { withLabel } from '@vkui-e2e/utils';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { Switch } from '../Switch/Switch';
import { SimpleCell, type SimpleCellProps } from './SimpleCell';

const veryLongChildren = 'Very long children '.repeat(8);
const veryLongSubtitle = 'Very long subtitle'.repeat(14);

export const SimpleCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      componentStateHeight={{
        android: 105,
        ios: 105,
        vkcom: 80,
      }}
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
          children: [withLabel(veryLongChildren, 'Long children')],
          subtitle: [withLabel(veryLongSubtitle, 'Long subtitle')],
          after: [
            <IconButton key="icon-w28">
              <Icon28MessageOutline />
            </IconButton>,
          ],
          $componentStateHeight: {
            android: 130,
            ios: 130,
            vkcom: 80,
          },
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
          overTitle: ['Subhead'],
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
          $componentStateHeight: {
            android: 245,
            ios: 245,
            vkcom: 145,
          },
        },
        {
          children: ['Title'],
          chevron: ['auto', 'always'],
        },
        {
          children: ['Title'],
          chevron: ['always'],
          chevronSize: ['m', 's'],
        },

        // Индикатор не должен сжиматься
        {
          children: [
            withLabel(
              'Very long children Very long children Very long children Very long children Very long children Very long children Very long children Very long children',
              'Long children',
            ),
          ],
          indicator: ['1:20:22'],
        },
        {
          before: [<Icon28MessageOutline key="icon" />],
          children: ['Title'],
        },
        {
          before: [<Switch key="switch" />],
          children: ['Title'],
          after: [
            <IconButton key="icon-w28">
              <Icon28MessageOutline />
            </IconButton>,
          ],
          disabled: [true],
        },
        {
          children: [withLabel(veryLongChildren, 'Long children')],
          subtitle: [withLabel(veryLongSubtitle, 'Long subtitle')],
          badgeAfterTitle: [<Icon12Verified key="rightBadge" />],
          badgeAfterSubtitle: [
            <Icon12Fire key="iconFire" fill="var(--vkui--color_icon_negative)" />,
          ],
          multiline: [true],
          $componentStateHeight: {
            android: 300,
            ios: 300,
            vkcom: 100,
          },
        },
      ]}
    >
      {(props: SimpleCellProps) => <SimpleCell {...props} />}
    </ComponentPlayground>
  );
};
