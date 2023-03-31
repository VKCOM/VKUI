import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { Header } from '../../Header/Header';
import { Group } from '../Group';
import {
  ExcludedHorizontalPaddingContent,
  GroupExcludedHorizontalPaddingContentProps,
} from './ExcludedHorizontalPaddingContent';

const story: Meta<GroupExcludedHorizontalPaddingContentProps> = {
  title: 'Blocks/Group/ExcludedHorizontalPaddingContent',
  component: ExcludedHorizontalPaddingContent,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<GroupExcludedHorizontalPaddingContentProps>;

export const Playground: Story = {
  render: (args) => (
    <ExcludedHorizontalPaddingContent {...args}>
      Content without paddings
    </ExcludedHorizontalPaddingContent>
  ),
  decorators: [
    (Component) => (
      <Group header={<Header>Header</Header>} description="Description">
        <Component />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
