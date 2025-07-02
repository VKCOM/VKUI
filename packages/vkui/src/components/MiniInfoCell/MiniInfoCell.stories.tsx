import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { UsersStack } from '../UsersStack/UsersStack';
import { MiniInfoCell, type MiniInfoCellProps } from './MiniInfoCell';

const story: Meta<MiniInfoCellProps> = {
  title: 'Data Display/MiniInfoCell',
  component: MiniInfoCell,
  parameters: createStoryParameters('MiniInfoCell', CanvasFullLayout),
  decorators: [withCartesian],
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['20'],
      requiredIcons: ['Icon20ArticleOutline'],
      sizeIconsCount: 10,
    }),
    after: createFieldWithPresets({
      iconSizes: [],
      additionalPresets: {
        UsersStack: (
          <UsersStack
            size="s"
            photos={[getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()]}
          />
        ),
        Avatar: <Avatar size={24} src={getAvatarUrl()} />,
      },
    }),
  },
};

export default story;

type Story = StoryObj<MiniInfoCellProps>;

export const Playground: Story = {
  args: {
    before: 'Icon20ArticleOutline',
    children:
      'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.',
  },
};
