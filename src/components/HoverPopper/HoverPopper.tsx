import * as React from "react";
import { Popper, PopperCommonProps } from "../Popper/Popper";
import { useEventListener } from "../../hooks/useEventListener";
import { useTimeout } from "../../hooks/useTimeout";
import { usePatchChildrenRef } from "../../hooks/usePatchChildrenRef";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";

export interface HoverPopperProps extends PopperCommonProps {
  /**
   * Содержимое тултипа
   */
  content?: React.ReactNode;
  /**
   * Если передан, то тултип будет показан/скрыт в зависимости от значения свойства
   */
  shown?: boolean;
  /**
   * Вызывается при каждом изменении видимости тултипа
   */
  onShownChange?: (shown: boolean) => void;
  /**
   * Количество миллисекунд, после которых произойдет показ дропдауна
   */
  showDelay?: number;
  /**
   * Количество миллисекунд, после которых произойдет скрытие дропдауна
   */
  hideDelay?: number;
  /**
   * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элементу компонента
   */
  children?: React.ReactElement;
}

export const HoverPopper: React.FC<HoverPopperProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown: _shown,
  showDelay = 150,
  hideDelay = 150,
  ...restProps
}: HoverPopperProps) => {
  const [computedShown, setComputedShown] = React.useState(_shown || false);

  const shown = typeof _shown === "boolean" ? _shown : computedShown;

  const setShown = (value: boolean) => {
    if (typeof _shown !== "boolean") {
      setComputedShown(value);
    }
    typeof onShownChange === "function" && onShownChange(value);
  };

  const showTimeout = useTimeout(() => {
    setShown(true);
  }, showDelay);

  const hideTimeout = useTimeout(() => {
    setShown(false);
  }, hideDelay);

  const [childRef, child] = usePatchChildrenRef(children);

  const onTargetEnter = () => {
    hideTimeout.clear();
    showTimeout.set();
  };

  const onTargetLeave = () => {
    showTimeout.clear();
    hideTimeout.set();
  };

  const targetEnterListener = useEventListener("pointerenter", onTargetEnter);
  const targetLeaveListener = useEventListener("pointerleave", onTargetLeave);

  useIsomorphicLayoutEffect(() => {
    if (childRef.current) {
      targetEnterListener.add(childRef.current);
      targetLeaveListener.add(childRef.current);
    }
  }, []);

  return (
    <React.Fragment>
      {child}
      {shown && (
        <Popper
          {...restProps}
          onMouseOver={hideTimeout.clear}
          onMouseOut={onTargetLeave}
          getRef={getRef}
          targetRef={childRef}
        >
          {content}
        </Popper>
      )}
    </React.Fragment>
  );
};
