import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { InfoRow, InfoRowProps } from './InfoRow';

const story: Meta<InfoRowProps> = {
  title: 'Blocks/InfoRow',
  component: InfoRow,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<InfoRowProps>;

export const Playground: Story = {
  args: {
    children: '3000 р.',
    header: 'Общий бюджет',
  },
};

export const Example: Story = {
  ...Playground,
  decorators: [
    (Component) => (
      <Group>
        <Header mode="secondary">Информация о пользователе</Header>
        <SimpleCell multiline>
          <Component args={{ header: 'Дата рождения', children: '30 января 1993' }} />
        </SimpleCell>
        <SimpleCell>
          <Component args={{ header: 'Родной город', children: 'Ереван' }} />
        </SimpleCell>
        <SimpleCell>
          <Component args={{ header: 'Место работы', children: 'Команда ВКонтакте' }} />
        </SimpleCell>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
