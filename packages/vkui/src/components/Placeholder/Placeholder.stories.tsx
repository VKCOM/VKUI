import type { Meta, StoryObj } from '@storybook/react';
import { Icon56UsersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Placeholder, type PlaceholderProps } from './Placeholder';

const story: Meta<PlaceholderProps> = {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<PlaceholderProps>;

export const Playground: Story = {
  args: {
    children: 'Подключите сообщества, от которых Вы хотите получать уведомления',
    title: 'Уведомления от сообществ',
    icon: <Icon56UsersOutline />,
  },
};
