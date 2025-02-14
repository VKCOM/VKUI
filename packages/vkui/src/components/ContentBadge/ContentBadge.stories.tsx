import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import { Icon12Services, Icon16Services, Icon20ServicesFilled } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Flex } from '../Flex/Flex';
import { Group } from '../Group/Group';
import { ContentBadge, type ContentBadgeProps } from './ContentBadge';

const meta: Meta<ContentBadgeProps> = {
  title: 'Blocks/ContentBadge',
  component: ContentBadge,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
          <ContentBadge.SlotIcon>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.SlotIcon>
          {children}
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          {children}
          <ContentBadge.SlotIcon>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.SlotIcon>
        </ContentBadge>

        <ContentBadge {...restProps} size={size}>
          <ContentBadge.SlotIcon>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.SlotIcon>
          {children}
          <ContentBadge.SlotIcon>
            {size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.SlotIcon>
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
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.SlotIcon>
      </ContentBadge>
    );
  },
};
