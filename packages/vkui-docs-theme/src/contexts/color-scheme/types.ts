import type { ColorSchemeType } from '@vkontakte/vkui';

export type ColorSchemeExtendedType = ColorSchemeType | 'system';

export interface UseColorSchemeProps {
  setColorScheme: React.Dispatch<React.SetStateAction<ColorSchemeExtendedType>>;
  colorScheme?: ColorSchemeExtendedType;
  resolvedColorScheme?: ColorSchemeType;
}

export interface ColorSchemeProviderProps extends React.PropsWithChildren {
  storageKey?: string;
  defaultColorScheme?: ColorSchemeExtendedType;
}
