import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { PopoutWrapper, PopoutWrapperProps } from './PopoutWrapper';

const story: Meta<PopoutWrapperProps> = {
  title: 'Popouts/PopoutWrapper',
  component: PopoutWrapper,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default story;

type Story = StoryObj<PopoutWrapperProps>;

export const Playground: Story = {
  render: (args) => (
    <SplitLayout popout={<PopoutWrapper {...args} />}>
      <SplitCol>
        <div />
      </SplitCol>
    </SplitLayout>
  ),
  args: {
    children: 'Some content',
  },
};
