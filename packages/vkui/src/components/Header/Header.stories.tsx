import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { Header, type HeaderProps } from './Header';

const story: Meta<HeaderProps> = {
  title: 'Layout/Group/Header',
  component: Header,
  parameters: createStoryParameters('Header', CanvasFullLayout, DisableCartesianParam),
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
      iconSizes: ['16', '24'],
      additionalPresets: {
        Link: <Link>Показать все</Link>,
      },
    }),
    indicator: createFieldWithPresets({
      iconSizes: [],
      additionalPresets: {
        Text: '12',
        Counter: (
          <Counter size="s" mode="primary" appearance="accent-red">
            3
          </Counter>
        ),
      },
    }),
  },
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<HeaderProps>;
export const Playground: Story = (props: HeaderProps) => <Header {...props} />;
Playground.args = {
  children: 'Плейлисты',
};
export const WithSubtitle: Story = (props: HeaderProps) => <Header {...props} />;
Object.assign(WithSubtitle, Playground);
WithSubtitle.args = {
  ...Playground.args,
  subtitle: 'SOHN — Conrad',
  subtitleComponent: 'h3',
};
export const WithAside: Story = (props: HeaderProps) => <Header {...props} />;
WithAside.args = {
  ...Playground.args,
  after: 'Link',
};
export const WithIndicator: Story = (props: HeaderProps) => <Header {...props} />;
WithIndicator.args = {
  ...Playground.args,
  indicator: 'Text',
};
export const WithCounter: Story = (props: HeaderProps) => (
  <Group>
    <Header {...props} />
  </Group>
);

WithCounter.args = {
  ...Playground.args,
  indicator: 'Counter',
};

WithCounter.decorators = [withSinglePanel, withVKUILayout];

export const WithAllFeatures: Story = (props: HeaderProps) => <Header {...props} />;

WithAllFeatures.args = {
  ...Playground.args,
  before: 'Icon28UserCircleFillBlue',
  beforeTitle: 'Icon16LockOutline',
  afterTitle: 'Icon16UnlockOutline',
  beforeSubtitle: 'Icon12Tag',
  afterSubtitle: 'Icon12Fire',
  subtitle: 'SOHN — Conrad',
  after: 'Link',
};
