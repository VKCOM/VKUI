import type { Meta, StoryObj } from '@storybook/react';
import { Icon24FavoriteOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { SubnavigationButton } from '../SubnavigationButton/SubnavigationButton';
import { SubnavigationBar, type SubnavigationBarProps } from './SubnavigationBar';

type StorySubnavigationBarProps = SubnavigationBarProps & { selected: string };

const story: Meta<StorySubnavigationBarProps> = {
  title: 'Navigation/SubnavigationBar',
  component: SubnavigationBar,
  parameters: createStoryParameters('SubnavigationBar', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    selected: {
      control: 'select',
      options: ['size', 'favorite', 'filters'],
    },
  },
  tags: ['Навигация'],
};

export default story;

type Story = StoryObj<StorySubnavigationBarProps>;

export const Playground: Story = (args: StorySubnavigationBarProps) => {
  const selected = args.selected;
  return (
    <Group>
      <SubnavigationBar {...args}>
        <SubnavigationButton selected={selected === 'size'}>Размер</SubnavigationButton>
        <SubnavigationButton before={<Icon24FavoriteOutline />} selected={selected === 'favorite'}>
          Избранное
        </SubnavigationButton>
        <SubnavigationButton
          after={<Counter size="s">3</Counter>}
          selected={selected === 'filters'}
        >
          Фильтры
        </SubnavigationButton>
      </SubnavigationBar>
    </Group>
  );
};

Playground.args = {
  selected: 'size',
};

Playground.decorators = [withSinglePanel, withVKUILayout];
