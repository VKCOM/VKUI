import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { Header, HeaderProps } from './Header';

const story: Meta<HeaderProps> = {
  title: 'Blocks/Header',
  component: Header,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<HeaderProps>;

export const Playground: Story = {
  args: {
    children: 'Плейлисты',
  },
};

export const WithSubtitle: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    subtitle: 'SOHN — Conrad',
    subtitleComponent: 'h3',
  },
};

export const WithAside: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    aside: <Link>Показать все</Link>,
  },
};

export const WithIndicator: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    indicator: '12',
  },
};

export const WithCounter: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    indicator: (
      <Counter size="s" mode="prominent">
        3
      </Counter>
    ),
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
