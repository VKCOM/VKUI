import { useCallback, useEffect, useState } from 'react';
import { useDOM } from '../../lib/dom';
import { Dropdown, DropdownProps } from '../Dropdown/Dropdown';
import { setRef } from '../../lib/utils';

export const ClickDropdown = (props: DropdownProps) => {
  const [shown, setShown] = useState(false);
  const [dropdownNode, setDropdownNode] = useState(null);
  const { targetNode, getRef } = props;

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setDropdownNode(el);
  }, [getRef]);

  const { document } = useDOM();

  const onDocumentClick = useCallback((e) => {
    if (
      e.target !== targetNode &&
      !targetNode.contains(e.target) &&
      e.target !== dropdownNode &&
      !dropdownNode.contains(e.target)
    ) {
      setShown(false);
    }
  }, [targetNode, dropdownNode]);

  useEffect(() => {
    dropdownNode && document.addEventListener('pointerup', onDocumentClick);
    return () => {
      dropdownNode && document.removeEventListener('pointerup', onDocumentClick);
    };
  }, [targetNode, dropdownNode]);

  const onTargetClick = useCallback(() => {
    setShown(!shown);
  }, [targetNode, shown]);

  useEffect(() => {
    targetNode && targetNode.addEventListener('pointerup', onTargetClick);
    return () => {
      targetNode && targetNode.removeEventListener('pointerup', onTargetClick);
    };
  }, [targetNode, shown]);

  return shown ? <Dropdown {...props} getRef={setExternalRef} /> : null;
};
