import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Chip, ChipProps } from './Chip';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getIconArgBySize, getIconComponent, IconName } from '../../storybook/Icons';
import { Avatar } from '../Avatar/Avatar';
import { getAvatarUrl } from '../../testing/mock';
import { getFigmaPage } from '../../storybook/helpers';

const IconArg = getIconArgBySize(/^Icon16/);

export default {
  title: 'Forms/Chip',
  component: Chip,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
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
} as Meta<ChipProps>;

const Template: Story<Omit<ChipProps, 'after'> & { after?: IconName }> = ({ after, ...args }) => {
  const Icon = getIconComponent(after);

  return <Chip after={Icon} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  value: 'chip',
  children: 'Chip Value',
};
