import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { Switch } from '../Switch/Switch';
import { Cell, type CellProps } from './Cell';

const story: Meta<CellProps> = {
  title: 'Blocks/Cell',
  component: Cell,
  parameters: createStoryParameters('Cell', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['28'],
      additionalPresets: {
        AvatarWithUrl: <Avatar src={getAvatarUrl('user_xyz')} />,
        Avatar: <Avatar />,
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
    }),
    badgeAfterTitle: createFieldWithPresets({
      iconSizes: ['12'],
    }),
    badgeBeforeSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
    }),
    badgeAfterSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
    }),
  },
  decorators: [withSinglePanel, withVKUILayout],
  args: {
    onClick: noop,
  },
};

export default story;

type Story = StoryObj<CellProps>;

export const Playground: Story = {
  args: {
    children: 'Игорь Федоров',
    before: 'AvatarWithUrl',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
  ],
};

export const Multiple: Story = {
  ...Playground,
  args: {
    before: 'Avatar',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component args={{ ...context.args, children: 'Игорь Федоров' }} />
        <Component args={{ ...context.args, children: 'Вадим Дорохов' }} />
        <Component args={{ ...context.args, children: 'Евгения Полозова' }} />
        <Component args={{ ...context.args, children: 'Владимир Клепов' }} />
      </Group>
    ),
  ],
};
