import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon16Delete } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { IconButton } from '../IconButton/IconButton';
import { File, type FileProps } from './File';

const iconsPresets = createFieldWithPresets({
  iconSizes: ['12', '16', '20', '24', '28'],
  additionalPresets: {
    DeleteIconButton: (
      <IconButton onClick={noop}>
        <Icon16Delete />
      </IconButton>
    ),
  },
});

const story: Meta<FileProps> = {
  title: 'Forms/File',
  component: File,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<FileProps>;

export const Playground: Story = {};
