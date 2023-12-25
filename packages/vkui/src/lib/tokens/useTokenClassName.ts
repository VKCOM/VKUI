import * as React from 'react';
import { ConfigProviderContext } from '../../components/ConfigProvider/ConfigProviderContext';
import { type AppearanceType, DEFAULT_APPEARANCE } from '../appearance';
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
  appearance: AppearanceType,
  tokensClassNames?: TokensClassNamesByAppearances,
) => (tokensClassNames ? tokensClassNames[appearance] : undefined);

const getAppearanceTokenClassNameByPlatform = (
  platform: PlatformType,
  tokensClassNames?: TokensClassNamesByPlatforms,
) => (tokensClassNames ? tokensClassNames[platform] : undefined);

/**
 * @private
 */
export const useTokensClassName = () => {
  const {
    platform,
    appearance = DEFAULT_APPEARANCE,
    tokensClassNames,
  } = React.useContext(ConfigProviderContext);

  const appearanceSchemeClassName = isTokensClassNamesForPlatforms(tokensClassNames)
    ? getAppearanceTokenClassNameByPlatform(platform, tokensClassNames)
    : tokensClassNames;

  const tokensClassName = getTokenClassNameByAppearance(appearance, appearanceSchemeClassName);

  return tokensClassName ? tokensClassName : DEFAULT_TOKENS_CLASS_NAMES[platform][appearance];
};
