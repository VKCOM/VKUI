import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { HasRootRef } from '../../types';

interface FocusTrapProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  Component?: React.ElementType;
  onClose?: (modalId?: string) => void;
};

export const FocusTrap: React.FC<FocusTrapProps> = ({
  Component = 'div',
  getRootRef,
  children,
  onClose,
  ...restProps
}) => {
  const focusTrapRef = useExternRef(getRootRef);

  useFocusTrap(focusTrapRef, onClose);

  return (
    <Component ref={focusTrapRef} {...restProps}>
      {children}
    </Component>
  );
};
