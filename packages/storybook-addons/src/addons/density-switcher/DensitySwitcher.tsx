import * as React from 'react';
import { Select } from 'storybook/internal/components';
import { useGlobals } from 'storybook/manager-api';
import { getDensitySwitcherConfig } from './config';

export const DensitySwitcher = () => {
  const [globals, updateGlobals] = useGlobals();
  const { parameterName } = getDensitySwitcherConfig();
  const density = globals[parameterName];

  const handleChange: React.ComponentProps<typeof Select>['onChange'] = React.useCallback(
    (selected) => {
      updateGlobals({ [parameterName]: selected[0] });
    },
    [updateGlobals, parameterName],
  );

  if (!density) {
    return null;
  }

  return (
    <Select
      key="theme"
      size="small"
      ariaLabel="Choose density"
      defaultOptions={density}
      options={[
        {
          title: `Density: regular`,
          children: 'regular',
          value: 'regular',
        },
        {
          title: `Density: compact`,
          children: 'compact',
          value: 'compact',
        },
        {
          title: `Density: auto`,
          children: 'auto',
          value: 'auto',
        },
      ]}
      onChange={handleChange}
    />
  );
};
