import React from 'react';
import { Meta, Story } from '@storybook/react';
import { getIconArgBySize, getIconComponent, IconName } from '../../storybook/Icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Chip, ChipProps } from './Chip';

const IconArg = getIconArgBySize(/^Icon16/);

const story: Meta<ChipProps> = {
  title: 'Forms/Chip',
  component: Chip,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: {
      options: ['Avatar', 'None'],
      mapping: {
        None: null,
        Avatar: <Avatar size={20} src={getAvatarUrl('user_xyz')} />,
      },
    },
    after: IconArg,
  },
};

export default story;

const Template: Story<Omit<ChipProps, 'after'> & { after?: IconName }> = ({ after, ...args }) => {
  const Icon = getIconComponent(after);

  return <Chip after={Icon} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  value: 'chip',
  children: 'Chip Value',
};
