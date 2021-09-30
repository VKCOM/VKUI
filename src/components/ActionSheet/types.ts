import * as React from 'react';

export type PopupDirection = 'top' | 'bottom' | ((elRef: React.RefObject<HTMLDivElement>) => 'top' | 'bottom');
export type ToggleRef = Element | null | undefined | React.RefObject<Element>;

export interface SharedDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  closing: boolean;
  onClose: VoidFunction;
  toggleRef: ToggleRef;
  popupDirection: PopupDirection;
}
