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
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { TabsItem } from '../TabsItem/TabsItem';
import { Tabs, type TabsProps } from './Tabs';

type StoryTabsProps = TabsProps & { selected: string; count: number };

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
  tags: ['Навигация'],
};
export default story;

type Story = StoryObj<StoryTabsProps>;

export const Playground: Story = (args: StoryTabsProps) => {
  const count = args.count;
  const items = [
    <TabsItem
      key="groups"
      id="groups"
      before={<Icon20NewsfeedOutline />}
      after={<Icon16Dropdown />}
    >
      Сообщества
    </TabsItem>,
    <TabsItem key="news" id="news" before={<Icon20NewsfeedOutline />} after={<Icon16Dropdown />}>
      Лента
    </TabsItem>,
    <TabsItem
      key="recommendations"
      id="recommendations"
      before={<Icon20ThumbsUpOutline />}
      after={<Icon16Dropdown />}
      status={<Badge mode="prominent">Есть обновления</Badge>}
    >
      Рекомендации
    </TabsItem>,
    <TabsItem
      key="friends"
      id="friends"
      before={<Icon20UsersOutline />}
      after={<Icon16Dropdown />}
      status={
        <Counter mode="primary" appearance="accent-red" size="s">
          3
        </Counter>
      }
    >
      Друзья
    </TabsItem>,
    <TabsItem
      key="photos"
      id="photos"
      before={<Icon20PictureOutline />}
      after={<Icon16Dropdown />}
      status={23}
    >
      Фотографии
    </TabsItem>,
  ].slice(0, count);
  return (
    <Group>
      <Tabs {...args}>{items}</Tabs>
    </Group>
  );
};
Playground.args = {
  selectedId: 'groups',
  count: 5,
};

export const WithHorizontalScroll: Story = (args: StoryTabsProps) => {
  return (
    <Group
      style={{
        maxWidth: 500,
      }}
    >
      <Tabs {...args}>
        <HorizontalScroll arrowSize="m">
          <TabsItem
            key="groups"
            id="groups"
            before={<Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
          >
            Сообщества
          </TabsItem>
          <TabsItem
            key="news"
            id="news"
            before={<Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
          >
            Лента
          </TabsItem>
          <TabsItem
            key="recommendations"
            id="recommendations"
            before={<Icon20ThumbsUpOutline />}
            after={<Icon16Dropdown />}
            status={<Badge mode="prominent">Есть обновления</Badge>}
          >
            Рекомендации
          </TabsItem>
          <TabsItem
            key="friends"
            id="friends"
            before={<Icon20UsersOutline />}
            after={<Icon16Dropdown />}
            status={
              <Counter mode="primary" appearance="accent-red" size="s">
                3
              </Counter>
            }
          >
            Друзья
          </TabsItem>
          <TabsItem
            key="photos"
            id="photos"
            before={<Icon20PictureOutline />}
            after={<Icon16Dropdown />}
            status={23}
          >
            Фотографии
          </TabsItem>
        </HorizontalScroll>
      </Tabs>
    </Group>
  );
};

WithHorizontalScroll.args = {
  selectedId: 'groups',
  withScrollToSelectedTab: true,
  scrollBehaviorToSelectedTab: 'center',
};
WithHorizontalScroll.decorators = [withSinglePanel];
