import * as React from "react";
import { FixedLayout } from "../FixedLayout/FixedLayout";
import { classNames } from "../../lib/classNames";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useDOM } from "../../lib/dom";
import { IOS } from "../../lib/platform";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useTimeout } from "../../hooks/useTimeout";
import { usePlatform } from "../../hooks/usePlatform";
import { useScrollLock } from "../AppRoot/ScrollContext";
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
  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
  const elementRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    opened && setVisible(true);
  }, [opened]);

  useScrollLock(!isDesktop && opened);

  // start closing on outer click
  useGlobalEventListener(
    document,
    "click",
    isDesktop &&
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
        "PanelHeaderContext",
        platform === IOS && "PanelHeaderContext--ios",
        opened && "PanelHeaderContext--opened",
        closing && "PanelHeaderContext--closing",
        isDesktop && "PanelHeaderContext--desktop",
        // TODO v5.0.0 поправить под новую адаптивность
        (platform !== IOS || (platform === IOS && isDesktop)) &&
          "PanelHeaderContext--rounded"
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
      {!isDesktop && visible && (
        <div onClick={onClose} vkuiClass="PanelHeaderContext__fade" />
      )}
    </FixedLayout>
  );
};
