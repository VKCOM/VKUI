import * as React from 'react';
import { useGlobals } from '@storybook/api';
import { IconButton, Icons } from '@storybook/components';
import { PARAM_KEY } from './constants';

export const HasPointer = () => {
  const [globals, updateGlobals] = useGlobals();
  const hasPointer = globals[PARAM_KEY];

  const toggleHasPointer = React.useCallback(() => {
    updateGlobals({ [PARAM_KEY]: !hasPointer });
  }, [updateGlobals, hasPointer]);

  return (
    <IconButton active={hasPointer} key="pointer" onClick={toggleHasPointer}>
      <Icons icon="button" />
      &nbsp;
      {`${hasPointer ? '' : 'no '}pointer`}
    </IconButton>
  );
};
