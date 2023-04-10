import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { File, FileProps } from './File';

const story: Meta<FileProps> = {
  title: 'Forms/File',
  component: File,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<FileProps>;

export const Playground: Story = {};
