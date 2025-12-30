import type { Meta, StoryObj } from '@storybook/react';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { AdaptivityProvider, type AdaptivityProviderProps } from './AdaptivityProvider';

const story: Meta<AdaptivityProviderProps> = {
  title: 'Configuration/AdaptivityProvider',
  component: AdaptivityProvider,
  parameters: createStoryParameters('AdaptivityProvider', CanvasFullLayout, DisableCartesianParam),
  tags: ['Конфигурация'],
};

export default story;

const DisplayAdaptivityProvider = () => {
  const { density } = useAdaptivityConditionalRender();

  return (
    <>
      {density.compact && <div style={{ padding: 5 }}>Density: Compact</div>}
      {density.regular && <div style={{ padding: 5 }}>Density: Regular</div>}
    </>
  );
};

export const Playground: StoryObj<AdaptivityProviderProps> = {
  render: (args) => (
    <AdaptivityProvider {...args}>
      <DisplayAdaptivityProvider />
    </AdaptivityProvider>
  ),
};
