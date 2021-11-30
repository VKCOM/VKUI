import * as React from 'react';

interface TokensInfo {
  isNewTokensAvailable: boolean;
  newTokensTheme: string;
}

export function useTokensInfo(ref: React.MutableRefObject<HTMLElement>): TokensInfo {
  const [isNewTokensAvailable, setNewTokensAvailability] = React.useState<boolean>(false);
  const [newTokensTheme, setNewTokensTheme] = React.useState<string>('');

  React.useEffect(() => {
    const cssThemeVar = getComputedStyle(ref.current).getPropertyValue('--theme');
    if (cssThemeVar !== '') {
      setNewTokensAvailability(true);
      setNewTokensTheme(cssThemeVar);
    }
  }, [ref]);

  return {
    isNewTokensAvailable,
    newTokensTheme,
  };
}
