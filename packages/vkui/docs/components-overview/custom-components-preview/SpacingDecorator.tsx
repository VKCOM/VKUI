import { type ReactNode } from 'react';

export const SpacingDecorator: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      Before Spacing
      {children}
      After Spacing
    </div>
  );
};
