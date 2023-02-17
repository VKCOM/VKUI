import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon56UsersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Placeholder, PlaceholderProps } from './Placeholder';

const story: Meta<PlaceholderProps> = {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Placeholder'), ...DisableCartesianParam },
};

export default story;

const Template: Story<PlaceholderProps> = (args) => <Placeholder {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Подключите сообщества, от которых Вы хотите получать уведомления',
  header: 'Уведомления от сообществ',
  icon: <Icon56UsersOutline />,
};
