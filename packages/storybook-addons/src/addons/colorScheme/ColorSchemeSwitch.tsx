import * as React from 'react';
import { MoonIcon, SunIcon } from '@storybook/icons';
import { Select } from 'storybook/internal/components';
import { useGlobals, useParameter } from 'storybook/manager-api';
import { getColorSchemeConfig } from './config';

export const ColorSchemeSwitch = () => {
  const [globals, updateGlobals] = useGlobals();
  const { parameterName } = getColorSchemeConfig();
  const localColorScheme = useParameter(parameterName);
  const colorScheme = localColorScheme || globals[parameterName];

  const handleChange: React.ComponentProps<typeof Select>['onChange'] = React.useCallback(
    (selected) => {
      updateGlobals({ [parameterName]: selected[0] });
    },
    [updateGlobals, parameterName],
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
