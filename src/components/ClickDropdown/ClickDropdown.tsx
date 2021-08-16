import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDOM } from '../../lib/dom';
import { Dropdown, DropdownCommonProps } from '../Dropdown/Dropdown';
import { useExternRef } from '../../hooks/useExternRef';

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

export interface ClickDropdownProps extends DropdownCommonProps {
  /**
   * Содержимое `ClickDropdown`
   */
  content?: ReactNode;
  shown?: boolean;
  onShownChange?: (shown: boolean) => void;
}

export const ClickDropdown: FC<ClickDropdownProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown,
  mode = 'card',
  offsetDistance = 8,
  ...restProps
}: ClickDropdownProps) => {
  const [computedShown, setComputedShown] = useState(shown);
  const [dropdownNode, setDropdownNode] = useState(null);
  const [targetNode, setTargetNode] = useState(null);

  const { document } = useDOM();

  const patchedDropdownRef = useExternRef(setDropdownNode, getRef);

  const childRef = isValidElement(children) && (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTargetNode, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  const onDocumentClick = useCallback((e) => {
    if (e.target !== targetNode && !targetNode.contains(e.target) && e.target !== dropdownNode && !dropdownNode.contains(e.target)) {
      if (typeof shown !== 'boolean') {
        setComputedShown(false);
      }
      typeof onShownChange === 'function' && onShownChange(false);
    }
  }, [targetNode, dropdownNode, onShownChange, shown]);

  useEffect(() => {
    if (typeof shown === 'boolean') {
      setComputedShown(shown);
    }
  }, [shown]);

  useEffect(() => {
    dropdownNode && document.addEventListener('pointerup', onDocumentClick);
    return () => {
      dropdownNode && document.removeEventListener('pointerup', onDocumentClick);
    };
  }, [targetNode, dropdownNode]);

  const onTargetClick = useCallback(() => {
    if (typeof shown !== 'boolean') {
      setComputedShown(!computedShown);
    }
    typeof onShownChange === 'function' && onShownChange(!computedShown);
  }, [targetNode, shown, computedShown]);

  useEffect(() => {
    targetNode && targetNode.addEventListener('pointerup', onTargetClick);
    return () => {
      targetNode && targetNode.removeEventListener('pointerup', onTargetClick);
    };
  }, [targetNode, computedShown]);

  return (
    <React.Fragment>
      {child}
      {computedShown &&
        <Dropdown
          {...restProps}
          mode={mode}
          offsetDistance={offsetDistance}
          targetNode={targetNode}
          getRef={patchedDropdownRef}
        >
          {content}
        </Dropdown>
      }
    </React.Fragment>
  );
};
