import * as React from 'react';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { BrowserIcon } from '@storybook/icons';
import { PARAM_KEY } from './constants';

export const HasCustomPanelHeaderAfter = () => {
  const [globals, updateGlobals] = useGlobals();
  const active = globals[PARAM_KEY];

  const toggle = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: !active });
  }, [updateGlobals, active]);

  return (
    <IconButton active={active} key="customPanelHeaderAfter" onClick={toggle}>
      <BrowserIcon />
      &nbsp; hasCustomPanelHeaderAfter
    </IconButton>
  );
};
