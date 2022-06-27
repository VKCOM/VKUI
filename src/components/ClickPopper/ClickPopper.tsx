import * as React from "react";
import { useDOM } from "../../lib/dom";
import { Popper, PopperCommonProps } from "../Popper/Popper";
import { useExternRef } from "../../hooks/useExternRef";
import { useEventListener } from "../../hooks/useEventListener";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { usePatchChildrenRef } from "../../hooks/usePatchChildrenRef";

export interface ClickPopperProps extends PopperCommonProps {
  /**
   * Содержимое `ClickPopper`
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
   * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элементу компонента
   */
  children?: React.ReactElement;
}

export const ClickPopper: React.FC<ClickPopperProps> = ({
  getRef,
  content,
  children,
  onShownChange,
  shown: _shown,
  ...restProps
}: ClickPopperProps) => {
  const [computedShown, setComputedShown] = React.useState(_shown || false);
  const [dropdownNode, setPopperNode] = React.useState<HTMLElement | null>(
    null
  );

  const shown = typeof _shown === "boolean" ? _shown : computedShown;

  const { document } = useDOM();

  const patchedPopperRef = useExternRef<HTMLDivElement>(setPopperNode, getRef);

  const [childRef, child] = usePatchChildrenRef(children);

  const setShown = (value: boolean) => {
    if (typeof _shown !== "boolean") {
      setComputedShown(value);
    }
    typeof onShownChange === "function" && onShownChange(value);
  };

  useGlobalEventListener(document, "click", (e: MouseEvent) => {
    if (
      dropdownNode &&
      !childRef.current?.contains(e.target as Node) &&
      !dropdownNode.contains(e.target as Node)
    ) {
      setShown(false);
    }
  });

  const targetClickEvent = useEventListener("click", () => {
    setShown(!shown);
  });

  React.useEffect(() => {
    if (childRef.current !== null) {
      targetClickEvent.add(childRef.current);
    }
  }, [childRef, targetClickEvent]);

  return (
    <React.Fragment>
      {child}
      {shown && (
        <Popper {...restProps} targetRef={childRef} getRef={patchedPopperRef}>
          {content}
        </Popper>
      )}
    </React.Fragment>
  );
};
