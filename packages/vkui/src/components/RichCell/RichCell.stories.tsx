import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Group } from '../Group/Group';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichCell, type RichCellProps } from './RichCell';

const story: Meta<RichCellProps> = {
  title: 'Blocks/RichCell',
  component: RichCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: createFieldWithPresets({
      additionalPresets: {
        Avatar40: <Avatar size={40} src={getAvatarUrl()} />,
        Avatar48: <Avatar size={48} src={getAvatarUrl()} />,
        Avatar72: <Avatar size={72} src={getAvatarUrl()} />,
      },
    }),
    bottom: createFieldWithPresets({
      additionalPresets: {
        UsersStack: (
          <UsersStack
            size="m"
            photos={[getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()]}
          />
        ),
      },
    }),
    actions: createFieldWithPresets({
      additionalPresets: {
        PrimaryButton: (
          <Button mode="primary" size="s">
            Принять
          </Button>
        ),
        SecondaryButton: (
          <Button mode="secondary" size="s">
            Отменить
          </Button>
        ),
        ButtonsGroup: (
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button mode="primary" size="s">
              Принять
            </Button>
            <Button mode="secondary" size="s">
              Отменить
            </Button>
          </ButtonGroup>
        ),
      },
    }),
  },
};

export default story;

type Story = StoryObj<RichCellProps>;

export const Playground: Story = {
  args: {
    before: 'Avatar72',
    subhead: 'Subhead',
    text: 'Text',
    caption: 'Caption',
    after: 'After',
    afterCaption: 'After Caption',
    children: 'Example',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
