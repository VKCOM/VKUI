import React from 'react';

export function useUnmountCleanup(cleanup: VoidFunction) {
  const cleanupRef = React.useRef(cleanup);
  React.useEffect(() => {
    cleanupRef.current = cleanup;
  });
  React.useEffect(() => () => cleanupRef.current(), []);
}
