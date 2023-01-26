import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer, FooterProps } from './Footer';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { Cell } from '../Cell/Cell';
import { Avatar } from '../Avatar/Avatar';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Footer',
  component: Footer,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Footer'), ...DisableCartesianParam },
} as Meta<FooterProps>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: '3 сообщества',
};

export const Example = Template.bind({});
Example.args = {
  children: '3 сообщества',
};
Example.decorators = [
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
];
