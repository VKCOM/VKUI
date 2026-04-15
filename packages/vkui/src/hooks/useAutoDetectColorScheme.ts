import { ColorScheme, type ColorSchemeType } from '../lib/colorScheme';
import { useMediaQueryMatches } from './useMediaQueryMatch';

/**
 * @private
 */
export const useAutoDetectColorScheme = (colorSchemeProp?: ColorSchemeType): ColorSchemeType => {
  const isDark = useMediaQueryMatches('(prefers-color-scheme: dark)', {
    disable: colorSchemeProp !== undefined,
  });

  if (colorSchemeProp) {
    return colorSchemeProp;
  }

  return isDark ? ColorScheme.DARK : ColorScheme.LIGHT;
};
