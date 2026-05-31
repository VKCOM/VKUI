import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Image } from '../Image/Image';
import { Snackbar, type SnackbarProps } from './Snackbar';

const story: Meta<SnackbarProps> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  parameters: createStoryParameters('Snackbar', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['24', '28'],
      additionalPresets: {
        Icon24ThumbsUpOutline: <Icon24ThumbsUpOutline fill="var(--vkui--color_icon_accent)" />,
        Icon28ErrorCircleOutline: (
          <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />
        ),
        Avatar: <Avatar size={32} src={getAvatarUrl()} />,
        Image: <Image size={40} src={getAvatarUrl('app_shorm_online')} />,
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['24'],
      sizeIconsCount: 10,
      additionalPresets: {
        Avatar: <Avatar size={32} src={getAvatarUrl()} />,
      },
    }),
    subtitle: StringArg,
    offsetY: StringArg,
  },
  tags: ['Обратная связь'],
};

export default story;

export const Playground: StoryObj<SnackbarProps> = (args: SnackbarProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClosed = () => {
    setOpen(false);
    args.onClosed?.();
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>Открыть</button>
      {open ? <Snackbar {...args} onClosed={handleClosed} /> : null}
    </>
  );
};

Playground.args = {
  before: 'Icon24ThumbsUpOutline',
  action: 'Поделиться',
  children: 'Этот сервис рекомендует один друг',
};

Playground.argTypes = {
  action: {
    control: 'text',
  },
};
