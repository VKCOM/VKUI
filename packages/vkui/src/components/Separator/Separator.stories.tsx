import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Notifications, Icon28SlidersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Separator, type SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: createStoryParameters('Separator', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<SeparatorProps>;

export const Playground: Story = {
  args: {
    size: 'xl',
  },
  decorators: [
    (Component, props) => (
      <div
        style={
          props.args.direction === 'vertical'
            ? { display: 'flex', alignItems: 'center', height: 50 }
            : undefined
        }
      >
        Before Separator
        <Component {...props} />
        After Separator
      </div>
    ),
  ],
};

export const DefaultDirectionExample: Story = {
  ...Playground,
  decorators: [
    (Component) => (
      <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>
    ),
  ],
};

export const BlockDirectionExample: Story = {
  ...Playground,
  args: {
    direction: 'vertical',
    size: '2xl',
  },
  decorators: [
    (Component, props) => (
      <Div style={{ display: 'flex' }}>
        <Link>Новости</Link>
        <Component {...props} />
        <Link>Звонки</Link>
        <Component {...props} />
        <Link>Друзья</Link>
      </Div>
    ),
  ],
};
