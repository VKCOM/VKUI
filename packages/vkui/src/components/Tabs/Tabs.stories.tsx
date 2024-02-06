import * as React from 'react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { HTMLAttributesWithRootRef } from 'src/types';
import { withSinglePanel } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
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

interface TabsContentProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  onChangePosition?(e: number): void;
}

const TabsContent = ({ getRootRef, onChangePosition, ...props }: TabsContentProps) => {
  const scroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const newValue = +(Math.ceil(e.currentTarget.scrollLeft) / e.currentTarget.clientWidth).toFixed(
      2,
    );
    onChangePosition?.(newValue);
  };

  return (
    <div
      ref={getRootRef}
      onScroll={scroll}
      style={{
        display: 'flex',
        scrollSnapType: 'x mandatory',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
      }}
      {...props}
    />
  );
};

const TabsContentItem = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      width: '100%',
      flex: '0 0 auto',
      scrollSnapAlign: 'start',
    }}
    {...props}
  />
);

interface IndicatorProps {
  position?: number;
}

const Indicator = ({ position = 0 }: IndicatorProps) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--vkui--color_background_accent)',
        borderRadius: 'inherit',
        bottom: '0',
        left: '0',
        height: 2,
        position: 'absolute',
        transformOrigin: '0 0',
        transition: 'transform .05s',
        width: `${100 / 5}%`,
        transform: `translateX(${100 * position}%)`,
      }}
    />
  );
};

TabsContent.Item = TabsContentItem;

function SwipeApp() {
  const [value, setValue] = React.useState(0);
  const rowRef = React.useRef<HTMLDivElement | null>(null);

  const setTab = (tabNumber: number) => {
    if (!rowRef.current) {
      return;
    }

    rowRef.current.scrollTo({
      left: tabNumber * rowRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Tabs>
        <HorizontalScroll arrowSize="m">
          <div style={{ display: 'flex', position: 'relative' }}>
            <Indicator position={value} />
            <TabsItem onClick={() => setTab(0)}>Сообщества</TabsItem>
            <TabsItem onClick={() => setTab(1)}>Новости</TabsItem>
            <TabsItem onClick={() => setTab(2)}>Рекомендации</TabsItem>
            <TabsItem onClick={() => setTab(3)}>Друзья</TabsItem>
            <TabsItem onClick={() => setTab(4)}>Фотографии</TabsItem>
          </div>
        </HorizontalScroll>
      </Tabs>
      <TabsContent getRootRef={rowRef} onChangePosition={setValue}>
        <TabsContent.Item>
          <Div>Сообщества</Div>
        </TabsContent.Item>
        <TabsContent.Item>
          <Div>Новости</Div>
        </TabsContent.Item>
        <TabsContent.Item>
          <Div>Рекомендации</Div>
        </TabsContent.Item>
        <TabsContent.Item>
          <Div>Друзья</Div>
        </TabsContent.Item>
        <TabsContent.Item>
          <Div>Фотографии</Div>
        </TabsContent.Item>
      </TabsContent>
    </>
  );
}

export const PlaygroundSwipe: Story = {
  render: function Render() {
    return <SwipeApp />;
  },
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
    withSinglePanel,
  ],
};
