import * as React from 'react';
import { Dropdown, DropdownCommonProps } from '../Dropdown/Dropdown';
import { useEventListener } from '../../hooks/useEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';

export interface HoverDropdownProps extends DropdownCommonProps {
  /**
   * Содержимое `HoverDropdown`
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

export const HoverDropdown: React.FC<HoverDropdownProps> = ({
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
        <Dropdown
          {...restProps}
          onMouseOver={hideTimeout.clear}
          onMouseOut={onTargetLeave}
          mode={mode}
          offsetDistance={offsetDistance}
          getRef={getRef}
          targetRef={childRef}
        >
          {content}
        </Dropdown>
      }
    </React.Fragment>
  );
};
