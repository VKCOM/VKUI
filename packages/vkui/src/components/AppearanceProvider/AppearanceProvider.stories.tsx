import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { AppearanceProvider, AppearanceProviderProps } from './AppearanceProvider';

const story: Meta<AppearanceProviderProps> = {
  title: 'Service/AppearanceProvider',
  component: AppearanceProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
