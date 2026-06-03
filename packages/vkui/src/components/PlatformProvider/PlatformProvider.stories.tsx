import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PlatformProvider, type PlatformProviderProps } from './PlatformProvider';

const story: Meta<PlatformProviderProps> = {
  title: 'Configuration/PlatformProvider',
  component: PlatformProvider,
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['android', 'ios', 'vkcom'],
    },
  },
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

export const Playground: StoryFn<PlatformProviderProps> = (props: PlatformProviderProps) => {
  const DisplayPlatformProvider = React.useCallback(function Render() {
    const platform = usePlatform();
    return (
      <div
        style={{
          padding: 5,
        }}
      >
        Inner LocaleProvider: {platform}
      </div>
    );
  }, []);
  const outerPlatform = usePlatform();

  return (
    <PlatformProvider {...props}>
      <div
        style={{
          padding: 5,
        }}
      >
        Outer LocaleProvider: {outerPlatform}
      </div>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <DisplayPlatformProvider />
    </PlatformProvider>
  );
};
