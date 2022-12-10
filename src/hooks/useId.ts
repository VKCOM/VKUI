import * as React from 'react';

// Workaround for https://github.com/webpack/webpack/issues/14814
// https://github.com/eps1lon/material-ui/blob/8d5f135b4d7a58253a99ab56dce4ac8de61f5dc1/packages/mui-utils/src/useId.ts#L21
const maybeReactUseId: undefined | (() => string) = (React as any)['useId'.toString()];

let id = 0;

// TODO: Remove after React 18
function useIncrementingCounterID(): string {
  const [state] = React.useState(() => id++);

  return `:r${state}:`;
}

export const useId: () => string = maybeReactUseId ?? useIncrementingCounterID;
