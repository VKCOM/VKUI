import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { HasRootRef } from "../../types";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { IOS, VKCOM } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { NavIdProps } from "../../lib/getNavId";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import "./Panel.css";

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    AdaptivityProps,
    NavIdProps {
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = withAdaptivity<PanelProps & AdaptivityContextInterface>(
  ({ centered = false, children, getRootRef, sizeX, nav, ...restProps }) => {
    const platform = usePlatform();

    return (
      <div
        {...restProps}
        ref={getRootRef}
        vkuiClass={classNames(
          "Panel",
          platform === IOS && "Panel--ios",
          platform === VKCOM && "Panel--vkcom",
          // TODO v5.0.0 поправить под новую адаптивность
          `Panel--sizeX-${sizeX}`,
          centered && "Panel--centered"
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
  },
  {
    sizeX: true,
  }
);

Panel.displayName = "Panel";
