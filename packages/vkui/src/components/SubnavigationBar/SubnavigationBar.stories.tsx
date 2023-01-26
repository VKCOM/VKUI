import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubnavigationBar, SubnavigationBarProps } from './SubnavigationBar';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import {
  Playground as BasicSubnavigationButton,
  WithIcon as IconSubnavigationButton,
  WithCounter as CounterSubnavigationButton,
} from '../SubnavigationButton/SubnavigationButton.stories';
import { Group } from '../Group/Group';
import { useArgs } from '@storybook/addons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/SubnavigationBar',
  component: SubnavigationBar,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('SubnavigationBar'),
    ...DisableCartesianParam,
  },
  argTypes: {
    selected: {
      control: 'select',
      options: ['size', 'favorite', 'filters'],
    },
  },
} as Meta<SubnavigationBarProps>;

const Template: Story<SubnavigationBarProps & { selected: string }> = ({ selected, ...args }) => {
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
