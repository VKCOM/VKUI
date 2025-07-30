import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { createFieldWithPresets } from '../../../testing/presets';
import { Avatar } from '../../Avatar/Avatar';
import type { ChipProps } from './Chip';
import { Chip } from './Chip';

const story: Meta<ChipProps> = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['20'],
      additionalPresets: {
        Avatar: <Avatar size={20} src={getAvatarUrl('user_xyz')} />,
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['16'],
    }),
  },
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryObj<ChipProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return <Chip {...args} />;
  },
  args: {
    value: 'chip',
    children: 'Chip Value',
  },
};
