import { type ReactNode } from 'react';

export const SeparatorDecorator: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      Before Separator
      {children}
      After Separator
    </div>
  );
};
