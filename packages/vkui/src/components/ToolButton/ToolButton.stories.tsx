import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon20Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ToolButton, type ToolButtonProps } from './ToolButton';

const story: Meta<ToolButtonProps> = {
  title: 'Blocks/ToolButton',
  component: ToolButton,
  parameters: createStoryParameters('ToolButton', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<ToolButtonProps>;

export const Playground: Story = {
  args: {
    children: 'ToolButton',
    IconCompact: Icon20Add,
    IconRegular: Icon24Add,
  },
  decorators: [
    (Component, context) => (
      <div>
        <Component {...context.args} />
      </div>
    ),
  ],
};
