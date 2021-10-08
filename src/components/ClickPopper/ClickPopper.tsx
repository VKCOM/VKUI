import * as React from 'react';
import { useDOM } from '../../lib/dom';
import { Popper, PopperCommonProps } from '../Popper/Popper';
import { useExternRef } from '../../hooks/useExternRef';
import { useEventListener } from '../../hooks/useEventListener';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';

export interface ClickPopperProps extends PopperCommonProps {
  /**
   * Содержимое `ClickPopper`
   */
  content?: React.ReactNode;
  shown?: boolean;
  onShownChange?: (shown: boolean) => void;
}

export const ClickPopper: React.FC<ClickPopperProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown,
  ...restProps
}: ClickPopperProps) => {
  const [computedShown, setComputedShown] = React.useState(shown);
  const [dropdownNode, setPopperNode] = React.useState(null);

  const { document } = useDOM();

  const patchedPopperRef = useExternRef(setPopperNode, getRef);

  const [childRef, child] = usePatchChildrenRef(children);

  const onDocumentClick = (e: MouseEvent) => {
    if (dropdownNode && e.target !== childRef.current && !childRef.current.contains(e.target as Node) && e.target !== dropdownNode && !dropdownNode.contains(e.target)) {
      if (typeof shown !== 'boolean') {
        setComputedShown(false);
      }
      typeof onShownChange === 'function' && onShownChange(false);
    }
  };

  useGlobalEventListener(document, 'click', onDocumentClick);

  React.useEffect(() => {
    if (typeof shown === 'boolean') {
      setComputedShown(shown);
    }
  }, [shown]);

  const onTargetClick = React.useCallback(() => {
    if (typeof shown !== 'boolean') {
      setComputedShown(!computedShown);
    }
    typeof onShownChange === 'function' && onShownChange(!computedShown);
  }, [onShownChange, shown, computedShown]);

  const targetClickEvent = useEventListener('pointerup', onTargetClick);

  React.useEffect(() => {
    targetClickEvent.add(childRef.current);
  }, []);

  return (
    <React.Fragment>
      {child}
      {computedShown &&
        <Popper
          {...restProps}
          targetRef={childRef}
          getRef={patchedPopperRef}
        >
          {content}
        </Popper>
      }
    </React.Fragment>
  );
};
