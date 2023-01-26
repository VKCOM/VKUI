import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Placeholder, PlaceholderProps } from './Placeholder';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon56UsersOutline } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Placeholder'), ...DisableCartesianParam },
} as Meta<PlaceholderProps>;

const Template: Story<PlaceholderProps> = (args) => <Placeholder {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Подключите сообщества, от которых Вы хотите получать уведомления',
  header: 'Уведомления от сообществ',
  icon: <Icon56UsersOutline />,
};
