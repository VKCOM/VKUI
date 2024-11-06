import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { Switch } from '../Switch/Switch';
import { CellButton, type CellButtonProps } from './CellButton';

const story: Meta<CellButtonProps> = {
  title: 'Blocks/CellButton',
  component: CellButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['28'],
      requiredIcons: ['Icon28AddOutline'],
      additionalPresets: {
        Avatar28: <Avatar size={28} src={getAvatarUrl('user_xyz')} />,
        Avatar40: <Avatar size={40} src={getAvatarUrl('user_xyz')} />,
        Avatar72: <Avatar size={72} src={getAvatarUrl('user_xyz')} />,
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['24', '28'],
      additionalPresets: {
        Switch: <Switch />,
      },
    }),
    badgeBeforeTitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 100,
    }),
    badgeAfterTitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 100,
    }),
    badgeBeforeSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 100,
    }),
    badgeAfterSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 100,
    }),
    subtitle: StringArg,
    extraSubtitle: StringArg,
    overTitle: StringArg,
  },
};

export default story;

type Story = StoryObj<CellButtonProps>;

export const Playground: Story = {
  args: {
    children: 'Создать беседу',
    before: 'Icon28AddOutline',
    onClick: noop,
  },
};
