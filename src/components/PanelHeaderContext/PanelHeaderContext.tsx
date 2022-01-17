import * as React from "react";
import FixedLayout from "../FixedLayout/FixedLayout";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useDOM } from "../../lib/dom";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useTimeout } from "../../hooks/useTimeout";
import { usePlatform } from "../../hooks/usePlatform";
import "./PanelHeaderContext.css";

export interface PanelHeaderContextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  onClose: VoidFunction;
}

export const PanelHeaderContext: React.FC<PanelHeaderContextProps> = ({
  children,
  onClose,
  opened = false,
  ...restProps
}) => {
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
      vkuiClass={classNames(getClassName("PanelHeaderContext", platform), {
        "PanelHeaderContext--opened": opened,
        "PanelHeaderContext--closing": closing,
        "PanelHeaderContext--desktop": isDesktop,
      })}
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
