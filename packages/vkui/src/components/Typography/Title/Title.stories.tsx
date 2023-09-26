import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Title, TitleProps } from './Title';

const story: Meta<TitleProps> = {
  title: 'Typography/Title',
  component: Title,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<TitleProps>;

export const Playground: Story = {
  render: (args) => (
    <div>
      <Title level="1" {...args}>
        Title 1
      </Title>
      <Title level="2" {...args}>
        Title 2
      </Title>
      <Title level="3" {...args}>
        Title 3
      </Title>
    </div>
  ),
};
