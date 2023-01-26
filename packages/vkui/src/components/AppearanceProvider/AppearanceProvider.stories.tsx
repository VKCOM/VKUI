import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AppearanceProvider, AppearanceProviderProps } from './AppearanceProvider';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';

export default {
  title: 'Service/AppearanceProvider',
  component: AppearanceProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<AppearanceProviderProps>;

const Template: Story<AppearanceProviderProps> = (args) => {
  return (
    <AppearanceProvider {...args}>
      <div
        style={{
          padding: 5,
          background: 'var(--vkui--color_background)',
          color: 'var(--vkui--color_text_primary)',
        }}
      >
        AppearanceProvider
      </div>
    </AppearanceProvider>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
