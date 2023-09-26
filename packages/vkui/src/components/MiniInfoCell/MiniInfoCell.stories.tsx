import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { Icon20ArticleOutline } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { MiniInfoCell, MiniInfoCellProps } from './MiniInfoCell';

const story: Meta<MiniInfoCellProps> = {
  title: 'Blocks/MiniInfoCell',
  component: MiniInfoCell,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<MiniInfoCellProps>;

export const Playground: Story = {
  args: {
    before: <Icon20ArticleOutline />,
    children:
      'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.',
  },
};
