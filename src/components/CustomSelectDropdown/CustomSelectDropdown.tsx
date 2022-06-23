import * as React from "react";
import { Modifier } from "react-popper";
import { CustomScrollView } from "../CustomScrollView/CustomScrollView";
import { classNames } from "../../lib/classNames";
import { Popper, Placement } from "../Popper/Popper";
import { Spinner } from "../Spinner/Spinner";
import { HasRef } from "../../types";
import "./CustomSelectDropdown.css";

export interface CustomSelectDropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    HasRef<HTMLDivElement> {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  scrollBoxRef?: React.RefObject<HTMLDivElement>;
  fetching?: boolean;
  offsetDistance?: number;
  sameWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (placement?: Placement) => void;
}

const calcIsTop = (placement?: Placement) => placement?.includes("top");

export const CustomSelectDropdown: React.FC<CustomSelectDropdownProps> = ({
  children,
  targetRef,
  scrollBoxRef,
  placement,
  fetching,
  onPlacementChange: parentOnPlacementChange,
  offsetDistance = 0,
  sameWidth = true,
  forcePortal = true,
  ...restProps
}) => {
  const [isTop, setIsTop] = React.useState(() => calcIsTop(placement));

  const customModifiers = React.useMemo<Array<Modifier<string>>>(() => {
    if (!scrollBoxRef?.current) {
      return [];
    }

    return [
      {
        name: "customSelectChildrenChange",
        enabled: true,
        phase: "main",
        effect: ({ instance }) => {
          const observer = new MutationObserver(instance.forceUpdate);

          observer.observe(scrollBoxRef.current as Element, {
            childList: true,
          });

          return () => {
            observer.disconnect();
          };
        },
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollBoxRef?.current]);

  const onPlacementChange = React.useCallback(
    ({ placement }: { placement?: Placement }) => {
      setIsTop(calcIsTop(placement));
      parentOnPlacementChange?.(placement);
    },
    [parentOnPlacementChange, setIsTop]
  );

  return (
    <Popper
      targetRef={targetRef}
      offsetDistance={offsetDistance}
      sameWidth={sameWidth}
      onPlacementChange={onPlacementChange}
      placement={placement}
      vkuiClass={classNames(
        "CustomSelectDropdown",
        offsetDistance === 0 &&
          (isTop
            ? "CustomSelectDropdown--top"
            : "CustomSelectDropdown--bottom"),
        sameWidth && "CustomSelectDropdown--wide"
      )}
      forcePortal={forcePortal}
      customModifiers={customModifiers}
      {...restProps}
    >
      <CustomScrollView
        boxRef={scrollBoxRef}
        vkuiClass="CustomSelectDropdown__in"
      >
        {fetching ? (
          <div vkuiClass="CustomSelectDropdown__fetching">
            <Spinner size="small" />
          </div>
        ) : (
          children
        )}
      </CustomScrollView>
    </Popper>
  );
};
