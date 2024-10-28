import type { Meta, StoryObj } from '@storybook/react';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton';
import { Switch } from '../Switch/Switch';
import { SimpleCell, type SimpleCellProps } from './SimpleCell';

const story: Meta<SimpleCellProps> = {
  title: 'Blocks/SimpleCell',
  component: SimpleCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    overTitle: StringArg,
    extraSubtitle: StringArg,
    before: createFieldWithPresets({
      iconSizes: ['28'],
      sizeIconsCount: 10,
      additionalPresets: {
        Avatar48: (
          <Avatar
            size={48}
            src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"
          />
        ),
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['24', '28'],
      sizeIconsCount: 10,
      additionalPresets: {
        Switch: <Switch />,
        MessageButton: (
          <IconButton label="Написать сообщение" onClick={noop}>
            <Icon28MessageOutline />
          </IconButton>
        ),
      },
    }),
    badgeAfterTitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 10,
      requiredIcons: ['Icon12Verified'],
      additionalPresets: {
        Badge: <Badge>Badge</Badge>,
      },
    }),
    badgeBeforeTitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 10,
      additionalPresets: {
        Badge: <Badge>Badge</Badge>,
      },
    }),
    badgeBeforeSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 10,
      additionalPresets: {
        Badge: <Badge>Badge</Badge>,
      },
    }),
    badgeAfterSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      sizeIconsCount: 10,
      additionalPresets: {
        Badge: <Badge>Badge</Badge>,
      },
    }),
  },
};

export default story;

type Story = StoryObj<SimpleCellProps>;

export const Playground: Story = {
  args: {
    children: 'Игорь Фёдоров',
    before: 'Avatar48',
    badgeAfterTitle: 'Icon12Verified',
    after: 'MessageButton',
    subtitle: 'Команда ВКонтакте',
    onClick: noop,
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
