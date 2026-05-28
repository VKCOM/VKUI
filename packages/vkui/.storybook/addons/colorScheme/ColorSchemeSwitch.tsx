import * as React from 'react';
import { SunIcon, MoonIcon } from '@storybook/icons';
import { useGlobals } from 'storybook/manager-api';
import { Select } from 'storybook/internal/components';
import { PARAM_KEY } from './constants';

export const ColorSchemeSwitch = () => {
  const [globals, updateGlobals] = useGlobals();
  const selectedOption = globals[PARAM_KEY];

  const handleChange: React.ComponentProps<typeof Select>['onChange'] = React.useCallback(
    (selected) => {
      updateGlobals({ [PARAM_KEY]: selected[0] });
    },
    [updateGlobals],
  );

  if (selectedOption === undefined) {
    return null;
  }

  return (
    <Select
      key="theme"
      size="small"
      ariaLabel="Choose theme"
      icon={selectedOption === 'dark' ? <MoonIcon /> : <SunIcon />}
      defaultOptions={selectedOption}
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
