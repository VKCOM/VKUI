import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { Banner, type BannerProps } from './Banner';

const story: Meta<BannerProps> = {
  title: 'Data Display/Banner',
  component: Banner,
  parameters: createStoryParameters('Banner', CanvasFullLayout),
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
        chevron: 'chevron',
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
    background: createFieldWithPresets({
      additionalPresets: {
        image1: (
          <div
            style={{
              backgroundColor: '#65c063',
              backgroundImage:
                'url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 320,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ),
        image2: (
          <div
            style={{
              backgroundColor: '#5b9be6',
              backgroundImage:
                'url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: '102%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ),
        image3: (
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage:
                'url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ),
      },
    }),
  },
  tags: ['Отображение данных'],
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
