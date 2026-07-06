import type { Meta, StoryFn } from '@storybook/react';
import { Icon28Notifications, Icon28SlidersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Box } from '../Box/Box';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Separator, type SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: createStoryParameters('Separator', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<SeparatorProps>;

export const Playground: Story = (props: SeparatorProps) => (
  <div
    style={
      props.direction === 'vertical'
        ? {
            display: 'flex',
            alignItems: 'center',
            height: 50,
          }
        : undefined
    }
  >
    Before Separator
    <Separator {...props} />
    After Separator
  </div>
);

Playground.args = {
  size: 'xl',
};

export const DefaultDirectionExample: Story = (props: SeparatorProps) => (
  <Group>
    <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
    <Separator {...props} />
    <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
  </Group>
);

DefaultDirectionExample.args = {
  size: 'xl',
};

export const BlockDirectionExample: Story = (props: SeparatorProps) => (
  <Box
    padding="system"
    style={{
      display: 'flex',
    }}
  >
    <Link>Новости</Link>
    <Separator {...props} />
    <Link>Звонки</Link>
    <Separator {...props} />
    <Link>Друзья</Link>
  </Box>
);

BlockDirectionExample.args = {
  direction: 'vertical',
  size: '2xl',
};
