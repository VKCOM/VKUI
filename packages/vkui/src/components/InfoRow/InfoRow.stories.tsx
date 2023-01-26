import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InfoRow, InfoRowProps } from './InfoRow';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';

export default {
  title: 'Blocks/InfoRow',
  component: InfoRow,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<InfoRowProps>;

const Template: Story<InfoRowProps> = (args) => <InfoRow {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: '3000 р.',
  header: 'Общий бюджет',
};

export const Example = Template.bind({});
Example.args = {};
Example.decorators = [
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
];
