import type { ColorSchemeType } from '@vkontakte/vkui';

export type ColorSchemeExtendedType = ColorSchemeType | 'system';

export interface UseColorSchemeProps {
  setColorScheme: React.Dispatch<React.SetStateAction<ColorSchemeExtendedType>>;
  colorScheme?: ColorSchemeExtendedType | undefined;
  resolvedColorScheme?: ColorSchemeType | undefined;
}

export interface ColorSchemeProviderProps extends React.PropsWithChildren {
  storageKey?: string | undefined;
  defaultColorScheme?: ColorSchemeExtendedType | undefined;
}
