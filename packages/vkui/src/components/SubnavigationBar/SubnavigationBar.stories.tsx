import React from 'react';
import { useArgs } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import {
  Playground as BasicSubnavigationButton,
  WithCounter as CounterSubnavigationButton,
  WithIcon as IconSubnavigationButton,
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

const Template: Story<StorySubnavigationBarProps> = ({ selected, ...args }) => {
  const [, updateArg] = useArgs();

  return (
    <SubnavigationBar {...args}>
      <BasicSubnavigationButton
        {...BasicSubnavigationButton.args}
        selected={selected === 'size'}
        onClick={() => updateArg({ selected: 'size' })}
      />
      <IconSubnavigationButton
        {...IconSubnavigationButton.args}
        selected={selected === 'favorite'}
        onClick={() => updateArg({ selected: 'favorite' })}
      />
      <CounterSubnavigationButton
        {...CounterSubnavigationButton.args}
        selected={selected === 'filters'}
        onClick={() => updateArg({ selected: 'filters' })}
      />
    </SubnavigationBar>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  selected: 'size',
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
