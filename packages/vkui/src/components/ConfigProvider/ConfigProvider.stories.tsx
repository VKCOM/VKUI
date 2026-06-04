import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ConfigProvider, type ConfigProviderProps } from './ConfigProvider';
import { useConfigProvider } from './ConfigProviderContext';

const story: Meta<ConfigProviderProps> = {
  title: 'Configuration/ConfigProvider',
  component: ConfigProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

const DisplayConfigProvider = () => {
  const values = useConfigProvider();
  return (
    <div
      style={{
        padding: 5,
      }}
    >
      {JSON.stringify(values, undefined, 2)}
    </div>
  );
};

export const Playground: StoryFn<ConfigProviderProps> = (args: ConfigProviderProps) => {
  return (
    <ConfigProvider {...args}>
      <DisplayConfigProvider />
    </ConfigProvider>
  );
};
