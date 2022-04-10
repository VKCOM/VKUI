import * as React from "react";
import { usePopper, Modifier } from "react-popper";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { HasRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { useExternRef } from "../../hooks/useExternRef";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import "./Popper.css";

export type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end"
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface PopperCommonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: Placement;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  arrow?: boolean;
  arrowClassName?: string;
  /**
   * Выставлять ширину равной target элементу
   */
  sameWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef: React.RefObject<HTMLElement>;
}

const ARROW_PADDING = 8;
const ARROW_WIDTH = 20;
const ARROW_HEIGHT = 8;

export const Popper: React.FC<PopperProps> = ({
  targetRef,
  children,
  getRef,
  placement = "bottom-start",
  onPlacementChange,
  arrow,
  arrowClassName,
  sameWidth,
  offsetDistance = 8,
  offsetSkidding = 0,
  forcePortal = true,
  style: compStyles,
  ...restProps
}: PopperProps) => {
  const [popperNode, setPopperNode] = React.useState<HTMLDivElement | null>(
    null
  );
  const [smallTargetOffsetSkidding, setSmallTargetOffsetSkidding] =
    React.useState(0);
  const platform = usePlatform();

  const setExternalRef = useExternRef<HTMLDivElement>(getRef, setPopperNode);

  const modifiers = React.useMemo(() => {
    const modifiers: Array<Modifier<string>> = [
      {
        name: "preventOverflow",
      },
      {
        name: "offset",
        options: {
          offset: [
            arrow ? offsetSkidding - smallTargetOffsetSkidding : offsetSkidding,
            arrow ? offsetDistance + ARROW_HEIGHT : offsetDistance,
          ],
        },
      },
      {
        name: "flip",
      },
    ];

    if (arrow) {
      modifiers.push({
        name: "arrow",
        options: {
          padding: ARROW_PADDING,
        },
      });
    }

    if (sameWidth) {
      const sameWidth: Modifier<string> = {
        name: "sameWidth",
        enabled: true,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect: ({ state }) => {
          state.elements.popper.style.width = `${
            (state.elements.reference as HTMLElement).offsetWidth
          }px`;
        },
      };

      modifiers.push(sameWidth);
    }

    return modifiers;
  }, [
    arrow,
    sameWidth,
    smallTargetOffsetSkidding,
    offsetSkidding,
    offsetDistance,
  ]);

  const { styles, state, attributes } = usePopper(
    targetRef.current,
    popperNode,
    {
      placement,
      modifiers,
    }
  );

  const resolvedPlacement = state?.placement;
  const isEdgePlacement =
    !!resolvedPlacement && resolvedPlacement.includes("-"); // true, если поппер отрисован с краю

  // Если поппер рисуется с краю, то нужно опционально сместить его в тех случаях, когда стрелка не дотягивается до
  // таргета из-за маленьких размеров последнего
  useIsomorphicLayoutEffect(() => {
    if (arrow && isEdgePlacement) {
      const placementDirection =
        resolvedPlacement?.startsWith("bottom") ||
        resolvedPlacement?.startsWith("top")
          ? "vertical"
          : "horizontal";

      const arrowSize =
        placementDirection === "vertical" ? ARROW_WIDTH : ARROW_HEIGHT;
      const targetSize =
        (placementDirection === "vertical"
          ? targetRef.current?.offsetWidth
          : targetRef.current?.offsetHeight) ?? 0;

      if (targetSize < arrowSize + 2 * ARROW_PADDING) {
        setSmallTargetOffsetSkidding(ARROW_PADDING + arrowSize / 2);
      }
    } else {
      setSmallTargetOffsetSkidding(0);
    }
  }, [arrow, isEdgePlacement]);

  React.useEffect(() => {
    if (resolvedPlacement) {
      onPlacementChange && onPlacementChange({ placement: resolvedPlacement });
    }
  }, [onPlacementChange, resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      {...attributes.popper}
      vkuiClass={getClassName("Popper", platform)}
      ref={setExternalRef}
      style={{
        ...compStyles,
        ...styles.popper,
        minWidth: sameWidth ? targetRef.current?.scrollWidth : undefined,
      }}
    >
      {arrow && (
        <div
          {...attributes.arrow}
          vkuiClass="Popper__arrow"
          data-popper-arrow={true}
          style={styles.arrow}
        >
          <svg
            vkuiClass="Popper__arrow-in"
            className={arrowClassName}
            width="20"
            height="8"
            viewBox="0 0 20 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0C13 0 15.9999 8 20 8H0C3.9749 8 7 0 10 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
      <div vkuiClass="Popper__content">{children}</div>
    </div>
  );

  return (
    <AppRootPortal forcePortal={forcePortal} vkuiClass="PopperPortal">
      {dropdown}
    </AppRootPortal>
  );
};
