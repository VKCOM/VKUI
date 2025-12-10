import type { Meta, StoryObj } from '@storybook/react';
import { Icon24FavoriteOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { useCustomArgs } from '../../testing/useCustomArgs';
import { Counter } from '../Counter/Counter';
import { Group } from '../Group/Group';
import { SubnavigationButton } from '../SubnavigationButton/SubnavigationButton';
import {
  Playground as BasicSubnavigationButtonStory,
  WithCounter as CounterSubnavigationButtonStory,
  WithIcon as IconSubnavigationButtonStory,
} from '../SubnavigationButton/SubnavigationButton.stories';
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

export const Playground: Story = {
  render: function Render({ selected, ...args }) {
    const [, updateArg] = useCustomArgs();

    return (
      <SubnavigationBar {...args}>
        <SubnavigationButton
          {...BasicSubnavigationButtonStory.args}
          selected={selected === 'size'}
          onClick={() => updateArg({ selected: 'size' })}
        />
        <SubnavigationButton
          {...IconSubnavigationButtonStory.args}
          before={<Icon24FavoriteOutline />}
          selected={selected === 'favorite'}
          onClick={() => updateArg({ selected: 'favorite' })}
        />
        <SubnavigationButton
          {...CounterSubnavigationButtonStory.args}
          after={<Counter size="s">3</Counter>}
          selected={selected === 'filters'}
          onClick={() => updateArg({ selected: 'filters' })}
        />
      </SubnavigationBar>
    );
  },
  args: {
    selected: 'size',
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
