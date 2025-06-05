import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { PlatformProvider, type PlatformProviderProps } from './PlatformProvider';

const story: Meta<PlatformProviderProps> = {
  title: 'Configuration/PlatformProvider',
  component: PlatformProvider,
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['material', 'ios', 'vkcom'],
    },
  },
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

type Story = StoryObj<PlatformProviderProps>;

const DisplayPlatformProvider = () => {
  const { platform } = useConfigProvider();

  return <div style={{ padding: 5 }}>Inner LocaleProvider: {platform}</div>;
};

export const Playground: Story = {
  render: function Render({ value }) {
    const { platform } = useConfigProvider();

    return (
      <PlatformProvider value={value ?? platform}>
        <div style={{ padding: 5 }}>Outer LocaleProvider: {platform}</div>
        <DisplayPlatformProvider />
      </PlatformProvider>
    );
  },
};
