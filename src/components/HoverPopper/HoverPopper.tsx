import * as React from 'react';
import { Popper, PopperCommonProps } from '../Popper/Popper';
import { useEventListener } from '../../hooks/useEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';

export interface HoverPopperProps extends PopperCommonProps {
  /**
   * Содержимое `HoverPopper`
   */
  content?: React.ReactNode;
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

export const HoverPopper: React.FC<HoverPopperProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown,
  showDelay,
  hideDelay = 150,
  ...restProps
}: HoverPopperProps) => {
  const [computedShown, setComputedShown] = React.useState(shown);

  const showTimeout = useTimeout(() => {
    if (typeof shown !== 'boolean') {
      setComputedShown(true);
    }
    typeof onShownChange === 'function' && onShownChange(true);
  }, showDelay);

  const hideTimeout = useTimeout(() => {
    if (typeof shown !== 'boolean') {
      setComputedShown(false);
    }
    typeof onShownChange === 'function' && onShownChange(false);
  }, hideDelay);

  const [childRef, child] = usePatchChildrenRef(children);

  React.useEffect(() => {
    if (typeof shown === 'boolean') {
      setComputedShown(shown);
    }
  }, [shown]);

  const onTargetEnter = () => {
    hideTimeout.clear();
    showTimeout.set();
  };

  const onTargetLeave = () => {
    showTimeout.clear();
    hideTimeout.set();
  };

  const targetEnterListener = useEventListener('mouseenter', onTargetEnter);
  const targetLeaveListener = useEventListener('mouseleave', onTargetLeave);

  React.useEffect(() => {
    targetEnterListener.add(childRef.current);
    targetLeaveListener.add(childRef.current);
  }, []);

  return (
    <React.Fragment>
      {child}
      {computedShown &&
        <Popper
          {...restProps}
          onMouseOver={() => {
            hideTimeout.clear();
          }}
          onMouseOut={onTargetLeave}
          getRef={getRef}
          targetRef={childRef}
        >
          {content}
        </Popper>
      }
    </React.Fragment>
  );
};
