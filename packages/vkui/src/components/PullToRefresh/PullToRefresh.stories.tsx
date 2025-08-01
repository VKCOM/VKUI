import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomInt, getRandomUser, getRandomUsers } from '../../testing/mock';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { PullToRefresh, type PullToRefreshProps } from './PullToRefresh';

const story: Meta<PullToRefreshProps> = {
  title: 'Feedback/PullToRefresh',
  component: PullToRefresh,
  parameters: createStoryParameters('PullToRefresh', CanvasFullLayout, DisableCartesianParam),
  decorators: [withSinglePanel, withVKUILayout],
  tags: ['Обратная связь'],
};

export default story;

type Story = StoryObj<PullToRefreshProps>;

const initUsers = getRandomUsers(20);

export const Example: Story = {
  render: function Render() {
    const [users, setUsers] = React.useState(initUsers);
    const [fetching, setFetching] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setFetching(true);

      setTimeout(
        () => {
          setFetching(false);
          setUsers((prevUsers) => [getRandomUser(), ...prevUsers]);
        },
        getRandomInt(600, 2000),
      );
    }, []);

    return (
      <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
        <Group>
          <List>
            {users.map(({ name, photo_100 }, i) => {
              return (
                <Cell key={i} before={<Avatar src={photo_100} />}>
                  {name}
                </Cell>
              );
            })}
          </List>
        </Group>
      </PullToRefresh>
    );
  },
};
