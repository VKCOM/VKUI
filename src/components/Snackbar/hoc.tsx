import React, { createContext, ComponentType, useMemo, useState, useContext } from 'react';
import { createPortal } from 'react-dom';

export const SnackbarContext = createContext<{
  isolated?: boolean;
  node?: HTMLElement;
}>({ isolated: true });

export const withSnackbarContainer = <T extends ComponentType<any>>(Cmp: T) => ((props: any) => {
  const [snackbarNode, setSnackbarNode] = useState<HTMLElement>(null);
  const contextValue = useMemo(() => ({ node: snackbarNode }), [snackbarNode]);
  const snackbarContainer = <div ref={setSnackbarNode} />;
  return (
    <SnackbarContext.Provider value={contextValue}>
      <Cmp {...props} snackbar={snackbarContainer} />
    </SnackbarContext.Provider>
  );
}) as T;

export const withSnackbarPortal = <T extends ComponentType<any>>(Cmp: T) => ((props: any) => {
  const { isolated, node } = useContext(SnackbarContext);

  const jsx = <Cmp {...props} />;
  if (isolated) {
    return jsx;
  }
  if (!node) {
    return null;
  }
  return createPortal(jsx, node);
}) as T;
