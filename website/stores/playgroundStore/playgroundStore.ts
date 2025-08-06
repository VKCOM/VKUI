import { type ColorSchemeType, Platform, type PlatformType } from '@vkontakte/vkui';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { getDefaultByThemesPresets } from '@/components/mdx/Playground/vkuiThemes/helpers';
import type { ColorSchemeOptionProps } from '@/components/mdx/Playground/vkuiThemes/types';

const { themeName, colorSchemeOptions } = getDefaultByThemesPresets();

export interface PlaygroundState {
  platform: PlatformType;
  colorScheme: ColorSchemeType | 'inherit';
  themeName: string;
  colorSchemeOptions: [ColorSchemeOptionProps, ColorSchemeOptionProps];
  playgroundLoading: boolean;
}

export interface PlaygroundActions {
  updatePlatform: (platform: PlaygroundState['platform']) => void;
  updateColorScheme: (colorScheme: PlaygroundState['colorScheme']) => void;
  updatePlaygroundLoading: (playgroundLoading: PlaygroundState['playgroundLoading']) => void;
  updateThemeData: (
    themeName: PlaygroundState['themeName'],
    colorSchemeOptions: PlaygroundState['colorSchemeOptions'],
  ) => void;
}

export type PlaygroundStore = PlaygroundState & PlaygroundActions;

export const defaultInitState: PlaygroundState = {
  platform: Platform.ANDROID,
  themeName,
  colorScheme: 'inherit',
  colorSchemeOptions,
  playgroundLoading: false,
};

export const createPlaygroundStore = (initState: PlaygroundState = defaultInitState) => {
  return createStore<PlaygroundStore>()(
    persist(
      (set) => ({
        ...initState,
        updatePlatform: (platform) => set({ platform }),
        updateColorScheme: (colorScheme) => set({ colorScheme }),
        updatePlaygroundLoading: (playgroundLoading) => set({ playgroundLoading }),
        updateThemeData: (themeName, colorSchemeOptions) => set({ themeName, colorSchemeOptions }),
      }),
      {
        name: 'vkui:docs:state',
        partialize: (state) => {
          const { playgroundLoading, ...restState } = state;
          return restState;
        },
      },
    ),
  );
};
