import * as React from 'react';
import { useGlobals } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { ButtonIcon } from '@storybook/icons';
import { PARAM_KEY } from './constants';

export const HasPointer = () => {
  const [globals, updateGlobals] = useGlobals();
  const hasPointer = globals[PARAM_KEY];

  const toggleHasPointer = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: !hasPointer });
  }, [updateGlobals, hasPointer]);

  return (
    <IconButton active={hasPointer} key="pointer" onClick={toggleHasPointer}>
      <ButtonIcon />
      &nbsp;
      {`${hasPointer ? '' : 'no '}pointer`}
    </IconButton>
  );
};
