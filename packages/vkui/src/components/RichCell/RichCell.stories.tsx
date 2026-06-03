import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Group } from '../Group/Group';
import { UsersStack } from '../UsersStack/UsersStack';
import { RichCell, type RichCellProps } from './RichCell';

type RichCellStoryProps = RichCellProps & { maxAfterWidth: number; maxMetaWidth: number };

const story: Meta<RichCellStoryProps> = {
  title: 'Data Display/RichCell',
  component: RichCell,
  parameters: createStoryParameters('RichCell', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    overTitle: StringArg,
    subtitle: StringArg,
    extraSubtitle: StringArg,
    children: StringArg,
    maxAfterWidth: {
      control: 'number',
    },
    after: createFieldWithPresets({
      iconSizes: ['28'],
      additionalPresets: {
        Text: 'After',
        LongText: 'Very long after'.repeat(5),
        Button: <Button>Подписаться</Button>,
      },
    }),
    afterCaption: StringArg,
    meta: StringArg,
    submeta: StringArg,
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
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryFn<RichCellStoryProps>;

export const Playground: Story = ({
  maxAfterWidth,
  maxMetaWidth,
  afterCaption: afterCaptionProp,
  after: afterProp,
  meta: metaProp,
  submeta: submetaProp,
  ...args
}: RichCellStoryProps) => {
  const withMaxWidth = (maxWidth: number, prop: React.ReactNode) => {
    return maxWidth !== undefined && prop ? (
      <div
        style={{
          maxWidth,
        }}
      >
        {prop}
      </div>
    ) : (
      prop
    );
  };
  const after = withMaxWidth(maxAfterWidth, afterProp);
  const afterCaption = withMaxWidth(maxAfterWidth, afterCaptionProp);
  const meta = withMaxWidth(maxMetaWidth, metaProp);
  const submeta = withMaxWidth(maxMetaWidth, submetaProp);
  return (
    <Group>
      <RichCell after={after} afterCaption={afterCaption} meta={meta} submeta={submeta} {...args} />
    </Group>
  );
};

Playground.args = {
  before: 'Avatar72',
  overTitle: 'Over Title',
  subtitle: 'Subtitle',
  extraSubtitle: 'Extra Subtitle',
  meta: 'Meta',
  submeta: 'Submeta',
  maxAfterWidth: 100,
  maxMetaWidth: 100,
  children: 'Example',
};

Playground.decorators = [withSinglePanel, withVKUILayout];
