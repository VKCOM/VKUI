import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Uploader, UploaderProps } from './Uploader';

const story: Meta<UploaderProps> = {
  title: 'Blocks/Uploader',
  component: Uploader,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<UploaderProps>;

export const Playground: Story = {
  render: (args) => <Uploader {...args}>Content with paddings</Uploader>,
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};
