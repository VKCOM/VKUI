import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WriteBar, WriteBarProps } from './WriteBar';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { WriteBarIcon } from '../WriteBarIcon/WriteBarIcon';
import { Icon28SmileOutline } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/WriteBar',
  component: WriteBar,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('UsersStack'), ...DisableCartesianParam },
} as Meta<WriteBarProps>;

const Template: Story<WriteBarProps> = (args) => <WriteBar {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  before: <WriteBarIcon count={10} mode="attach" />,
  placeholder: 'Сообщение',
  inlineAfter: (
    <WriteBarIcon aria-label="Смайлы и стикеры">
      <Icon28SmileOutline />
    </WriteBarIcon>
  ),
  after: <WriteBarIcon mode="send" />,
};
