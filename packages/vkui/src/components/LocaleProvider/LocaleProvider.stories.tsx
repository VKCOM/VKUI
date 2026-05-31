import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useLocale } from '../../hooks/useLocale';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
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

export const Playground: Story = (props: LocaleProviderProps) => {
  const DisplayLocaleProvider = React.useCallback(function Render() {
    const locale = useLocale();
    return (
      <div
        style={{
          padding: 5,
        }}
      >
        Inner LocaleProvider: {locale}
      </div>
    );
  }, []);
  const locale = useLocale();

  return (
    <LocaleProvider {...props}>
      <div
        style={{
          padding: 5,
        }}
      >
        Outer LocaleProvider: {locale}
      </div>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <DisplayLocaleProvider />
    </LocaleProvider>
  );
};

Playground.args = {};
