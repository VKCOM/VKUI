import * as React from "react";

let id = 0;

// TODO: Remove after React 18
function useIncrementingCounterID(): string {
  const [state] = React.useState(() => id++);

  return `:r${state}:`;
}

export const useId: () => string = useIncrementingCounterID;
