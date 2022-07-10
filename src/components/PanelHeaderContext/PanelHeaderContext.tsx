import * as React from "react";
import { FixedLayout } from "../FixedLayout/FixedLayout";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useDOM } from "../../lib/dom";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useTimeout } from "../../hooks/useTimeout";
import { usePlatform } from "../../hooks/usePlatform";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { VKCOM } from "../../lib/platform";
import "./PanelHeaderContext.css";

export interface PanelHeaderContextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  onClose: VoidFunction;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContext
 */
export const PanelHeaderContext = ({
  children,
  onClose,
  opened = false,
  ...restProps
}: PanelHeaderContextProps) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const [visible, setVisible] = React.useState(opened);
  const closing = visible && !opened;
  const { sizeX } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    opened && setVisible(true);
  }, [opened]);

  useScrollLock(platform !== VKCOM && opened);

  // start closing on outer click
  useGlobalEventListener(
    document,
    "click",
    opened &&
      !closing &&
      ((event) => {
        if (
          elementRef.current &&
          !elementRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      })
  );

  // fallback onAnimationEnd when animationend not supported
  const onAnimationEnd = () => setVisible(false);
  const animationFallback = useTimeout(onAnimationEnd, 200);
  React.useEffect(
    () => (closing ? animationFallback.set() : animationFallback.clear()),
    [animationFallback, closing]
  );

  return (
    <FixedLayout
      {...restProps}
      vkuiClass={classNames(
        getClassName("PanelHeaderContext", platform),
        opened && "PanelHeaderContext--opened",
        closing && "PanelHeaderContext--closing",
        getSizeXClassName("PanelHeaderContext", sizeX)
      )}
      vertical="top"
    >
      <div
        vkuiClass="PanelHeaderContext__in"
        ref={elementRef}
        onAnimationEnd={closing ? onAnimationEnd : undefined}
      >
        <div vkuiClass="PanelHeaderContext__content">{visible && children}</div>
      </div>
      {visible && (
        <div
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          vkuiClass="PanelHeaderContext__fade"
        />
      )}
    </FixedLayout>
  );
};
