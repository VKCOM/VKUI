import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<WriteBarProps>;

export const Playground: Story = {
  args: {
    before: <WriteBarIcon count={10} mode="attach" />,
    placeholder: 'Сообщение',
    inlineAfter: (
      <WriteBarIcon label="Смайлы и стикеры">
        <Icon28SmileOutline />
      </WriteBarIcon>
    ),
    after: <WriteBarIcon mode="send" />,
  },
};
