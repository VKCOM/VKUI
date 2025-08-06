import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { InfoRow, type InfoRowProps } from './InfoRow';

const story: Meta<InfoRowProps> = {
  title: 'Data Display/InfoRow',
  component: InfoRow,
  parameters: createStoryParameters('InfoRow', CanvasFullLayout, DisableCartesianParam),
  tags: ['Отображение данных'],
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
      <Group header={<Header size="s">Информация о пользователе</Header>}>
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
