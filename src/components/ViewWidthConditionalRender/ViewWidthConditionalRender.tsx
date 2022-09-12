import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { hasReactNode } from "../../lib/utils";
import { ViewWidth } from "../../lib/adaptivity";
import styles from "./ViewWidthConditionalRender.module.css";

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
            className={getViewWidthClassName(
              "ViewWidthConditionalRender__mobile",
              viewWidth,
              styles
            )}
          >
            {mobile}
          </div>
        )}
      {hasReactNode(desktop) &&
        (viewWidth === undefined || viewWidth >= ViewWidth.TABLET) && (
          <div
            className={getViewWidthClassName(
              "ViewWidthConditionalRender__desktop",
              viewWidth,
              styles
            )}
          >
            {desktop}
          </div>
        )}
    </React.Fragment>
  );
};
