import type { Meta, StoryFn } from '@storybook/react';
import { Icon28BlockOutline, Icon28UserOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing, type SpacingProps } from './Spacing';

const story: Meta<SpacingProps> = {
  title: 'Layout/Spacing',
  component: Spacing,
  parameters: createStoryParameters('Spacing', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<SpacingProps>;

export const Playground: Story = (props: SpacingProps) => (
  <div>
    Before Space
    <Spacing {...props} />
    After Space
  </div>
);

export const Example: Story = (props: SpacingProps) => (
  <Group>
    <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>
    <Spacing {...props} />
    <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
  </Group>
);
