import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { PlatformProvider, PlatformProviderProps } from './PlatformProvider';

const story: Meta<PlatformProviderProps> = {
  title: 'Service/PlatformProvider',
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
};

export default story;

const DisplayPlatformProvider = () => {
  const { platform } = useConfigProvider();

  return <div style={{ padding: 5 }}>Inner LocaleProvider: {platform}</div>;
};

const Template: Story<PlatformProviderProps> = ({ value }) => {
  const { platform } = useConfigProvider();

  return (
    <PlatformProvider value={value ?? platform}>
      <div style={{ padding: 5 }}>Outer LocaleProvider: {platform}</div>
      <DisplayPlatformProvider />
    </PlatformProvider>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
