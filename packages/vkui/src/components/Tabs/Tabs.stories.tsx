import React from 'react';
import { useArgs } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import {
  WithBadge as BadgeTabsItem,
  Playground as BasicTabsItem,
  WithBeforeAfter as BeforeAfterTabsItem,
  WithCounter as CounterTabsItem,
  WithNumberStatus as NumberStatusTabsItem,
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

const Template: Story<StoryTabsProps> = ({ selected = 'groups', ...args }) => {
  const [, updateArg] = useArgs();

  return (
    <Tabs {...args}>
      <BasicTabsItem
        {...BasicTabsItem.args}
        selected={selected === 'groups'}
        onClick={() => updateArg({ selected: 'groups' })}
      />
      <BeforeAfterTabsItem
        {...BeforeAfterTabsItem.args}
        selected={selected === 'news'}
        onClick={() => updateArg({ selected: 'news' })}
      />
      <BadgeTabsItem
        {...BadgeTabsItem.args}
        selected={selected === 'recommendations'}
        onClick={() => updateArg({ selected: 'recommendations' })}
      />
      <CounterTabsItem
        {...CounterTabsItem.args}
        selected={selected === 'friends'}
        onClick={() => updateArg({ selected: 'friends' })}
      />
      <NumberStatusTabsItem
        {...NumberStatusTabsItem.args}
        selected={selected === 'photos'}
        onClick={() => updateArg({ selected: 'photos' })}
      />
    </Tabs>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <Group>
      <Component />
    </Group>
  ),
];
