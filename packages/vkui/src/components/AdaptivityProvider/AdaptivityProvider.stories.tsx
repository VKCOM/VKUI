import * as React from 'react';
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

export const Playground: StoryObj<AdaptivityProviderProps> = (args: AdaptivityProviderProps) => {
  const DisplayAdaptivityProvider = React.useCallback(function Render() {
    const { density } = useAdaptivityConditionalRender();
    return (
      <>
        {density.compact && (
          <div
            style={{
              padding: 5,
            }}
          >
            Density: Compact
          </div>
        )}
        {density.regular && (
          <div
            style={{
              padding: 5,
            }}
          >
            Density: Regular
          </div>
        )}
      </>
    );
  }, []);
  return (
    <AdaptivityProvider {...args}>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <DisplayAdaptivityProvider />
    </AdaptivityProvider>
  );
};

Playground.args = {};
