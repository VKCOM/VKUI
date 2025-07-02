import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon16Dropdown,
  Icon20NewsfeedOutline,
  Icon20PictureOutline,
  Icon20ThumbsUpOutline,
  Icon20UsersOutline,
} from '@vkontakte/icons';
import { useArgs } from 'storybook/preview-api';
import { withSinglePanel } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { useCustomArgs } from '../../testing/useCustomArgs';
import { Group } from '../Group/Group';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { TabsItem } from '../TabsItem/TabsItem';
import {
  WithBadge as BadgeTabsItemStory,
  Playground as BasicTabsItemStory,
  WithBeforeAfter as BeforeAfterTabsItemStory,
  WithCounter as CounterTabsItemStory,
  WithNumberStatus as NumberStatusTabsItemStory,
} from '../TabsItem/TabsItem.stories';
import { Tabs, type TabsProps } from './Tabs';

type StoryTabsProps = TabsProps & { selected: string };

const story: Meta<StoryTabsProps> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: createStoryParameters('Tabs', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    selectedId: {
      control: {
        type: 'select',
      },
      options: ['groups', 'news', 'recommendations', 'friends', 'photos'],
    },
  },
};

export default story;

type Story = StoryObj<StoryTabsProps & { count: number }>;

export const Playground: Story = {
  render: function Render({ count, ...args }) {
    const [, updateArg] = useCustomArgs();
    const items = [
      <TabsItem
        key="groups"
        id="groups"
        {...BasicTabsItemStory.args}
        before={<Icon20NewsfeedOutline />}
        after={<Icon16Dropdown />}
      />,
      <TabsItem
        key="news"
        id="news"
        {...BeforeAfterTabsItemStory.args}
        before={<Icon20NewsfeedOutline />}
        after={<Icon16Dropdown />}
      />,
      <TabsItem
        key="recommendations"
        id="recommendations"
        {...BadgeTabsItemStory.args}
        before={<Icon20ThumbsUpOutline />}
        after={<Icon16Dropdown />}
      />,
      <TabsItem
        key="friends"
        id="friends"
        {...CounterTabsItemStory.args}
        before={<Icon20UsersOutline />}
        after={<Icon16Dropdown />}
      />,
      <TabsItem
        key="photos"
        id="photos"
        {...NumberStatusTabsItemStory.args}
        before={<Icon20PictureOutline />}
        after={<Icon16Dropdown />}
      />,
    ].slice(0, count);
    return (
      <Tabs onSelectedIdChange={(id) => updateArg({ selectedId: id })} {...args}>
        {items}
      </Tabs>
    );
  },
  args: {
    selectedId: 'groups',
    count: 5,
  },
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};

export const WithHorizontalScroll: Story = {
  args: {
    selectedId: 'groups',
    withScrollToSelectedTab: true,
    scrollBehaviorToSelectedTab: 'center',
  },
  render: function Render({ ...args }) {
    const [, updateArg] = useArgs();

    return (
      <Tabs onSelectedIdChange={(id) => updateArg({ selectedId: id })} {...args}>
        <HorizontalScroll arrowSize="m">
          <TabsItem
            id="groups"
            {...BasicTabsItemStory.args}
            before={<Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
          />
          <TabsItem
            id="news"
            {...BeforeAfterTabsItemStory.args}
            before={<Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
          />
          <TabsItem
            id="recommendations"
            {...BadgeTabsItemStory.args}
            before={<Icon20ThumbsUpOutline />}
            after={<Icon16Dropdown />}
          />
          <TabsItem
            id="friends"
            {...CounterTabsItemStory.args}
            before={<Icon20UsersOutline />}
            after={<Icon16Dropdown />}
          />
          <TabsItem
            id="photos"
            {...NumberStatusTabsItemStory.args}
            before={<Icon20PictureOutline />}
            after={<Icon16Dropdown />}
          />
        </HorizontalScroll>
      </Tabs>
    );
  },
  decorators: [
    (Component) => (
      <Group style={{ maxWidth: 500 }}>
        <Component />
      </Group>
    ),
    withSinglePanel,
  ],
};
