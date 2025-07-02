import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { Icon12Services, Icon16Services, Icon20ServicesFilled } from '@vkontakte/icons';
import type { PartialStoryFn } from 'storybook/internal/types';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Flex } from '../Flex/Flex';
import { Group } from '../Group/Group';
import { ContentBadge, type ContentBadgeProps } from './ContentBadge';

const meta: Meta<ContentBadgeProps> = {
  title: 'Data Display/ContentBadge',
  component: ContentBadge,
  parameters: createStoryParameters('ContentBadge', CanvasFullLayout, DisableCartesianParam),
};

export default meta;

const Container = (Story: PartialStoryFn<ReactRenderer>) => (
  <Group
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      outline: '1px dashed',
      padding: 24,
    }}
  >
    <Story />
  </Group>
);

type DefaultStory = StoryObj<ContentBadgeProps>;

export const Playground: DefaultStory = {
  decorators: [Container],
  render({ children = 'Text', size, ...restProps }) {
    return (
      <Flex align="center" gap={24}>
        <ContentBadge {...restProps} size={size}>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {children}
          <ContentBadge.IconSlot>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>
      </Flex>
    );
  },
};

type SingleIconStory = StoryObj<ContentBadgeProps>;

export const SingleIcon: SingleIconStory = {
  args: {
    capsule: true,
  },
  decorators: [Container],
  render({ size, ...restProps }) {
    if (size === 's') {
      return <div>size=&quot;s&quot; не поддерживает иконки</div>;
    }

    return (
      <ContentBadge {...restProps} size={size}>
        <ContentBadge.IconSlot>
          {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.IconSlot>
      </ContentBadge>
    );
  },
};
