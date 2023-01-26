import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AdaptivityProvider, AdaptivityProviderProps } from './AdaptivityProvider';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';

export default {
  title: 'Service/AdaptivityProvider',
  component: AdaptivityProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<AdaptivityProviderProps>;

const DisplayAdaptivityProvider = () => {
  const { sizeX, sizeY } = useAdaptivityConditionalRender();

  return (
    <>
      {sizeX.compact && <div style={{ padding: 5 }}>Size X: Compact</div>}
      {sizeX.regular && <div style={{ padding: 5 }}>Size X: Regular</div>}
      {sizeY.compact && <div style={{ padding: 5 }}>Size Y: Compact</div>}
      {sizeY.regular && <div style={{ padding: 5 }}>Size Y: Regular</div>}
    </>
  );
};

const Template: Story<AdaptivityProviderProps> = (args) => (
  <AdaptivityProvider {...args}>
    <DisplayAdaptivityProvider />
  </AdaptivityProvider>
);

export const Playground = Template.bind({});
Playground.args = {};
