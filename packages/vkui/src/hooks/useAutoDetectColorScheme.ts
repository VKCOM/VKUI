import { ColorScheme, type ColorSchemeType } from '../lib/colorScheme';
import { useMediaQueryMatches } from './useMediaQueryMatch';

/**
 * @private
 */
export const useAutoDetectColorScheme = (colorSchemeProp?: ColorSchemeType): ColorSchemeType => {
  const isDark = useMediaQueryMatches('(prefers-color-scheme: dark)');

  if (colorSchemeProp) {
    return colorSchemeProp;
  }

  return isDark ? ColorScheme.DARK : ColorScheme.LIGHT;
};
