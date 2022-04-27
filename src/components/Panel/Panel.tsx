import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { HasRootRef } from "../../types";
import { IOS } from "../../lib/platform";
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

export const Panel: React.FC<PanelProps> = ({
  centered = false,
  children,
  getRootRef,
  nav,
  ...restProps
}) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Panel", platform),
        centered && "Panel--centered",
        sizeX && `Panel--sizeX-${sizeX}`
      )}
    >
      <Touch Component={TooltipContainer} vkuiClass="Panel__in">
        {platform === IOS && <div vkuiClass="Panel__fade" />}
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
