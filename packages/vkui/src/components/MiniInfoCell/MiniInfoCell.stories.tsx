import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MiniInfoCell, MiniInfoCellProps } from './MiniInfoCell';
import { CanvasFullLayout } from '../../storybook/constants';
import { Icon20ArticleOutline } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Blocks/MiniInfoCell',
  component: MiniInfoCell,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('MiniInfoCell') },
  decorators: [withCartesian],
} as Meta<MiniInfoCellProps>;

const Template: Story<MiniInfoCellProps> = (args) => <MiniInfoCell {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  before: <Icon20ArticleOutline />,
  children:
    'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.',
};
