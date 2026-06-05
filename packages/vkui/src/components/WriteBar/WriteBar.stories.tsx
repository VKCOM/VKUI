import type { Meta, StoryFn } from '@storybook/react';
import { Icon28SmileOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { fn } from 'storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { WriteBarIcon } from '../WriteBarIcon/WriteBarIcon';
import { WriteBar, type WriteBarProps } from './WriteBar';

const story: Meta<WriteBarProps> = {
  title: 'Forms/WriteBar',
  component: WriteBar,
  parameters: createStoryParameters('WriteBar', CanvasFullLayout, DisableCartesianParam),
  args: { onHeightChange: fn() },
  tags: ['Формы и поля ввода'],
};

export default story;

type Story = StoryFn<WriteBarProps>;

export const Playground: Story = (props: WriteBarProps) => <WriteBar {...props} />;

Playground.args = {
  before: <WriteBarIcon count={10} mode="attach" onClick={noop} />,
  placeholder: 'Сообщение',
  inlineAfter: (
    <WriteBarIcon label="Смайлы и стикеры" onClick={noop}>
      <Icon28SmileOutline />
    </WriteBarIcon>
  ),
  after: <WriteBarIcon mode="send" onClick={noop} />,
};
