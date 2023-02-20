import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon28SmileOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { WriteBarIcon } from '../WriteBarIcon/WriteBarIcon';
import { WriteBar, WriteBarProps } from './WriteBar';

const story: Meta<WriteBarProps> = {
  title: 'Blocks/WriteBar',
  component: WriteBar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
