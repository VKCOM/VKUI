import * as React from 'react';
import { Meta } from '@storybook/react';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import {
  CanvasFullLayout,
  DisableCartesianParam,
  StringArg,
} from '../../../../storybook/constants';
import { getAvatarUrl } from '../../../../testing/mock';
import { Avatar } from '../../../Avatar/Avatar';
import { Image } from '../../../Image/Image';
import { Snackbar, SnackbarProps } from '../../Snackbar';

const story: Meta<SnackbarProps> = {
  title: 'Popouts/Snackbar/Basic',
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
