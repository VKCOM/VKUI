import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ConfigProvider, ConfigProviderProps } from './ConfigProvider';
import { useConfigProvider } from './ConfigProviderContext';

const story: Meta<ConfigProviderProps> = {
  title: 'Service/ConfigProvider',
  component: ConfigProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
