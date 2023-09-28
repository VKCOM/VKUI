import * as React from 'react';
import { useArgs } from '@storybook/addons';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SubnavigationButton } from '../SubnavigationButton/SubnavigationButton';
import {
  Playground as BasicSubnavigationButtonStory,
  WithCounter as CounterSubnavigationButtonStory,
  WithIcon as IconSubnavigationButtonStory,
} from '../SubnavigationButton/SubnavigationButton.stories';
import { SubnavigationBar, SubnavigationBarProps } from './SubnavigationBar';

type StorySubnavigationBarProps = SubnavigationBarProps & { selected: string };

const story: Meta<StorySubnavigationBarProps> = {
  title: 'Blocks/SubnavigationBar',
  component: SubnavigationBar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    selected: {
      control: 'select',
      options: ['size', 'favorite', 'filters'],
    },
  },
};

export default story;

type Story = StoryObj<StorySubnavigationBarProps>;

export const Playground: Story = {
  render: function Render({ selected, ...args }) {
    const [, updateArg] = useArgs();

    return (
      <SubnavigationBar {...args}>
        <SubnavigationButton
          {...BasicSubnavigationButtonStory.args}
          selected={selected === 'size'}
          onClick={() => updateArg({ selected: 'size' })}
        />
        <SubnavigationButton
          {...IconSubnavigationButtonStory.args}
          selected={selected === 'favorite'}
          onClick={() => updateArg({ selected: 'favorite' })}
        />
        <SubnavigationButton
          {...CounterSubnavigationButtonStory.args}
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
