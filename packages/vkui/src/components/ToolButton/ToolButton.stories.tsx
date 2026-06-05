import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { Icon20Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ToolButton, type ToolButtonProps } from './ToolButton';

const story: Meta<ToolButtonProps> = {
  title: 'Buttons/ToolButton',
  component: ToolButton,
  parameters: createStoryParameters('ToolButton', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Кнопки'],
};

export default story;

export const Playground: StoryFn<ToolButtonProps> = (props: ToolButtonProps) => (
  <div>
    <ToolButton {...props} IconCompact={Icon20Add} IconRegular={Icon24Add} />
  </div>
);

Playground.args = {
  children: 'ToolButton',
};
