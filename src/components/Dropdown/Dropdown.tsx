import React, { FC, HTMLAttributes, useCallback, useEffect } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { HasRef } from '../../types';
import { setRef } from '../../lib/utils';

export interface DropdownProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  targetNode?: Element;
  placement?: Placement;
  portal?: boolean;
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export const Dropdown: FC<DropdownProps> = ({ targetNode, children, getRef, placement = 'bottom-start', portal = true, onPlacementChange, ...restProps }: DropdownProps) => {
  const [dropdownNode, setDropdownNode] = React.useState(null);

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setDropdownNode(el);
  }, []);

  const { styles, state, forceUpdate } = usePopper(targetNode, dropdownNode, { placement });

  const resolvedPlacement = state?.placement;

  useEffect(() => {
    if (dropdownNode && forceUpdate) {
      forceUpdate();
    }
  }, [dropdownNode, forceUpdate]);

  useEffect(() => {
    if (resolvedPlacement) {
      onPlacementChange && onPlacementChange({ placement: resolvedPlacement });
    }
  }, [resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      vkuiClass="Dropdown"
      ref={setExternalRef}
      style={styles.popper}
    >
      {children}
    </div>
  );

  return (
    portal ? <AppRootPortal vkuiClass="DropdownPortal">{dropdown}</AppRootPortal> : dropdown
  );
};
