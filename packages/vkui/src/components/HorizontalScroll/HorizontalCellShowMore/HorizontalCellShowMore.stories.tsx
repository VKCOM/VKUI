import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { Avatar } from '../../Avatar/Avatar';
import { Group } from '../../Group/Group';
import { HorizontalCell } from '../../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll';
import { HorizontalCellShowMore, type HorizontalCellShowMoreProps } from './HorizontalCellShowMore';

type HorizontalCellShowModeStoryProps = HorizontalCellShowMoreProps & { imgSize: number };

const story: Meta<HorizontalCellShowModeStoryProps> = {
  title: 'Data Display/HorizontalScroll/HorizontalCellShowMore',
  component: HorizontalCellShowMore,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    children: StringArg,
  },
};

export default story;

const CELL_ITEMS = [
  {
    id: 1,
    title: 'Промокот',
    icon: getAvatarUrl('app_promokot'),
  },
  {
    id: 2,
    title: 'Разделите счёт',
    icon: getAvatarUrl('app_split_bill'),
  },
  {
    id: 3,
    title: 'Рассылки',
    icon: getAvatarUrl('app_emails'),
  },
  {
    id: 4,
    title: 'Тексты песен',
    icon: getAvatarUrl('app_lyrics'),
  },
];

function getNotTooBigHeightBySize({
  size,
  height,
}: Pick<HorizontalCellShowMoreProps, 'size' | 'height'>): number {
  if (size === 's') {
    return 56;
  }

  if (size === 'm' && height && height > 88) {
    return 88;
  }

  return height ?? 96;
}

export const Playground: StoryFn<HorizontalCellShowModeStoryProps> = (
  args: HorizontalCellShowModeStoryProps,
) => {
  const cellImageSize = getNotTooBigHeightBySize(args);
  return (
    <Group>
      <HorizontalScroll>
        {CELL_ITEMS.map((element) => (
          <HorizontalCell key={element.id} size={args.size} title={element.title}>
            <Avatar size={cellImageSize} src={element.icon} alt={`avatar: ${element.title}`} />
          </HorizontalCell>
        ))}
        <HorizontalCellShowMore {...args} height={cellImageSize} />
      </HorizontalScroll>
    </Group>
  );
};

Playground.args = {
  size: 'm',
  height: 96,
};

Playground.decorators = [withSinglePanel, withVKUILayout];
