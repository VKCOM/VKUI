import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Footer, FooterProps } from './Footer';

const story: Meta<FooterProps> = {
  title: 'Blocks/Footer',
  component: Footer,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Footer'), ...DisableCartesianParam },
};

export default story;

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
