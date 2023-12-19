import * as React from 'react';
import { ConfigProviderContext } from '../../components/ConfigProvider/ConfigProviderContext';
import { DEFAULT_APPEARANCE } from '../appearance';
import { DEFAULT_TOKENS_CLASS_NAMES } from './constants';
import {
  getAppearanceTokenClassNameByPlatform,
  getTokenClassNameByAppearance,
  isTokensClassNamesForPlatforms,
} from './functions';

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
