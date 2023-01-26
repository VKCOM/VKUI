import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PopoutWrapper, PopoutWrapperProps } from './PopoutWrapper';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { SplitCol } from '../SplitCol/SplitCol';

export default {
  title: 'Popouts/PopoutWrapper',
  component: PopoutWrapper,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
} as Meta<PopoutWrapperProps>;

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
