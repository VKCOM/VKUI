import * as React from "react";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { HasRootRef } from "../../types";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { NavIdProps } from "../../lib/getNavId";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./Panel.css";

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    NavIdProps {
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({
  centered = false,
  children,
  getRootRef,
  nav,
  ...restProps
}: PanelProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Panel",
        platform === Platform.IOS && "Panel--ios",
        platform === Platform.VKCOM && "Panel--vkcom",
        getSizeXClassName("Panel", sizeX),
        centered && "Panel--centered"
      )}
    >
      <Touch Component={TooltipContainer} vkuiClass="Panel__in">
        {platform === Platform.IOS && <div vkuiClass="Panel__fade" />}
        <div vkuiClass="Panel__in-before" />
        {centered ? (
          <div vkuiClass="Panel__centered">{children}</div>
        ) : (
          children
        )}
        <div vkuiClass="Panel__in-after" />
      </Touch>
    </div>
  );
};
