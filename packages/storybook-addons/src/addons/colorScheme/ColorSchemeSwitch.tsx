import * as React from 'react';
import { MoonIcon, SunIcon } from '@storybook/icons';
import { Select } from 'storybook/internal/components';
import { useGlobals, useParameter } from 'storybook/manager-api';
import { PARAM_KEY } from './constants';

const useLocalColorScheme = () => {
  const localColorScheme = useParameter('colorScheme');
  // Для vkcom, так как там используется appearance
  const localAppearance = useParameter('appearance');
  return localColorScheme || localAppearance;
};

export const ColorSchemeSwitch = () => {
  const [globals, updateGlobals] = useGlobals();
  const localColorScheme = useLocalColorScheme();
  const colorScheme = localColorScheme || globals[PARAM_KEY];

  const handleChange: React.ComponentProps<typeof Select>['onChange'] = React.useCallback(
    (selected) => {
      updateGlobals({ [PARAM_KEY]: selected[0] });
    },
    [updateGlobals],
  );

  if (!colorScheme) {
    return null;
  }

  return (
    <Select
      key="theme"
      size="small"
      ariaLabel="Choose theme"
      disabled={Boolean(localColorScheme)}
      icon={colorScheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      defaultOptions={colorScheme}
      options={[
        {
          icon: <SunIcon />,
          title: 'light',
          value: 'light',
        },
        {
          icon: <MoonIcon />,
          title: 'dark',
          value: 'dark',
        },
      ]}
      onChange={handleChange}
    />
  );
};
