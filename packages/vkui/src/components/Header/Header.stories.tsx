import { Meta, StoryObj } from '@storybook/react';
import {
  Icon12Fire,
  Icon12Tag,
  Icon16LockOutline,
  Icon16UnlockOutline,
  Icon28UserCircleFillBlue,
} from '@vkontakte/icons';
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

export const WithAllFeatures: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    before: <Icon28UserCircleFillBlue />,
    beforeTitle: <Icon16LockOutline />,
    afterTitle: <Icon16UnlockOutline />,
    beforeSubtitle: <Icon12Tag />,
    afterSubtitle: <Icon12Fire />,
    subtitle: 'SOHN — Conrad',
  },
};
