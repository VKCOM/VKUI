import React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

interface FixedLayoutContextInterface {
  scrollCompensation?: number;
};
export const FixedLayoutContext = React.createContext<FixedLayoutContextInterface>({});

export const FixedLayoutContainer: React.FC<FixedLayoutContextInterface> = ({ children, scrollCompensation }) => {
  const contextValue = useObjectMemo({ scrollCompensation });
  return (
    <FixedLayoutContext.Provider value={contextValue}>
      {children}
    </FixedLayoutContext.Provider>
  );
};
