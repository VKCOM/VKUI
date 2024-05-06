import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Image } from '../Image/Image';
import { Snackbar, SnackbarProps } from './Snackbar';

const story: Meta<SnackbarProps> = {
  title: 'Popouts/Snackbar',
  component: Snackbar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
    offsetY: StringArg,
  },
};

export default story;

type Story = StoryObj<Omit<SnackbarProps, 'after'> & { after?: boolean }>;

export const Playground: Story = {
  render: function Render({ after, onClose, ...args }) {
    const [open, setOpen] = React.useState(true);
    const After = after ? <Avatar size={32} src={getAvatarUrl()} /> : undefined;

    const handleClose = () => {
      setOpen(false);
      onClose?.();
    };

    return (
      <>
        <button onClick={() => setOpen(true)}>Открыть</button>
        {open ? <Snackbar after={After} onClose={handleClose} {...args} /> : null}
      </>
    );
  },
  args: {
    before: 'Icon24',
    action: 'Поделиться',
    children: 'Этот сервис рекомендует один друг',
  },
  argTypes: {
    action: { control: 'text' },
  },
};

export const WithSubtitle: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    subtitle: 'Вы можете порекомендовать сервис в дополнительном меню',
  },
};

export const WithBottomOffset: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    offsetY: '48px',
  },
};
