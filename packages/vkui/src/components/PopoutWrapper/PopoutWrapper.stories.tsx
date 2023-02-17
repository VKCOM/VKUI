import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story<PopoutWrapperProps> = (args) => (
  <SplitLayout popout={<PopoutWrapper {...args} />}>
    <SplitCol>
      <div />
    </SplitCol>
  </SplitLayout>
);

export const Playground = Template.bind({});
Playground.args = {
  children: 'Some content',
};
