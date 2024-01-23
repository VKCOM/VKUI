import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { Switch } from '../Switch/Switch';
import { SimpleCell, SimpleCellProps } from './SimpleCell';

const story: Meta<SimpleCellProps> = {
  title: 'Blocks/SimpleCell',
  component: SimpleCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SimpleCellProps>;

export const Current: Story = {
  args: {
    onClick: () => void 0,
    children: 'Указать источник',
    subtitle: 'Уведомление получат друзья, которым может быть интересна ваша запись',
  },
  decorators: [
    (Component, context) => (
      <div>
        <Group header={<Header>Пример без свитча</Header>}>
          <Component {...context.args} />
        </Group>
        <Group header={<Header>Пример со свитчом</Header>}>
          <SimpleCell
            Component="label"
            subtitle="Уведомление получат друзья, которым может быть интересна ваша запись"
            after={<Switch />}
          >
            Отправить уведомление
          </SimpleCell>
        </Group>
        <Group header={<Header>Пример со всеми текстовыми параметрами</Header>}>
          <SimpleCell
            subhead="Subhead"
            title="Title"
            indicator="Indicator"
            subtitle="Subtitle"
            extraSubtitle="Extra Subtitle"
          >
            Title
          </SimpleCell>
        </Group>
      </div>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const WithParagraph: Story = {
  args: {
    onClick: () => void 0,
    ChildComponent: 'p',
    children: 'Указать источник',
    subtitle: 'Уведомление получат друзья, которым может быть интересна ваша запись',
  },
  decorators: [
    (Component, context) => (
      <div>
        <Group header={<Header>Пример без свитча</Header>}>
          <Component {...context.args} />
        </Group>
        <Group header={<Header>Пример со свитчом</Header>}>
          <SimpleCell
            Component="label"
            ChildComponent={context.args.ChildComponent}
            subtitle="Уведомление получат друзья, которым может быть интересна ваша запись"
            after={<Switch />}
          >
            Отправить уведомление
          </SimpleCell>
        </Group>
        <Group header={<Header>Пример со всеми текстовыми параметрами</Header>}>
          <SimpleCell
            ChildComponent={context.args.ChildComponent}
            subhead="Subhead"
            title="Title"
            indicator="Indicator"
            subtitle="Subtitle"
            extraSubtitle="Extra Subtitle"
          >
            Title
          </SimpleCell>
        </Group>
      </div>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const WithDiv: Story = {
  args: {
    onClick: () => void 0,
    ChildComponent: 'div',
    children: 'Указать источник',
    subtitle: 'Уведомление получат друзья, которым может быть интересна ваша запись',
  },
  decorators: [
    (Component, context) => (
      <div>
        <Group header={<Header>Пример без свитча</Header>}>
          <Component {...context.args} />
        </Group>
        <Group header={<Header>Пример со свитчом</Header>}>
          <SimpleCell
            Component="label"
            ChildComponent={context.args.ChildComponent}
            subtitle="Уведомление получат друзья, которым может быть интересна ваша запись"
            after={<Switch />}
          >
            Отправить уведомление
          </SimpleCell>
          <Group header={<Header>Пример со всеми текстовыми параметрами</Header>}>
            <SimpleCell
              ChildComponent={context.args.ChildComponent}
              subhead="Subhead"
              title="Title"
              indicator="Indicator"
              subtitle="Subtitle"
              extraSubtitle="Extra Subtitle"
            >
              Title
            </SimpleCell>
          </Group>
        </Group>
      </div>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
