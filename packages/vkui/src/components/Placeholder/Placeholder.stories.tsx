import type { Meta, StoryObj } from '@storybook/react';
import { Icon56UsersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Placeholder, type PlaceholderProps } from './Placeholder';

const story: Meta<PlaceholderProps> = {
  title: 'Data Display/Placeholder',
  component: Placeholder,
  parameters: createStoryParameters('Placeholder', CanvasFullLayout, DisableCartesianParam),
  tags: ['Отображение данных'],
};

export default story;

export const Playground: StoryObj<PlaceholderProps> = (props: PlaceholderProps) => (
  <Placeholder {...props} />
);

Playground.args = {
  children: 'Подключите сообщества, от которых Вы хотите получать уведомления',
  title: 'Уведомления от сообществ',
  icon: <Icon56UsersOutline />,
};
