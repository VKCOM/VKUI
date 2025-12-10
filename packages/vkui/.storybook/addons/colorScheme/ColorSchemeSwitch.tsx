import * as React from 'react';
import { Icon16Moon, Icon16Sun } from '@vkontakte/icons';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { PARAM_KEY } from './constants';

export const ColorSchemeSwitch = () => {
  const [globals, updateGlobals] = useGlobals();
  const isDarkTheme = globals[PARAM_KEY] === 'dark';

  const toggleTheme = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: isDarkTheme ? 'light' : 'dark' });
  }, [isDarkTheme, updateGlobals]);

  const title = isDarkTheme ? 'Turn the light theme' : 'Turn the dark theme';

  return (
    <IconButton active key="theme" onClick={toggleTheme} title={title}>
      {isDarkTheme ? <Icon16Sun /> : <Icon16Moon />}
      &nbsp;
      {globals[PARAM_KEY]}
    </IconButton>
  );
};
