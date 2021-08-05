import React, { FC, HTMLAttributes, useCallback } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { HasRef } from '../../types';
import { setRef } from '../../lib/utils';

export interface DropdownProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  targetNode?: Element;
  placement?: Placement;
}

export const Dropdown: FC<DropdownProps> = ({ targetNode, children, getRef, placement = 'bottom-start' }: DropdownProps) => {
  const [dropdownNode, setDropdownNode] = React.useState(null);

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setDropdownNode(el);
  }, []);

  const { styles } = usePopper(targetNode, dropdownNode, { placement });

  return (
    <AppRootPortal vkuiClass="DropdownPortal">
      <div
        vkuiClass="Dropdown"
        ref={setExternalRef}
        style={styles.popper}
      >
        {children}
      </div>
    </AppRootPortal>
  );
};
