import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { hasReactNode } from "../../lib/utils";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import "./ViewWidthConditionalRender.css";

export interface ViewWidthConditionalRenderProps {
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

export const ViewWidthConditionalRender = ({
  mobile,
  desktop,
}: ViewWidthConditionalRenderProps) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(mobile) &&
        (viewWidth === undefined || viewWidth < ViewWidth.TABLET) && (
          <div
            vkuiClass={getViewWidthClassName(
              "ViewWidthConditionalRender__mobile",
              viewWidth
            )}
          >
            {mobile}
          </div>
        )}
      {hasReactNode(desktop) &&
        (viewWidth === undefined || viewWidth >= ViewWidth.TABLET) && (
          <div
            vkuiClass={getViewWidthClassName(
              "ViewWidthConditionalRender__desktop",
              viewWidth
            )}
          >
            {desktop}
          </div>
        )}
    </React.Fragment>
  );
};
