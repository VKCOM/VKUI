import React from 'react';
import { type ColorSchemeType, Platform, type PlatformType } from '@vkontakte/vkui';
import { getDefaultByThemesPresets } from './vkuiThemes/helpers';
import type { ColorSchemeOptionProps } from './vkuiThemes/types';

const { themeName, colorScheme, colorSchemeOptions } = getDefaultByThemesPresets();

export interface PlaygroundContextStateProps {
  platform: PlatformType;
  colorScheme: ColorSchemeType;
  themeName: string;
  colorSchemeOptions: [ColorSchemeOptionProps, ColorSchemeOptionProps];
}

export interface PlaygroundContextProps extends PlaygroundContextStateProps {
  isLoading: boolean;
  setContext: (data: Partial<PlaygroundContextStateProps>) => Promise<void>;
}

export let initialState: PlaygroundContextStateProps = {
  platform: Platform.ANDROID,
  themeName,
  colorScheme,
  colorSchemeOptions,
};

export const PlaygroundContext = React.createContext<PlaygroundContextProps>({
  ...initialState,
  isLoading: false,
  setContext: () => Promise.resolve(),
});

export const usePlaygroundContext = (): PlaygroundContextProps =>
  React.useContext(PlaygroundContext);
