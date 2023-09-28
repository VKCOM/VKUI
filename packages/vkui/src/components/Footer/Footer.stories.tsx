import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Footer, FooterProps } from './Footer';

const story: Meta<FooterProps> = {
  title: 'Blocks/Footer',
  component: Footer,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
            <Cell before={<Avatar />} subtitle="Веб-сайт">
              Команда ВКонтакте
            </Cell>
            <Cell before={<Avatar />} subtitle="Музыкант">
              Robbie Williams
            </Cell>
            <Cell before={<Avatar />} subtitle="Издательский дом">
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
