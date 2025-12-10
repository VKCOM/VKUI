import { createContext, useContext } from 'react';

export const SelectionControlContext = createContext<{ noPadding: boolean }>({
  noPadding: false,
});

export const useSelectionControlContext = () => useContext(SelectionControlContext);
