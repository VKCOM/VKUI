import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { LocaleProvider, type LocaleProviderProps } from './LocaleProvider';

const story: Meta<LocaleProviderProps> = {
  title: 'Configuration/LocaleProvider',
  component: LocaleProvider,
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['ru', 'en', 'fr', 'ua'],
    },
  },
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

type Story = StoryObj<LocaleProviderProps>;

const DisplayLocaleProvider = () => {
  const { locale } = useConfigProvider();

  return <div style={{ padding: 5 }}>Inner LocaleProvider: {locale}</div>;
};

export const Playground: Story = {
  render: function Render({ value }) {
    const { locale } = useConfigProvider();

    return (
      <LocaleProvider value={value ?? locale}>
        <div style={{ padding: 5 }}>Outer LocaleProvider: {locale}</div>
        <DisplayLocaleProvider />
      </LocaleProvider>
    );
  },
};
