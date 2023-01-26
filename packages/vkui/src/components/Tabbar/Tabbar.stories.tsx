import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tabbar, TabbarProps } from './Tabbar';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import {
  Icon28ClipOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';
import { TabbarItem } from '../TabbarItem/TabbarItem';
import { Counter } from '../Counter/Counter';
import { Badge } from '../Badge/Badge';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Layout/Tabbar',
  component: Tabbar,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Tabbar'), ...DisableCartesianParam },
  decorators: [withVKUILayout],
} as Meta<TabbarProps>;

const Template: Story<TabbarProps> = (args) => {
  const [activeStory, setActiveStory] = React.useState<string>('profile');
  const onStoryChange = (e: React.MouseEvent<HTMLElement>) =>
    setActiveStory(e.currentTarget.dataset.story!);

  return (
    <Tabbar {...args}>
      <TabbarItem
        onClick={onStoryChange}
        selected={activeStory === 'feed'}
        data-story="feed"
        text="Новости"
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem
        onClick={onStoryChange}
        selected={activeStory === 'services'}
        data-story="services"
        text="Сервисы"
      >
        <Icon28ServicesOutline />
      </TabbarItem>
      <TabbarItem
        onClick={onStoryChange}
        selected={activeStory === 'messages'}
        data-story="messages"
        indicator={
          <Counter size="s" mode="prominent">
            12
          </Counter>
        }
        text="Сообщения"
      >
        <Icon28MessageOutline />
      </TabbarItem>
      <TabbarItem
        onClick={onStoryChange}
        selected={activeStory === 'clips'}
        data-story="clips"
        text="Клипы"
      >
        <Icon28ClipOutline />
      </TabbarItem>
      <TabbarItem
        onClick={onStoryChange}
        selected={activeStory === 'profile'}
        data-story="profile"
        indicator={<Badge mode="prominent" />}
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>
  );
};

export const Playground = Template.bind({});
