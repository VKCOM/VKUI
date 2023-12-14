import type { AppearanceType } from '../appearance';
import { Platform, type PlatformType } from '../platform';
import type {
  TokensClassNames,
  TokensClassNamesByAppearances,
  TokensClassNamesByPlatforms,
} from './types';

export const isTokensClassNamesForPlatforms = (
  tokensClassNames: TokensClassNames,
): tokensClassNames is TokensClassNamesByPlatforms =>
  Platform.ANDROID in tokensClassNames ||
  Platform.IOS in tokensClassNames ||
  Platform.VKCOM in tokensClassNames;

export const getTokenClassNameByAppearance = (
  appearance: AppearanceType,
  tokensClassNames?: TokensClassNamesByAppearances,
) => (tokensClassNames ? tokensClassNames[appearance] : undefined);

export const getAppearanceTokenClassNameByPlatform = (
  platform: PlatformType,
  tokensClassNames?: TokensClassNamesByPlatforms,
) => (tokensClassNames ? tokensClassNames[platform] : undefined);
