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
    before: createFieldWithPresets({
      iconSizes: ['28'],
      requiredIcons: ['Icon28UserCircleFillBlue'],
    }),
    beforeTitle: createFieldWithPresets({
      iconSizes: ['16'],
      requiredIcons: ['Icon16LockOutline'],
    }),
    afterTitle: createFieldWithPresets({
      iconSizes: ['16'],
      requiredIcons: ['Icon16UnlockOutline'],
    }),
    beforeSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      requiredIcons: ['Icon12Tag'],
    }),
    afterSubtitle: createFieldWithPresets({
      iconSizes: ['12'],
      requiredIcons: ['Icon12Fire'],
    }),
    after: createFieldWithPresets({
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
    after: 'Link',
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

export const WithAllFeatures: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    before: 'Icon28UserCircleFillBlue',
    beforeTitle: 'Icon16LockOutline',
    afterTitle: 'Icon16UnlockOutline',
    beforeSubtitle: 'Icon12Tag',
    afterSubtitle: 'Icon12Fire',
    subtitle: 'SOHN — Conrad',
    after: <Link>Показать все</Link>,
  },
};
