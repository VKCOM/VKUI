import React, { FC, HTMLAttributes } from 'react';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  targetNode?: Element;
}

export const Dropdown: FC<DropdownProps> = ({ targetNode, children }: DropdownProps) => {
  const [ref, setRef] = React.useState(null);
  const { styles } = usePopper(targetNode, ref);

  return (
    <AppRootPortal vkuiClass="DropdownPortal">
      <div vkuiClass="Dropdown" ref={setRef} style={styles.popper}>
        {children}
      </div>
    </AppRootPortal>
  );
};
