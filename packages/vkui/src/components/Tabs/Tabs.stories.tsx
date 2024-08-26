import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon16Dropdown,
  Icon20NewsfeedOutline,
  Icon20PictureOutline,
  Icon20ThumbsUpOutline,
  Icon20UsersOutline,
} from '@vkontakte/icons';
import { withSinglePanel } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
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
  title: 'Blocks/Tabs',
  component: Tabs,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    selected: {
      control: {
        type: 'select',
      },
      options: ['groups', 'news', 'recommendations', 'friends', 'photos'],
    },
  },
};

export default story;

type Story = StoryObj<StoryTabsProps>;

export const Playground: Story = {
  render: function Render({ selected = 'groups', ...args }) {
    const [, updateArg] = useArgs();

    return (
      <Tabs {...args}>
        <TabsItem
          {...BasicTabsItemStory.args}
          selected={selected === 'groups'}
          onClick={() => updateArg({ selected: 'groups' })}
        />
        <TabsItem
          {...BeforeAfterTabsItemStory.args}
          before={<Icon20NewsfeedOutline />}
          after={<Icon16Dropdown />}
          selected={selected === 'news'}
          onClick={() => updateArg({ selected: 'news' })}
        />
        <TabsItem
          {...BadgeTabsItemStory.args}
          before={<Icon20ThumbsUpOutline />}
          after={<Icon16Dropdown />}
          selected={selected === 'recommendations'}
          onClick={() => updateArg({ selected: 'recommendations' })}
        />
        <TabsItem
          {...CounterTabsItemStory.args}
          before={<Icon20UsersOutline />}
          after={<Icon16Dropdown />}
          selected={selected === 'friends'}
          onClick={() => updateArg({ selected: 'friends' })}
        />
        <TabsItem
          {...NumberStatusTabsItemStory.args}
          before={<Icon20PictureOutline />}
          after={<Icon16Dropdown />}
          selected={selected === 'photos'}
          onClick={() => updateArg({ selected: 'photos' })}
        />
      </Tabs>
    );
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
    withScrollToSelectedTab: true,
    scrollBehaviorToSelectedTab: 'center',
  },
  render: function Render({ selected = 'groups', ...args }) {
    const [, updateArg] = useArgs();

    return (
      <Tabs {...args}>
        <HorizontalScroll arrowSize="m">
          <TabsItem
            {...BasicTabsItemStory.args}
            selected={selected === 'groups'}
            onClick={() => updateArg({ selected: 'groups' })}
          />
          <TabsItem
            {...BeforeAfterTabsItemStory.args}
            before={<Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
            selected={selected === 'news'}
            onClick={() => updateArg({ selected: 'news' })}
          />
          <TabsItem
            {...BadgeTabsItemStory.args}
            before={<Icon20ThumbsUpOutline />}
            after={<Icon16Dropdown />}
            selected={selected === 'recommendations'}
            onClick={() => updateArg({ selected: 'recommendations' })}
          />
          <TabsItem
            {...CounterTabsItemStory.args}
            before={<Icon20UsersOutline />}
            after={<Icon16Dropdown />}
            selected={selected === 'friends'}
            onClick={() => updateArg({ selected: 'friends' })}
          />
          <TabsItem
            {...NumberStatusTabsItemStory.args}
            before={<Icon20PictureOutline />}
            after={<Icon16Dropdown />}
            selected={selected === 'photos'}
            onClick={() => updateArg({ selected: 'photos' })}
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
