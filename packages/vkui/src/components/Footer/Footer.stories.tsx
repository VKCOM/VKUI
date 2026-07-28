import type { Meta, StoryFn } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Cell } from '../Cell/Cell';
import { Group } from '../Group/Group';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Footer, type FooterProps } from './Footer';

const story: Meta<FooterProps> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: createStoryParameters('Footer', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<FooterProps>;

export const Playground: Story = (props: FooterProps) => <Footer {...props} />;

Playground.args = {
  children: 'Copyright VK LLC',
};

export const Example: Story = (props: FooterProps) => (
  <Panel>
    <PanelHeader>Footer</PanelHeader>
    <Group>
      <Cell before={<Avatar />} subtitle="Веб-сайт" onClick={noop}>
        Команда ВКонтакте
      </Cell>
      <Cell before={<Avatar />} subtitle="Музыкант" onClick={noop}>
        Robbie Williams
      </Cell>
      <Cell before={<Avatar />} subtitle="Издательский дом" onClick={noop}>
        ПостНаука
      </Cell>
    </Group>
    <Footer {...props} />
  </Panel>
);

Example.args = Playground.args;

Example.decorators = [withSinglePanel, withVKUILayout];
