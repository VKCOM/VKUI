import * as React from 'react';
import { ConfigProviderContext } from '../../components/ConfigProvider/ConfigProviderContext';
import { type ColorSchemeType, DEFAULT_COLOR_SCHEME } from '../colorScheme';
import { Platform, type PlatformType } from '../platform';
import { DEFAULT_TOKENS_CLASS_NAMES } from './constants';
import type {
  TokensClassNames,
  TokensClassNamesByAppearances,
  TokensClassNamesByPlatforms,
} from './types';

const isTokensClassNamesForPlatforms = (
  tokensClassNames: TokensClassNames,
): tokensClassNames is TokensClassNamesByPlatforms =>
  Platform.ANDROID in tokensClassNames ||
  Platform.IOS in tokensClassNames ||
  Platform.VKCOM in tokensClassNames;

const getTokenClassNameByAppearance = (
  colorScheme: ColorSchemeType,
  tokensClassNames?: TokensClassNamesByAppearances,
) => (tokensClassNames ? tokensClassNames[colorScheme] : undefined);

const getAppearanceTokenClassNameByPlatform = (
  platform: PlatformType,
  tokensClassNames?: TokensClassNamesByPlatforms,
) => (tokensClassNames ? tokensClassNames[platform] : undefined);

/**
 * @private
 */
export const useTokensClassName = (): string => {
  const {
    platform,
    colorScheme = DEFAULT_COLOR_SCHEME,
    tokensClassNames,
  } = React.useContext(ConfigProviderContext);

  const colorSchemeClassName = isTokensClassNamesForPlatforms(tokensClassNames)
    ? getAppearanceTokenClassNameByPlatform(platform, tokensClassNames)
    : tokensClassNames;

  const tokensClassName = getTokenClassNameByAppearance(colorScheme, colorSchemeClassName);

  return tokensClassName ? tokensClassName : DEFAULT_TOKENS_CLASS_NAMES[platform][colorScheme];
};
