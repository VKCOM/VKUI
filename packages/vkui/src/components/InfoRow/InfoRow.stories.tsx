import type { Meta, StoryFn } from '@storybook/react';
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

type Story = StoryFn<InfoRowProps>;

export const Playground: Story = (props: InfoRowProps) => <InfoRow {...props} />;

Playground.args = {
  children: '3000 р.',
  header: 'Общий бюджет',
};

export const Example: Story = (props: InfoRowProps) => (
  <Group header={<Header size="s">Информация о пользователе</Header>}>
    <SimpleCell multiline>
      <InfoRow {...props} header="Дата рождения">
        30 января 1993
      </InfoRow>
    </SimpleCell>
    <SimpleCell>
      <InfoRow {...props} header="Родной город">
        Ереван
      </InfoRow>
    </SimpleCell>
    <SimpleCell>
      <InfoRow {...props} header="Место работы">
        Команда ВКонтакте
      </InfoRow>
    </SimpleCell>
  </Group>
);

Example.decorators = [withSinglePanel, withVKUILayout];
