import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { Icon20Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { ToolButton, ToolButtonProps } from './ToolButton';

const story: Meta<ToolButtonProps> = {
  title: 'Blocks/ToolButton',
  component: ToolButton,
  parameters: CanvasFullLayout,
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
};
