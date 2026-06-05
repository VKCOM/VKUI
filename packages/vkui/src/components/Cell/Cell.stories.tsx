import type { Meta, StoryFn } from '@storybook/react';
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
  title: 'Buttons/Cell',
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
  tags: ['Кнопки'],
};

export default story;

type Story = StoryFn<CellProps>;

export const Playground: Story = (props: CellProps) => (
  <Group>
    <Cell {...props} />
  </Group>
);

Playground.args = {
  children: 'Игорь Федоров',
  before: 'AvatarWithUrl',
};

export const Multiple: Story = (props: CellProps) => (
  <Group>
    <Cell {...props}>Игорь Федоров</Cell>
    <Cell {...props}>Вадим Дорохов</Cell>
    <Cell {...props}>Евгения Полозова</Cell>
    <Cell {...props}>Владимир Клепов</Cell>
  </Group>
);

Multiple.args = {
  before: 'Avatar',
};
