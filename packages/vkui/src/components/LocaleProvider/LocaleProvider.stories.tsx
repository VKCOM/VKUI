import type { Meta, StoryFn } from '@storybook/react';
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

type Story = StoryFn<LocaleProviderProps>;

const DisplayLocaleProvider = () => {
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
};

export const Playground: Story = (props: LocaleProviderProps) => {
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
      <DisplayLocaleProvider />
    </LocaleProvider>
  );
};
