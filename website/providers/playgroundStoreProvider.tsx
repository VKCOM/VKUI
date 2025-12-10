'use client';

import * as React from 'react';
import { useStore } from 'zustand';
import {
  getDefaultByThemesPresets,
  loadTheme,
} from '@/components/mdx/Playground/vkuiThemes/helpers';
import { createPlaygroundStore, type PlaygroundStore } from '@/stores/playgroundStore';

export type PlaygroundStoreApi = ReturnType<typeof createPlaygroundStore>;

export const PlaygroundStoreContext = React.createContext<PlaygroundStoreApi | undefined>(
  undefined,
);

export interface PlaygroundStoreProviderProps {
  children: React.ReactNode;
}

export const PlaygroundStoreProvider = ({ children }: PlaygroundStoreProviderProps) => {
  const [store] = React.useState<PlaygroundStoreApi>(() => createPlaygroundStore());

  React.useLayoutEffect(() => {
    const { themeName, colorSchemeOptions, updatePlaygroundLoading, updateThemeData } =
      store.getState();

    updatePlaygroundLoading(true);

    async function processTheme() {
      try {
        await loadTheme(themeName, colorSchemeOptions);
      } catch (error) {
        const { themeName: defaultThemeName, colorSchemeOptions: defaultColorSchemeOptions } =
          getDefaultByThemesPresets('vkBase');
        updateThemeData(defaultThemeName, defaultColorSchemeOptions);
      } finally {
        updatePlaygroundLoading(false);
      }
    }

    void processTheme();
  }, []);

  return (
    <PlaygroundStoreContext.Provider value={store}>{children}</PlaygroundStoreContext.Provider>
  );
};

export const usePlaygroundStore = <T,>(selector: (store: PlaygroundStore) => T): T => {
  const playgroundStoreContext = React.useContext(PlaygroundStoreContext);

  if (!playgroundStoreContext) {
    throw new Error(`usePlaygroundStore must be used within PlaygroundStoreProvider`);
  }

  return useStore(playgroundStoreContext, selector);
};
