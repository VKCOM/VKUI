import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ColorSchemeProvider, type ColorSchemeProviderProps } from './ColorSchemeProvider';

const story: Meta<ColorSchemeProviderProps> = {
  title: 'Configuration/ColorSchemeProvider',
  component: ColorSchemeProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

export const Playground: StoryObj<ColorSchemeProviderProps> = {
  render: (args) => (
    <ColorSchemeProvider {...args}>
      <div
        style={{
          padding: 5,
          background: 'var(--vkui--color_background)',
          color: 'var(--vkui--color_text_primary)',
        }}
      >
        ColorSchemeProvider
      </div>
    </ColorSchemeProvider>
  ),
};
