import * as React from 'react';
import { useGlobals } from 'storybook/manager-api';
import { ToggleButton } from 'storybook/internal/components';
import { BrowserIcon } from '@storybook/icons';
import { PARAM_KEY } from './constants';

export const HasCustomPanelHeaderAfter = () => {
  const [globals, updateGlobals] = useGlobals();
  const hasCustomPanelHeaderAfter = globals[PARAM_KEY];

  const toggle = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: !hasCustomPanelHeaderAfter });
  }, [updateGlobals, hasCustomPanelHeaderAfter]);

  if (hasCustomPanelHeaderAfter === undefined) {
    return null;
  }

  return (
    <ToggleButton
      key="customPanelHeaderAfter"
      pressed={hasCustomPanelHeaderAfter}
      size="small"
      variant="ghost"
      ariaLabel={`hasCustomPanelHeaderAfter property is turned ${hasCustomPanelHeaderAfter ? 'on' : 'off'}`}
      onClick={toggle}
    >
      <BrowserIcon />
      &nbsp;hasCustomPanelHeaderAfter
    </ToggleButton>
  );
};
