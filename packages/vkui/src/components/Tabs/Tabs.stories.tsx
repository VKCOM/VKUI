import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { TabsItem } from '../TabsItem/TabsItem';
import {
  WithBadge as BadgeTabsItemStory,
  Playground as BasicTabsItemStory,
  WithBeforeAfter as BeforeAfterTabsItemStory,
  WithCounter as CounterTabsItemStory,
  WithNumberStatus as NumberStatusTabsItemStory,
} from '../TabsItem/TabsItem.stories';
import { Tabs, TabsProps } from './Tabs';

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
          selected={selected === 'news'}
          onClick={() => updateArg({ selected: 'news' })}
        />
        <TabsItem
          {...BadgeTabsItemStory.args}
          selected={selected === 'recommendations'}
          onClick={() => updateArg({ selected: 'recommendations' })}
        />
        <TabsItem
          {...CounterTabsItemStory.args}
          selected={selected === 'friends'}
          onClick={() => updateArg({ selected: 'friends' })}
        />
        <TabsItem
          {...NumberStatusTabsItemStory.args}
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
