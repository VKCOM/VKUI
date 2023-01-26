import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Snackbar, SnackbarProps } from './Snackbar';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Avatar } from '../Avatar/Avatar';
import { getAvatarUrl } from '../../testing/mock';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { Image } from '../Image/Image';

export default {
  title: 'Popouts/Snackbar',
  component: Snackbar,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('Snackbar'),
    ...DisableCartesianParam,
  },
  argTypes: {
    before: {
      options: ['None', 'Icon24', 'Icon28', 'Avatar', 'Image'],
      mapping: {
        None: null,
        Icon24: <Icon24ThumbsUpOutline fill="var(--vkui--color_icon_accent)" />,
        Icon28: <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />,
        Avatar: <Avatar size={32} src={getAvatarUrl()} />,
        Image: <Image size={40} src={getAvatarUrl('app_shorm_online')} />,
      },
    },
    after: {
      control: { type: 'boolean' },
    },
    subtitle: StringArg,
  },
} as Meta<SnackbarProps>;

const Template: Story<Omit<SnackbarProps, 'after'> & { after?: boolean }> = ({
  after,
  ...args
}) => {
  const After = after ? <Avatar size={32} src={getAvatarUrl()} /> : undefined;

  return <Snackbar after={After} {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  action: 'Поделиться',
  children: 'Этот сервис рекомендует один друг',
  before: 'Icon24',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  ...Playground.args,
  action: undefined,
  subtitle: 'Вы можете порекомендовать сервис в дополнительном меню',
};
