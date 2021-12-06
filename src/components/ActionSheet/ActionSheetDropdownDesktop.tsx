import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { useDOM } from "../../lib/dom";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { warnOnce } from "../../lib/warnOnce";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useEventListener } from "../../hooks/useEventListener";
import { SharedDropdownProps } from "./types";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./ActionSheet.css";

const warn = warnOnce("ActionSheet");
function getEl(
  ref: SharedDropdownProps["toggleRef"]
): Element | null | undefined {
  return ref && "current" in ref
    ? ref.current
    : (ref as Element | null | undefined);
}

export const ActionSheetDropdownDesktop: React.FC<SharedDropdownProps> = ({
  children,
  toggleRef,
  closing,
  popupDirection,
  onClose,
  ...restProps
}) => {
  const { window, document } = useDOM();
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>();

  const [dropdownStyles, setDropdownStyles] =
    React.useState<React.CSSProperties>({
      left: 0,
      top: 0,
      opacity: 0,
      pointerEvents: "none",
    });
  useIsomorphicLayoutEffect(() => {
    const toggleEl = getEl(toggleRef);
    if (!toggleEl) {
      if (process.env.NODE_ENV === "development") {
        warn("toggleRef not passed");
      }
      return;
    }

    const toggleRect = toggleEl.getBoundingClientRect();
    const elementRect = elementRef.current.getBoundingClientRect();
    const isTop =
      popupDirection === "top" ||
      (typeof popupDirection === "function" &&
        popupDirection(elementRef) === "top");

    setDropdownStyles({
      left:
        toggleRect.left +
        toggleRect.width -
        elementRect.width +
        window.pageXOffset,
      top:
        toggleRect.top +
        window.pageYOffset +
        (isTop ? -elementRect.height : toggleRect.height),
    });
  }, [toggleRef]);

  const bodyClickListener = useEventListener("click", (e: MouseEvent) => {
    const dropdownElement = elementRef?.current;
    if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
      onClose();
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      bodyClickListener.add(document.body);
    });
  }, []);

  const onClick = React.useCallback((e) => e.stopPropagation(), []);

  return (
    <FocusTrap
      onClose={onClose}
      {...restProps}
      getRootRef={elementRef}
      onClick={onClick}
      style={dropdownStyles}
      vkuiClass={classNames(
        getClassName("ActionSheet", platform),
        "ActionSheet--desktop",
        `ActionSheet--sizeY-${sizeY}`
      )}
    >
      {children}
    </FocusTrap>
  );
};
