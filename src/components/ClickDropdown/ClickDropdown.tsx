import React, {
  cloneElement,
  FC, HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDOM } from '../../lib/dom';
import { Dropdown, DropdownProps } from '../Dropdown/Dropdown';
import { useExternRef } from '../../hooks/useExternRef';

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

export interface ClickDropdownProps extends HTMLAttributes<HTMLElement> {
  content?: ReactNode;
  placement?: DropdownProps['placement'];
  getRef?: DropdownProps['getRef'];
}

export const ClickDropdown: FC<ClickDropdownProps> = (props: ClickDropdownProps) => {
  const [shown, setShown] = useState(false);
  const [dropdownNode, setDropdownNode] = useState(null);
  const [targetNode, setTargetNode] = useState(null);
  const { getRef, children } = props;

  const { document } = useDOM();

  const patchedDropdownRef = useExternRef(setDropdownNode, getRef);

  const childRef = isValidElement(children) && (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTargetNode, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

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

  return (
    <React.Fragment>
      {child}
      {shown && <Dropdown targetNode={targetNode} getRef={patchedDropdownRef}>{props.content}</Dropdown>}
    </React.Fragment>
  );
};
