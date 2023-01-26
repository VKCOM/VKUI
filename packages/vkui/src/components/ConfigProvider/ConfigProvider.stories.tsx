import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ConfigProvider, ConfigProviderProps } from './ConfigProvider';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useConfigProvider } from './ConfigProviderContext';

export default {
  title: 'Service/ConfigProvider',
  component: ConfigProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<ConfigProviderProps>;

const DisplayConfigProvider = () => {
  const values = useConfigProvider();

  return <div style={{ padding: 5 }}>{JSON.stringify(values, undefined, 2)}</div>;
};

const Template: Story<ConfigProviderProps> = (args) => {
  return (
    <ConfigProvider {...args}>
      <DisplayConfigProvider />
    </ConfigProvider>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
