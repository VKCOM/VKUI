import React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

interface FixedLayoutContextInterface {
  scrollCompensation?: number;
  portalEl?: HTMLElement;
  itemClass?: string;
};
export const FixedLayoutContext = React.createContext<FixedLayoutContextInterface>({});

export const FixedLayoutContainer: React.FC<FixedLayoutContextInterface> = ({ children, ...ops }) => {
  const [portalEl, setPortalEl] = React.useState<HTMLElement>();
  const contextValue = useObjectMemo({ portalEl, ...ops });
  return (
    <FixedLayoutContext.Provider value={contextValue}>
      {children}
      <div ref={setPortalEl} />
    </FixedLayoutContext.Provider>
  );
};
