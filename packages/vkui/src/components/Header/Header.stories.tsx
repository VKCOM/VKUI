import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './Header';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Link } from '../Link/Link';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Header',
  component: Header,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Header'), ...DisableCartesianParam },
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Плейлисты',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  ...Playground.args,
  subtitle: 'SOHN — Conrad',
};

export const WithAside = Template.bind({});
WithAside.args = {
  ...Playground.args,
  aside: <Link>Показать все</Link>,
};

export const WithIndicator = Template.bind({});
WithIndicator.args = {
  ...Playground.args,
  indicator: '12',
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  ...Playground.args,
  indicator: (
    <Counter size="s" mode="prominent">
      3
    </Counter>
  ),
};
WithCounter.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
