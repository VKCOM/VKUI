import * as React from 'react';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

interface TokensInfo {
  isNewTokensAvailable: boolean;
  tokensTheme: string;
}

export const useTokensInfo = (): TokensInfo => {
  const tokens = React.useContext(ConfigProviderContext).tokensTheme;

  return {
    isNewTokensAvailable: tokens !== '',
    tokensTheme: tokens,
  };
};
