import { useCallback, useEffect, useState } from 'react';
import { useDOM } from '../../lib/dom';
import { Dropdown, DropdownProps } from '../Dropdown/Dropdown';

export const ClickDropdown = (props: DropdownProps) => {
  const [shown, setShown] = useState(false);
  const { targetNode } = props;

  const { document } = useDOM();

  const onDocumentClick = useCallback((e) => {
    if (e.target !== targetNode && !targetNode.contains(e.target)) {
      setShown(false);
    }
  }, [targetNode]);

  const onTargetClick = useCallback(() => {
    setShown(true);
  }, []);

  useEffect(() => {
    document.addEventListener('pointerup', onDocumentClick);
    return () => {
      document.removeEventListener('pointerup', onDocumentClick);
    };
  }, [targetNode]);

  useEffect(() => {
    targetNode && targetNode.addEventListener('pointerup', onTargetClick);
    return () => {
      targetNode && targetNode.removeEventListener('pointerup', onTargetClick);
    };
  }, [targetNode]);

  return shown ? <Dropdown {...props} /> : null;
};
