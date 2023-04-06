import * as React from 'react';
import { Icon16Moon, Icon16Sun } from '@vkontakte/icons';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { PARAM_KEY } from './constants';
import { Appearance } from '../../../src';

export const AppearanceSwitch = () => {
  const [globals, updateGlobals] = useGlobals();
  const isDarkTheme = globals[PARAM_KEY] === Appearance.DARK;

  const toggleTheme = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: isDarkTheme ? Appearance.LIGHT : Appearance.DARK });
  }, [isDarkTheme, updateGlobals]);

  const title = isDarkTheme ? 'Turn the light theme' : 'Turn the dark theme';

  return (
    <IconButton active key="theme" nonce={undefined} onClick={toggleTheme} title={title}>
      {isDarkTheme ? <Icon16Sun /> : <Icon16Moon />}
      &nbsp;
      {globals[PARAM_KEY]}
    </IconButton>
  );
};
