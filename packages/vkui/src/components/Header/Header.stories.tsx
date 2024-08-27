import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { Header, type HeaderProps } from './Header';

const story: Meta<HeaderProps> = {
  title: 'Blocks/Header',
  component: Header,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    aside: createFieldWithPresets({
      iconSizes: [],
      additionalPresets: {
        Link: <Link>Показать все</Link>,
      },
    }),
    indicator: createFieldWithPresets({
      iconSizes: [],
      additionalPresets: {
        Text: '12',
        Counter: (
          <Counter size="s" mode="prominent">
            3
          </Counter>
        ),
      },
    }),
  },
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
    aside: 'Link',
  },
};

export const WithIndicator: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    indicator: 'Text',
  },
};

export const WithCounter: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    indicator: 'Counter',
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
