import type { ColorSchemeType, PlatformType } from '@vkontakte/vkui';

export interface ColorSchemeOptionProps {
  value: 'light' | 'dark';
  title: string;
  url: string;
  disabled: boolean;
}

export interface ThemeDefinitionProps {
  themeName: string;
  colorScheme: ColorSchemeType;
  colorSchemeOptions: [ColorSchemeOptionProps, ColorSchemeOptionProps];
}

export interface TokensFilesProps {
  name: string;
  type: 'directory' | 'file';
  files: TokensFilesProps[];
}

export interface TokensInfoProps {
  name: string;
  version: string;
  type: 'npm';
  files: TokensFilesProps[];
}

export interface ThemeValues {
  colorSchemeOptions: [ColorSchemeOptionProps, ColorSchemeOptionProps];
  baseForPlatform: PlatformType | null;
}
