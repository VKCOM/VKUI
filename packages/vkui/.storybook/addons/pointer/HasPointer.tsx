import * as React from 'react';
import { useGlobals } from 'storybook/manager-api';
import { ToggleButton } from 'storybook/internal/components';
import { ButtonIcon } from '@storybook/icons';
import { PARAM_KEY } from './constants';

export const HasPointer = () => {
  const [globals, updateGlobals] = useGlobals();
  const hasPointer = globals[PARAM_KEY];

  const toggleHasPointer = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: !hasPointer });
  }, [updateGlobals, hasPointer]);

  if (hasPointer === undefined) {
    return null;
  }

  return (
    <ToggleButton
      key="pointer"
      pressed={hasPointer}
      size="small"
      variant="ghost"
      ariaLabel={`hasPointer property is turned ${hasPointer ? 'off' : 'on'}`}
      onClick={toggleHasPointer}
    >
      <ButtonIcon />
      &nbsp;hasPointer
    </ToggleButton>
  );
};
