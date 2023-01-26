import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import { Tabs, TabsProps } from './Tabs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import {
  Playground as BasicTabsItem,
  WithBeforeAfter as BeforeAfterTabsItem,
  WithBadge as BadgeTabsItem,
  WithCounter as CounterTabsItem,
  WithNumberStatus as NumberStatusTabsItem,
} from '../TabsItem/TabsItem.stories';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Tabs',
  component: Tabs,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Tabs'), ...DisableCartesianParam },
  argTypes: {
    selected: {
      control: {
        type: 'select',
      },
      options: ['groups', 'news', 'recommendations', 'friends', 'photos'],
    },
  },
} as Meta<TabsProps>;

const Template: Story<TabsProps & { selected: string }> = ({ selected = 'groups', ...args }) => {
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
