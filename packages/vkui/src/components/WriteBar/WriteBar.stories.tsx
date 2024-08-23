import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Icon28SmileOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { WriteBarIcon } from '../WriteBarIcon/WriteBarIcon';
import { WriteBar, type WriteBarProps } from './WriteBar';

const story: Meta<WriteBarProps> = {
  title: 'Blocks/WriteBar',
  component: WriteBar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onHeightChange: fn() },
};

export default story;

type Story = StoryObj<WriteBarProps>;

export const Playground: Story = {
  args: {
    before: <WriteBarIcon count={10} mode="attach" onClick={noop} />,
    placeholder: 'Сообщение',
    inlineAfter: (
      <WriteBarIcon label="Смайлы и стикеры" onClick={noop}>
        <Icon28SmileOutline />
      </WriteBarIcon>
    ),
    after: <WriteBarIcon mode="send" onClick={noop} />,
  },
};
