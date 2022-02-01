import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { HasRootRef } from "../../types";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { IOS } from "../../lib/platform";
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

export const Panel = withAdaptivity<PanelProps & AdaptivityContextInterface>(
  ({ centered = false, children, getRootRef, sizeX, nav, ...restProps }) => {
    const platform = usePlatform();

    return (
      <div
        {...restProps}
        ref={getRootRef}
        vkuiClass={classNames(
          getClassName("Panel", platform),
          `Panel--${sizeX}`,
          {
            "Panel--centered": centered,
            [`Panel--sizeX-${sizeX}`]: true,
          }
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
