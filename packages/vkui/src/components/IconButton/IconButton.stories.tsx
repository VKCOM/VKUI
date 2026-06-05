import type { Meta, StoryFn } from '@storybook/react';
import { Icon16Delete } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { IconButton, type IconButtonProps } from './IconButton';

const story: Meta<IconButtonProps> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: createStoryParameters('IconButton', CanvasFullLayout, DisableCartesianParam),
  tags: ['Кнопки'],
};

export default story;

type Story = StoryFn<IconButtonProps>;
export const Playground: Story = (props: IconButtonProps) => <IconButton {...props} />;

Playground.args = {
  label: 'Удалить',
  children: <Icon16Delete />,
  onClick: noop,
};
