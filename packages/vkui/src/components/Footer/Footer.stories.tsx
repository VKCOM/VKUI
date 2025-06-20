import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Footer, type FooterProps } from './Footer';

const story: Meta<FooterProps> = {
  title: 'Layout/Group/Footer',
  component: Footer,
  parameters: createStoryParameters('Footer', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<FooterProps>;

export const Playground: Story = {
  args: {
    children: '3 сообщества',
  },
};

export const Example: Story = {
  ...Playground,
  decorators: [
    (Component) => (
      <>
        <PanelHeader>Footer</PanelHeader>
        <Group>
          <List>
            <Cell before={<Avatar />} subtitle="Веб-сайт" onClick={noop}>
              Команда ВКонтакте
            </Cell>
            <Cell before={<Avatar />} subtitle="Музыкант" onClick={noop}>
              Robbie Williams
            </Cell>
            <Cell before={<Avatar />} subtitle="Издательский дом" onClick={noop}>
              ПостНаука
            </Cell>
          </List>
        </Group>
        <Component />
      </>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
