import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { useDOM } from "../../lib/dom";
import { usePlatform } from "../../hooks/usePlatform";
import { useEffectDev } from "../../hooks/useEffectDev";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { isRefObject } from "../../lib/isRefObject";
import { warnOnce } from "../../lib/warnOnce";
import { useEventListener } from "../../hooks/useEventListener";
import { SharedDropdownProps } from "./types";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Popper } from "../Popper/Popper";
import "./ActionSheet.css";

function getEl(
  ref: SharedDropdownProps["toggleRef"]
): Element | null | undefined {
  return ref && "current" in ref
    ? ref.current
    : (ref as Element | null | undefined);
}

const warn = warnOnce("ActionSheetDropdown");
export const ActionSheetDropdownDesktop: React.FC<SharedDropdownProps> = ({
  children,
  toggleRef,
  closing,
  popupDirection,
  onClose,
  ...restProps
}) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>();

  useEffectDev(() => {
    const toggleEl = getEl(toggleRef);
    if (!toggleEl) {
      if (process.env.NODE_ENV === "development") {
        warn("Не передан toggleRef");
      }
      return;
    }
  }, [toggleRef]);

  const isPopupDirectionTop = React.useMemo(
    () =>
      popupDirection === "top" ||
      (typeof popupDirection === "function" &&
        popupDirection(elementRef) === "top"),
    [popupDirection, elementRef]
  );

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

  const targetRef = React.useMemo(() => {
    if (isRefObject<SharedDropdownProps["toggleRef"], HTMLElement>(toggleRef)) {
      return toggleRef;
    }
    const refObject = { current: toggleRef as HTMLElement };

    return refObject;
  }, [toggleRef]);

  return (
    <Popper
      targetRef={targetRef}
      offsetDistance={0}
      placement={isPopupDirectionTop ? "top-end" : "bottom-end"}
      vkuiClass={classNames(
        getClassName("ActionSheet", platform),
        "ActionSheet--desktop",
        `ActionSheet--sizeY-${sizeY}`
      )}
      getRef={elementRef}
      forcePortal={false}
    >
      <FocusTrap onClose={onClose} {...restProps} onClick={onClick}>
        {children}
      </FocusTrap>
    </Popper>
  );
};
