import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ConfigProvider, ConfigProviderProps } from './ConfigProvider';
import { useConfigProvider } from './ConfigProviderContext';

const story: Meta<ConfigProviderProps> = {
  title: 'Service/ConfigProvider',
  component: ConfigProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ConfigProviderProps>;

const DisplayConfigProvider = () => {
  const values = useConfigProvider();

  return <div style={{ padding: 5 }}>{JSON.stringify(values, undefined, 2)}</div>;
};

export const Playground: Story = {
  render: (args) => {
    return (
      <ConfigProvider {...args}>
        <DisplayConfigProvider />
      </ConfigProvider>
    );
  },
};
