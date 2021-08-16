import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Dropdown, DropdownCommonProps } from '../Dropdown/Dropdown';
import { useExternRef } from '../../hooks/useExternRef';

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

export interface HoverDropdownProps extends DropdownCommonProps {
  /**
   * Содержимое `HoverDropdown`
   */
  content?: ReactNode;
  shown?: boolean;
  onShownChange?: (shown: boolean) => void;
  /**
   * Количество миллисекунд, после которых произойдет показ дропдауна
   */
  showDelay?: number;
  /**
   * Количество миллисекунд, после которых произойдет скрытие дропдауна
   */
  hideDelay?: number;
}

export const HoverDropdown: FC<HoverDropdownProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown,
  showDelay,
  hideDelay = 150,
  mode = 'tooltip',
  offsetDistance = 8,
  ...restProps
}: HoverDropdownProps) => {
  const [computedShown, setComputedShown] = useState(shown);
  const [targetNode, setTargetNode] = useState<HTMLElement>(null);
  const showTimeout = useRef<ReturnType<typeof setTimeout>>();
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>();

  const childRef = isValidElement(children) && (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTargetNode, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  useEffect(() => {
    if (typeof shown === 'boolean') {
      setComputedShown(shown);
    }
  }, [shown]);

  const onTargetEnter = useCallback(() => {
    clearTimeout(showTimeout.current);
    clearTimeout(hideTimeout.current);
    showTimeout.current = setTimeout(() => {
      if (typeof shown !== 'boolean') {
        setComputedShown(true);
      }
      typeof onShownChange === 'function' && onShownChange(true);
    }, showDelay);
  }, [targetNode, shown, computedShown, showDelay]);

  const onTargetOut = useCallback(() => {
    clearTimeout(showTimeout.current);
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (typeof shown !== 'boolean') {
        setComputedShown(false);
      }
      typeof onShownChange === 'function' && onShownChange(false);
    }, hideDelay);
  }, [targetNode, shown, computedShown, hideDelay]);

  useEffect(() => {
    targetNode && targetNode.addEventListener('mouseenter', onTargetEnter);
    targetNode && targetNode.addEventListener('mouseleave', onTargetOut);
    return () => {
      targetNode && targetNode.removeEventListener('mouseenter', onTargetEnter);
      targetNode && targetNode.removeEventListener('mouseleave', onTargetOut);
    };
  }, [targetNode, computedShown]);

  return (
    <React.Fragment>
      {child}
      {computedShown &&
      <Dropdown
        {...restProps}
        onMouseOver={() => clearTimeout(hideTimeout.current)}
        onMouseOut={onTargetOut}
        mode={mode}
        offsetDistance={offsetDistance}
        getRef={getRef}
        targetNode={targetNode}
      >
        {content}
      </Dropdown>
      }
    </React.Fragment>
  );
};
