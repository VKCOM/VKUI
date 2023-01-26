import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LocaleProvider, LocaleProviderProps } from './LocaleProvider';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';

export default {
  title: 'Service/LocaleProvider',
  component: LocaleProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<LocaleProviderProps>;

const DisplayLocaleProvider = () => {
  const { locale } = useConfigProvider();

  return <div style={{ padding: 5 }}>Inner LocaleProvider: {locale}</div>;
};

const Template: Story<LocaleProviderProps> = (args) => {
  const { locale } = useConfigProvider();

  return (
    <LocaleProvider {...args}>
      <div style={{ padding: 5 }}>Outer LocaleProvider: {locale}</div>
      <DisplayLocaleProvider />
    </LocaleProvider>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
