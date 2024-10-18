import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { Banner, type BannerProps } from './Banner';

const story: Meta<BannerProps> = {
  title: 'Blocks/Banner',
  component: Banner,
  parameters: CanvasFullLayout,
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['96'],
      additionalPresets: {
        Image: (
          <Image
            size={96}
            src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
          />
        ),
        Avatar96: <Avatar size={96} src={getAvatarUrl('user_xyz')} />,
        Avatar88: <Avatar size={88} src={getAvatarUrl('user_xyz')} />,
        Avatar72: <Avatar size={72} src={getAvatarUrl('user_xyz')} />,
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['24'],
      sizeIconsCount: 10,
      additionalPresets: {
        dismiss: 'dismiss',
        expand: 'expand',
      },
    }),
    actions: createFieldWithPresets({
      additionalPresets: {
        ButtonPrimary: <Button>Подробнее</Button>,
        ButtonSecondary: <Button mode="secondary">Отмена</Button>,
        ButtonsGroup: (
          <ButtonGroup gap="m" stretched>
            <Button>Подробнее</Button>
            <Button mode="secondary">Отмена</Button>
          </ButtonGroup>
        ),
      },
    }),
  },
};

export default story;

type Story = StoryObj<BannerProps>;

export const Playground: Story = {
  args: {
    before: 'Image',
    title: 'Баста в Ледовом',
    subtitle: 'Большой концерт',
    after: 'dismiss',
    actions: 'ButtonPrimary',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Div>
          <Component {...context.args} />
        </Div>
      </Group>
    ),
    withCartesian,
    withSinglePanel,
    withVKUILayout,
  ],
};
