import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Dot, type DotProps } from './Dot';

const story: Meta<DotProps> = {
  title: 'Blocks/Dot',
  component: Dot,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<DotProps>;

export const Playground: Story = {};

export const NewMode: Story = {
  args: {
    mode: 'new',
    children: 'Есть обновления',
  },
};

export const ProminentMode: Story = {
  args: {
    mode: 'prominent',
    children: 'Новый раздел',
  },
};
