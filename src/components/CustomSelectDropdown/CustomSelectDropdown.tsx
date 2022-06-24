import * as React from "react";
import { CustomScrollView } from "../CustomScrollView/CustomScrollView";
import { TrackerOptionsProps } from "../CustomScrollView/useTrackerVisibility";
import { classNames } from "../../lib/classNames";
import { Popper, Placement } from "../Popper/Popper";
import { Spinner } from "../Spinner/Spinner";
import { HasRef } from "../../types";
import "./CustomSelectDropdown.css";

export interface CustomSelectDropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    HasRef<HTMLDivElement>,
    TrackerOptionsProps {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  scrollBoxRef?: React.Ref<HTMLDivElement>;
  fetching?: boolean;
  offsetDistance?: number;
  sameWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (placement?: Placement) => void;
}

const calcIsTop = (placement?: Placement) => placement?.includes("top");

export const CustomSelectDropdown = ({
  children,
  targetRef,
  scrollBoxRef,
  placement,
  fetching,
  onPlacementChange: parentOnPlacementChange,
  offsetDistance = 0,
  sameWidth = true,
  forcePortal = true,
  autoHideScrollbar,
  autoHideScrollbarDelay,
  ...restProps
}: CustomSelectDropdownProps) => {
  const [isTop, setIsTop] = React.useState(() => calcIsTop(placement));

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
      {...restProps}
    >
      <CustomScrollView
        boxRef={scrollBoxRef}
        vkuiClass="CustomSelectDropdown__in"
        autoHideScrollbar={autoHideScrollbar}
        autoHideScrollbarDelay={autoHideScrollbarDelay}
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
