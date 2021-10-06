import React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

interface FixedLayoutContextInterface {
  scrollCompensation?: number;
  portalEl?: HTMLElement;
};
export const FixedLayoutContext = React.createContext<FixedLayoutContextInterface>({});

export const FixedLayoutContainer: React.FC<FixedLayoutContextInterface & { portalClass: string }> = ({
  children,
  scrollCompensation,
  portalClass,
}) => {
  const [portalEl, setPortalEl] = React.useState<HTMLElement>();
  const contextValue = useObjectMemo({ scrollCompensation, portalEl });
  return (
    <FixedLayoutContext.Provider value={contextValue}>
      {children}
      <div ref={setPortalEl} style={{ position: 'relative', zIndex: 1 }} vkuiClass={portalClass} />
    </FixedLayoutContext.Provider>
  );
};
